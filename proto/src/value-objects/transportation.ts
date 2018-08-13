export default class Transportation {
  public readonly lineId: number;
  public readonly fromStationId: number;
  public readonly toStationId: number;
  public readonly walkMin: number;
  public readonly walkMax: number;
  public readonly busMin: number;
  public readonly busMax: number;

  constructor(
    lineId: number,
    fromStationId: number,
    toStationId: number,
    walkMin: number,
    walkMax: number,
    busMin: number,
    busMax: number,
  ) {
    this.lineId = lineId;
    this.fromStationId = fromStationId;
    this.toStationId = toStationId;
    this.walkMin = walkMin;
    this.walkMax = walkMax;
    this.busMin = busMin;
    this.busMax = busMax;
  }
}
