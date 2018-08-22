import Coordinate from '@/interfaces/coordinate';
import ISearchOptions from '@/interfaces/search-options';
import ISearchCondition from '@/interfaces/user-settings/search-condition';

export default class CircleSearchOptions {
  public readonly center: Coordinate;
  public readonly radius: number;
  public readonly condition: ISearchCondition;

  constructor(center: Coordinate, radius: number, condition: ISearchCondition) {
    this.center = center;
    this.radius = radius;
    this.condition = condition;
  }

  public translate(): ISearchOptions {
    return {
      regionCode: 0,
      stageStatus: [0],
      salesAt: null,
      boardConstructionAt: null,
      constructionAt: null,
      completionAt: null,
      transportation: null,
      townCodes: [0],
      name: null,
      company: null,
      developer: null,
      constractor: null,
      designer: null,
      seller: null,
      manager: null,
      unitCount: null,
      topFloor: null,
      parkingCount: null,
      parkingInstallationRate: null,
      groundArea: null,
      buildingArea: null,
      floorArea: null,
      saleCount: null,
      applyCount: null,
      firstMonthApplyRate: null,
      priceTotal: null,
      areaTotal: null,
      priceMin: null,
      areaMin: null,
      tsuboMin: null,
      priceAverage: null,
      areaAverage: null,
      tsuboAverage: null,
      priceMax: null,
      areaMax: null,
      tsuboMax: null,
      circle: null,
      rectangle: null,
    };
  }
}
