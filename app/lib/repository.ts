import { IParams, IResult } from "./interfaces";
import { spInvoke } from "./actions";

// WARNING: Do not directly modify this file
export class Repository {
    async createCustomer(params: IParams): Promise<IResult> {
        return await spInvoke("call sp-product_info_imported-migrate-v1(?, ?)", [params.pCallDate, params.pStatusCode]);
    }
}
