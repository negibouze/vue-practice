import Coordinate from './coordinate';
import DateRange from './date-range';
import FreeWord from './free-word';
import NumberRange from './number-range';
import ITransportation from './transportation';

interface Circle {
  center: Coordinate;
  radius: number;
}
interface Rectangle {
  northwest: Coordinate;
  southeast: Coordinate;
}
interface SummarizeCondition {
  readonly target: number;
  readonly base: number;
}

export default interface ISearchOptions {
  readonly regionCode: number;
  readonly summarizeCondition?: SummarizeCondition;
  readonly circle?: Circle;
  readonly rectangle?: Rectangle;
  readonly stageStatus: number[];
  readonly salesAt?: DateRange;
  readonly boardConstructionAt?: DateRange;
  readonly constructionAt?: DateRange;
  readonly completionAt?: DateRange;
  readonly transportation?: ITransportation[];
  readonly townCodes?: string[];
  readonly name?: FreeWord;
  readonly company?: FreeWord;
  readonly developer?: FreeWord;
  readonly constractor?: FreeWord;
  readonly designer?: FreeWord;
  readonly seller?: FreeWord;
  readonly manager?: FreeWord;
  readonly unitCount?: NumberRange;
  readonly topFloor?: NumberRange;
  readonly parkingCount?: NumberRange;
  readonly parkingInstallationRate?: NumberRange;
  readonly groundArea?: NumberRange;
  readonly buildingArea?: NumberRange;
  readonly floorArea?: NumberRange;
  readonly saleCount?: NumberRange;
  readonly applyCount?: NumberRange;
  readonly firstMonthApplyRate?: NumberRange;
  readonly priceTotal?: NumberRange;
  readonly areaTotal?: NumberRange;
  readonly priceMin?: NumberRange;
  readonly areaMin?: NumberRange;
  readonly tsuboMin?: NumberRange;
  readonly priceAverage?: NumberRange;
  readonly areaAverage?: NumberRange;
  readonly tsuboAverage?: NumberRange;
  readonly priceMax?: NumberRange;
  readonly areaMax?: NumberRange;
  readonly tsuboMax?: NumberRange;
  readonly salesRoomPrice?: NumberRange;
  readonly salesRoomArea?: NumberRange;
  readonly salesRoomTsubo?: NumberRange;
  readonly salesRoomManagementFee?: NumberRange;
  readonly salesRoomRepairFee?: NumberRange;
  readonly salesRoomRoofbalconyArea?: NumberRange;
  readonly salesRoomGardenArea?: NumberRange;
  readonly salesRoomPlanCode?: NumberRange;
  readonly salesRoomDirectionCode?: NumberRange;
  readonly planCode?: number[];
  readonly useRightCode?: number[];
  [key: string]: any;
}
