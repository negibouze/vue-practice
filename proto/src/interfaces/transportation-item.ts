import SelectItem from './select';

export default interface TransportationItem {
  readonly lines: SelectItem[];
  readonly stations: SelectItem[];
  readonly currentLineId: number;
  readonly fromStationId: number;
  readonly toStationId: number;
  readonly walkMin: number;
  readonly walkMax: number;
  readonly busMin: number;
  readonly busMax: number;
}
