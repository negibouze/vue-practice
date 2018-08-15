import SelectItem from './select';

export default interface MunicipalityItem {
  readonly prefectures: SelectItem[];
  readonly municipalities: SelectItem[];
  readonly currentPrefectureId: number;
  readonly currentMunicipalityId: number;
}
