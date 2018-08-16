import SelectItem from './select';

export default interface AreaItem {
  readonly prefectures: SelectItem[];
  readonly municipalities: SelectItem[];
  readonly currentPrefectureId: number;
  readonly currentMunicipalityId: number;
}
