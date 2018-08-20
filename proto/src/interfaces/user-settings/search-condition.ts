import DateRange from '../date-range';
import FreeWord from '../free-word';
import NumberRange from '../number-range';
import ITransportation from '../transportation';
import IArea from './area';

export default interface ISearchCondition {
  readonly stageStatus: number[];
  readonly salesAt?: DateRange|null;
  // readonly boardConstructionAt: DateRange|null;
  // readonly constructionAt: DateRange|null;
  // readonly completionAt: DateRange|null;
  readonly transportations?: ITransportation[]|null;
  readonly areas?: IArea[]|null;
  readonly name?: FreeWord|null;
  // readonly company: FreeWord|null;
  // readonly developer: FreeWord|null;
  // readonly constractor: FreeWord|null;
  // readonly designer: FreeWord|null;
  // readonly seller: FreeWord|null;
  // readonly manager: FreeWord|null;
  readonly unitCount?: NumberRange|null;
  // readonly topFloor: NumberRange|null;
  // readonly parkingCount: NumberRange|null;
  // readonly parkingInstallationRate: NumberRange|null;
  // readonly groundArea: NumberRange|null;
  // readonly buildingArea: NumberRange|null;
  // readonly floorArea: NumberRange|null;
  // readonly saleCount: NumberRange|null;
  // readonly applyCount: NumberRange|null;
  // readonly firstMonthApplyRate: NumberRange|null;
  // readonly priceTotal: NumberRange|null;
  // readonly areaTotal: NumberRange|null;
  // readonly priceMin: NumberRange|null;
  // readonly areaMin: NumberRange|null;
  // readonly tsuboMin: NumberRange|null;
  // readonly priceAverage: NumberRange|null;
  // readonly areaAverage: NumberRange|null;
  // readonly tsuboAverage: NumberRange|null;
  // readonly priceMax: NumberRange|null;
  // readonly areaMax: NumberRange|null;
  // readonly tsuboMax: NumberRange|null;
  [key: string]: any;
}
