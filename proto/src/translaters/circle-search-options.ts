import SearchOptions from '@/api/search-options';
import Coordinate from '@/value-objects/coordinate';

export default class CircleSearchOptions {
  public readonly center: Coordinate;
  public readonly radius: number;
  public readonly conditions: object;

  constructor(center: Coordinate, radius: number, conditions: object) {
    this.center = center;
    this.radius = radius;
    this.conditions = conditions;
  }

  public translate(): SearchOptions {
    return {
      center: 0,
    };
  }
}
