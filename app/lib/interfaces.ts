// WARNING: Do not directly modify this file

export interface IParams {
  pCallDate: string; // The date and time the stored procedure was called
  pStatusCode: number; // Status code - 0=success, 1=invalid call, 2=error$$.enum.[0,1,2]
}
export interface IResult {
  newProducts: number; // 새로 등록한 제품 개수
  newProductIdxStart: number; // 새로 등록한 제품의 시작 idx
  newProductIdxEnd: number; // 새로 등록한 제품의 마지막 idx
  deprecatedProducts: number; // 신고번호가 더 이상 유효하지 않은 제품 개수
  duration: Date; // 소요 시간
}
export interface IStatus {
  statusCode: number,
  errorCode: number | null,
  errorMessage: string | null
}
