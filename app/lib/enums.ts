export enum AgeGroup { // 연령대
  UNDER_10 = 0,
  10_19 = 1,
  20_29 = 2,
  30_39 = 3,
  40_49 = 4,
  50_59 = 5,
  60_OR_OVER = 6
}
export enum AuthProvider { // 인증 제공자
  KAKAO = 0,
  BANKSALAD = 1
}
export enum Bank { // 은행
  KOOKMIN = 0,
  SHINHAN = 1,
  WOORI = 2,
  HANA = 3,
  SC = 4,
  CITI = 5,
  KBNK = 6,
  KAKAOBANK = 7,
  TOSSBANK = 8,
  KDBBANK = 9,
  IBK = 10
}
export enum Browser { // 브라우저
  CHROME = 0,
  FIREFOX = 1,
  SAFARI = 2,
  EDGE = 3,
  IE = 4,
  OPERA = 5
}
export enum BCoinOutgoType { // B코인 출금 유형
  PURCHASE = 0,
  EXPIRY = 1
}
export enum CorporatesStatus { // 기업 고객 등록 상태
  ACTIVE = 0,
  LEAVE = 1
}
export enum CCoinOutgoType { // B코인 출금 유형
  PURCHASE = 0,
  EXPIRY = 1
}
export enum EmailVerificationType { // 이메일 확인 유형
  INVITATION = 0,
  CHANGE_PASSPHRASE = 1
}
export enum Formulation { // 제형
  CAPSULE = 0,
  TABLET = 1,
  PILL = 2,
  FLAKE = 3,
  BAR = 4,
  JELLY = 5
}
export enum Gender { // 성별
  FEMALE = 0,
  MALE = 1
}
export enum IntakeConditionType { // 섭취 조건 유형
  CONSTANT = 0,
  AGE_GROUP = 1,
  GENDER = 2,
  COMPLEX = 3
}
export enum MeasuringUnit { // 측량 단위
  MCG_RAE = 0,
  MG = 1,
  MCG = 2,
  IU = 3,
  MG_ATE = 4,
  G = 5,
  CFU = 6,
  ML = 7
}
export enum NutrientStatus { // 소분 영양제 상태
  PENDING = 0,
  CONFIRMED = 1,
  DELETED = 2
}
export enum NutrientType { // 영양제 유형
  DIRECT_TO_CUSTOMER = 0,
  HEALTH_FUNCTIONAL_FOOD = 1,
  OVER_THE_COUNTER = 2,
  QUASI_DRUGS = 3
}
export enum OperatorMenuStatus { // 운영자 메뉴 상태
  ACTIVE = 0,
  DEACTIVATED = 1
}
export enum OperatorStatus { // 운영자 상태
  INACTIVE = 0,
  ACTIVE = 1,
  DEACTIVATED = 2
}
export enum OrderStatus { // 주문 상태
  REQUESTED = 0,
  COMPLETED = 1
}
export enum Os { // 운영체제
  WINDOWS = 0,
  MACOS = 1,
  LINUX = 2,
  ANDROID = 3,
  IOS = 4
}
export enum PaymentMethod { // 결제 수단
  C_COIN = 0,
  B_COIN = 1,
  PG = 2
}
export enum Pg { // PG사
  TOSS = 0,
  NAVERPAY = 1
}
export enum PharmacyStatus { // 약국 등록 상태
  ACTIVE = 0,
  LEAVE = 1
}
export enum SiteType { // 사이트 유형
  SUPPLIER = 0,
  PHARMACY = 1,
  B2E_CORP = 2
}
export enum SubscriptionStatus { // 구독 상태
  ACTIVE = 0,
  DEACTIVATED = 1
}
export enum SupplierStatus { // 공급사 상태
  ACTIVE = 0,
  DEACTIVATED = 1
}
export enum UserStatus { // 사용자 상태
  INACTIVE = 0,
  ACTIVE = 1,
  DEACTIVATED = 2,
  LEAVE = 3
}