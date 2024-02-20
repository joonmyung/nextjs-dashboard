import * as z from 'zod';
import * as e from '@/app/lib/enums'


export const OperatorEmailVerifications = {
  createV1: {
    name: 'sp-sc-operator_email_verifications-c-v1',
    status: 'active',
    inputParams: z.object({
      pEmail: z
        .string()
        .max(64)
        .email(),
      pSiteType: z
        .nativeEnum(e.SiteType),
      pEmailVerificationType: z
        .nativeEnum(e.EmailVerificationType),
      pIp: z
        .string()
        .max(15)
        .ip({version: "v4"}),
      pCallDate: z
        .string()
        .regex(/d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) ([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/)
    }),
    outputParams: null,
    outputRs: z.object({
      site_id: z
        .number()
        .int(),
      verification_code: z
        .string(),
      expiry_date: z
        .string()
    })
  },

  findOneV1: {
    name: 'sp-sc-operator_email_verifications-ro-v1',
    status: 'active',
    inputParams: z.object({
      pEmail: z
        .string()
        .max(64)
        .email(),
      pSiteId: z
        .number()
        .int()
        .min(0)
        .max(16777215),
      pVerificationCode: z
        .string()
        .length(6),
      pEmailVerificationType: z
        .nativeEnum(e.EmailVerificationType),
      pIp: z
        .string()
        .max(15)
        .ip({version: "v4"}),
      pCallDate: z
        .string()
        .regex(/d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) ([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/)
    }),
    outputParams: null,
    outputRs: z.object({
      wrong_verification_code_count: z
        .number()
        .int()
    })
  }
};

export const OperatorRefreshTokens = {
  createV1: {
    name: 'sp-sc-operator_refresh_tokens-c-v1',
    status: 'deprecated',
    inputParams: z.object({
      pOperatorRefreshToken: z
        .string()
        .max(64),
      pOperatorId: z
        .number()
        .int()
        .min(0)
        .max(65535),
      pOs: z
        .nativeEnum(e.Os),
      pBrowser: z
        .nativeEnum(e.Browser),
      pIp: z
        .string()
        .max(15)
        .ip({version: "v4"}),
      pExpiryDate: z
        .string()
        .regex(/d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) ([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/),
      pCallDate: z
        .string()
        .regex(/d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) ([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/)
    }),
    outputParams: null,
    outputRs: null
  },

  deleteV1: {
    name: 'sp-sc-operator_refresh_tokens-d-v1',
    status: 'deprecated',
    inputParams: z.object({
      pOperatorRefreshToken: z
        .string()
        .max(256),
      pOperatorId: z
        .number()
        .int()
        .min(0)
        .max(65535),
      pIp: z
        .string()
        .max(15)
        .ip({version: "v4"}),
      pCallDate: z
        .string()
        .regex(/d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) ([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/)
    }),
    outputParams: null,
    outputRs: null
  },

  findOneV1: {
    name: 'sp-sc-operator_refresh_tokens-ro-v1',
    status: 'deprecated',
    inputParams: z.object({
      pOperatorRefreshToken: z
        .string()
        .max(256),
      pCallDate: z
        .string()
        .regex(/d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) ([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/)
    }),
    outputParams: null,
    outputRs: z.object({
      operator_id: z
        .number()
        .int(),
      issue_date: z
        .string(),
      expiry_date: z
        .string()
    })
  },

  updateV1: {
    name: 'sp-sc-operator_refresh_tokens-u-v1',
    status: 'deprecated',
    inputParams: z.object({
      pOldOperatorRefreshToken: z
        .string()
        .max(256),
      pOperatorId: z
        .number()
        .int()
        .min(0)
        .max(65535),
      pNewOperatorRefreshToken: z
        .string()
        .max(256),
      pIp: z
        .string()
        .max(15)
        .ip({version: "v4"}),
      pExpiryDate: z
        .string()
        .regex(/d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) ([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/),
      pCallDate: z
        .string()
        .regex(/d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) ([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/)
    }),
    outputParams: null,
    outputRs: null
  }
};

export const Operators = {
  findOneV1: {
    name: 'sp-sc-operators-ro-v1',
    status: 'active',
    inputParams: z.object({
      pOperatorId: z
        .number()
        .int()
        .min(0)
        .max(65535),
      pCallDate: z
        .string()
        .regex(/d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) ([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/)
    }),
    outputParams: null,
    outputRs: z.object({
      operator_id: z
        .number()
        .int(),
      email: z
        .string(),
      operator_name: z
        .string(),
      operator_status: z
        .number()
        .int(),
      last_access_date: z
        .string(),
      join_date: z
        .string(),
      deactivate_date: z
        .string(),
      supplier_id: z
        .number()
        .int(),
      supplier_name: z
        .string(),
      supplier_status: z
        .number()
        .int(),
      pharmacy_id: z
        .number()
        .int(),
      pharmacy_name: z
        .string(),
      pharmacy_status: z
        .number()
        .int(),
      corporate_id: z
        .number()
        .int(),
      corporate_name: z
        .string(),
      corporates_status: z
        .number()
        .int()
    })
  }
};

export const OperatorsPassphrase = {
  updateV1: {
    name: 'sp-sc-operators-passphrase-u-v1',
    status: 'active',
    inputParams: z.object({
      pEmail: z
        .string()
        .max(64)
        .email(),
      pSiteId: z
        .number()
        .int()
        .min(0)
        .max(16777215),
      pVerificationCode: z
        .string()
        .length(6),
      pPassphrase: z
        .string()
        .max(30),
      pSalt: z
        .string()
        .max(128),
      pIp: z
        .string()
        .max(15)
        .ip({version: "v4"}),
      pCallDate: z
        .string()
        .regex(/d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) ([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/)
    }),
    outputParams: null,
    outputRs: null
  }
};

export const OperatorsPrivilege = {
  findOneV1: {
    name: 'sp-sc-operators-privilege-ro-v1',
    status: 'active',
    inputParams: z.object({
      pIp: z
        .string()
        .max(15)
        .ip({version: "v4"}),
      pSiteType: z
        .number()
        .int()
        .min(0)
        .max(65535),
      pEmail: z
        .string()
        .max(64)
        .email(),
      pPassphrase: z
        .string()
        .max(30),
      pSalt: z
        .string()
        .max(128),
      pCallDate: z
        .string()
        .regex(/d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) ([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/)
    }),
    outputParams: null,
    outputRs: z.object({
      operator_id: z
        .number()
        .int(),
      operator_roles: z
        .string(),
      operator_permissions: z
        .string(),
      site_id: z
        .number()
        .int(),
      wrong_passphrase_count: z
        .number()
        .int()
    })
  }
};

