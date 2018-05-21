export class ProjectEntity {
  readonly id: number;
  readonly sellStatus: number;
  readonly latitude: number;
  readonly longitude: number;
  readonly name: string;
  readonly address: string;
  readonly route: string;
  readonly station: string;
  readonly bus: number;
  readonly walk: number;
  readonly units: number;
  readonly floors: number;
  readonly averageTsubo: number;
  readonly averageArea: number;
  readonly averagePrice: number;
  readonly developer: string;
  readonly contractor: string;
  readonly sellDate: string;
  readonly completionDate: string;
  readonly homepage: string;
  readonly hasHomePage: boolean;
  
  constructor(
      id: number,
      sellStatus: number,
      latitude: number,
      longitude: number,
      name: string,
      address: string,
      route: string,
      station: string,
      bus: number,
      walk: number,
      units: number,
      floors: number,
      averageTsubo: number,
      averageArea: number,
      averagePrice: number,
      developer: string,
      contractor: string,
      sellDate: string,
      completionDate: string,
      homepage: string,
      hasHomePage: boolean
  ) {
      this.id = id;
      this.sellStatus = sellStatus;
      this.latitude = latitude;
      this.longitude = longitude;
      this.name = name;
      this.address = address;
      this.route = route;
      this.station = station;
      this.bus = bus;
      this.walk = walk;
      this.units = units;
      this.floors = floors;
      this.averageTsubo = averageTsubo;
      this.averageArea = averageArea;
      this.averagePrice = averagePrice;
      this.developer = developer;
      this.contractor = contractor;
      this.sellDate = sellDate;
      this.completionDate = completionDate;
      this.homepage = homepage;
      this.hasHomePage = hasHomePage;
  }
}
