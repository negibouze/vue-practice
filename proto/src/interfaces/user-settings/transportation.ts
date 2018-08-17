export default interface Transportation {
  readonly lineId: number;
  readonly fromStationId: number;
  readonly toStationId: number;
  readonly walkMin: number;
  readonly walkMax: number;
  readonly busMin: number;
  readonly busMax: number;
}
