interface DateRange {
  from: string|null;
  to: string|null;
}
interface FreeWord {
  searchWord: string;
  searchType: number;
}
interface NumberRange {
  from: number|null;
  to: number|null;
  searchType: number;
}

export default interface SearchOptions {
  regionCode: number;
  stageStatus: number[];
  salesAt: DateRange|null;
  boardConstructionAt: DateRange|null;
  constructionAt: DateRange|null;
  completionAt: DateRange|null;
  townCodes: number[];
  name: FreeWord|null;
  company: FreeWord|null;
  developer: FreeWord|null;
  constractor: FreeWord|null;
  designer: FreeWord|null;
  seller: FreeWord|null;
  manager: FreeWord|null;
  unitCount: NumberRange|null;
  topFloor: NumberRange|null;
  parkingCount: NumberRange|null;
  parkingInstallationRate: NumberRange|null;
  groundArea: NumberRange|null;
  buildingArea: NumberRange|null;
  floorArea: NumberRange|null;
  saleCount: NumberRange|null;
  applyCount: NumberRange|null;
  firstMonthApplyRate: NumberRange|null;
  priceTotal: NumberRange|null;
  areaTotal: NumberRange|null;
  priceMin: NumberRange|null;
  areaMin: NumberRange|null;
  tsuboMin: NumberRange|null;
  priceAverage: NumberRange|null;
  areaAverage: NumberRange|null;
  tsuboAverage: NumberRange|null;
  priceMax: NumberRange|null;
  areaMax: NumberRange|null;
  tsuboMax: NumberRange|null;
}
