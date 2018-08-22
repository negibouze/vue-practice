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
    const required = {
      regionCode: 1,
      circle: {
        center: {
          latitude: this.center.latitude,
          longitude: this.center.longitude,
        },
        radius: this.radius,
      },
    };
    const condition = this.removeEmptyParams(this.condition);
    return Object.assign({}, required, condition);
  }

  private removeEmptyParams(condition: ISearchCondition): ISearchCondition {
    const c: ISearchCondition = { stageStatus: [] };
    for (const key in condition) {
      if (!condition.hasOwnProperty(key)) {
        continue;
      }
      const v = condition[key];
      if (!this.isEmpty(v)) {
        c[key] = v;
      }
    }
    return c;
  }

  private isEmpty(obj: any): boolean {
    return false;
    // if () {
    //   return obj === '';
    // }
    // if () {

    // }
    // if () {

    // }
    // return true;
  }
}
