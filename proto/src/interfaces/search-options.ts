import Coordinate from './coordinate';
import SearchCondition from './search-condition';

interface Circle {
  center: Coordinate;
  radius: number;
}
interface Rectangle {
  ne: Coordinate;
  sw: Coordinate;
}

export default interface SearchOptions extends SearchCondition {
  readonly circle: Circle|null;
  readonly rectangle: Rectangle|null;
}
