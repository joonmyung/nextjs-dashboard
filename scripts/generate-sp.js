function toCamelCase(str) {
  return str.split('_').reduce((acc, word, index) => index === 0 ? acc + word.toLowerCase() : acc + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(), "");
}

function mysqlTypeToTsType(mysqlType) {
  const lowerCaseType = mysqlType.toLowerCase();
  switch (lowerCaseType) {
    case 'int':
    case 'int unsigned':
    case 'tinyint':
    case 'smallint':
    case 'mediumint':
    case 'bigint':
    case 'decimal':
    case 'float':
    case 'double':
    case 'real':
      return 'number';
    case 'char':
    case 'varchar':
    case 'tinytext':
    case 'text':
    case 'mediumtext':
    case 'longtext':
    case 'enum':
    case 'set':
      return 'string';
    case 'datetime':
    case 'date':
    case 'time':
    case 'timestamp':
      return 'Date';
    case 'blob':
    case 'tinyblob':
    case 'mediumblob':
    case 'longblob':
      return 'Buffer';
    case 'json':
      return 'any';
    default:
      return 'unknown';
  }
}

const spDesc = "-- auto-generated definition\n" +
    "create\n" +
    "    definer = deploy@`%` procedure `sp-product_info_imported-migrate-v1`(IN pCallDate datetime) comment '\n" +
    "`@`author: 김도열\n" +
    "`@`email: dy.kim@aimeelabs.kr\n" +
    "`@`description: 적재한 건강기능식품 데이터 원본을 데이터베이스에 통합합니다.\n" +
    "`@`createdDate: 2023-12-26\n" +
    "`@`commitMessage: feat - create sp\n" +
    "`@`parameter: \n" +
    "    pCallDate^^varchar^^The date and time the stored procedure was called\n" +
    "    pStatusCode^^tinyint^^Status code - 0=success, 1=invalid call, 2=error$$.enum.[0,1,2]\n" +
    "`@`result set:\n" +
    "    new_products^^int UNSIGNED^^새로 등록한 제품 개수\n" +
    "    new_product_idx_start^^int^^새로 등록한 제품의 시작 idx\n" +
    "    new_product_idx_end^^int^^새로 등록한 제품의 마지막 idx\n" +
    "    deprecated_products^^int UNSIGNED^^신고번호가 더 이상 유효하지 않은 제품 개수\n" +
    "    duration^^time^^소요 시간\n" +
    "    ^^\n" +
    "    sp_return_value^^json^^SP 리턴 코드$$.json.{\"status_code\": 0, \"error_code\": null, \"error_message\": null}\n" +
    "'\n" +
    "-- missing source code\n" +
    ";"


function parseSpDesc(spDesc) {
  const lines = spDesc.split('\n');
  let currProperty = '';
  const result = {
    procedure: '',
    description: '',
    parameters: [],
    resultSet: [],
  };

  lines.forEach((line) => {
    if (line.includes('definer')) {
      // Use .split("`")[3] instead of .split("`")[1]
      result.procedure = line.split('`')[3].trim();
    } else if (line.startsWith('`@`description')) {
      result.description = line.split(': ')[1].trim();
    } else if (line.startsWith('`@`parameter')) {
      currProperty = 'parameters';
    } else if (line.startsWith('`@`result set')) {
      currProperty = 'resultSet';
    }

    if (currProperty && !line.startsWith('`@`')) {
      const splitLine = line.trim().split('^^');
      if (splitLine.length === 3) {
        const paramOrResult = {
          name: splitLine[0],
          datatype: mysqlTypeToTsType(splitLine[1]),
          description: splitLine[2],
        };

        if (paramOrResult.name !== 'sp_return_value') {
          result[currProperty].push(paramOrResult);
        }
      }
    }
  })

  return result;
}

const JSONDesc = parseSpDesc(spDesc);
console.log(JSON.stringify(JSONDesc, null, 2));

const { Project } = require("ts-morph");

const project = new Project();
const interfaceFile = project.createSourceFile("app/lib/interfaces.ts",
    `// WARNING: Do not directly modify this file\n
export interface IParams {
  ${JSONDesc.parameters.map(p => `${p.name}: ${p.datatype}; // ${p.description}`).join('\n  ')}
}
export interface IResult {
  ${JSONDesc.resultSet.map(r => `${toCamelCase(r.name)}: ${r.datatype}; // ${r.description}`).join('\n  ')}
}
export interface IStatus {
  statusCode: number,
  errorCode: number | null,
  errorMessage: string | null
}
`,
    { overwrite: true });

interfaceFile.saveSync();

const repositoryFile = project.createSourceFile("app/lib/repository.ts", "", { overwrite: true });

// Add warning comment at the top of repository.ts
repositoryFile.insertText(0, "// WARNING: Do not directly modify this file\n\n");


const callProcedureParams = JSONDesc.parameters.map(param => `params.${param.name}`).join(', ');
const parameterPlaceholders = new Array(JSONDesc.parameters.length).fill('?').join(', ');

const repoDef = {
  name: "Repository",
  isExported: true,
  methods: [
    {
      name: "async createCustomer",
      parameters: [{ name: "params", type: "IParams" }],
      returnType: "Promise<IResult>",
      statements: [
        `return await spInvoke("call ${JSONDesc.procedure}(${parameterPlaceholders})", [${callProcedureParams}]);`,
      ]
    },
  ],
};

repositoryFile.addImportDeclaration({
  namedImports: ["IParams", "IResult"],
  moduleSpecifier: "./interfaces"
});
// Add import for dbHelper
repositoryFile.addImportDeclaration({
  defaultImport: "{ spInvoke }",
  moduleSpecifier: "./actions" // Adjust the path according to your file structure
});

repositoryFile.addClass(repoDef);

repositoryFile.saveSync();
