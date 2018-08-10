import Coordinate from './coordinate';
import SearchConditions from './search-conditions';

interface Circle {
  center: Coordinate;
  radius: number;
}
interface Rectangle {
  ne: Coordinate;
  sw: Coordinate;
}

export default interface SearchOptions extends SearchConditions {
  readonly circle: Circle|null;
  readonly rectangle: Rectangle|null;
}
