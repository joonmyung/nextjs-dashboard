import { IParams, IResult } from "./interfaces";
import dbHelper from "./dbHelper";

// WARNING: Do not directly modify this file
export class Repository {
    spInvoke(params: IParams): IResult {
        const data = dbHelper.callProcedure('myStoredProcedure', [params.name, params.email, params.age, params.isActive]);
        return data;
    }

    getQuery(Params: IParams): IResult {
        return { result: 'OK' };
    }
}
