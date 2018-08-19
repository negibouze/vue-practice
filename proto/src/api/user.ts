// import TResponse from './core/response';
import IClient from './core/i-client';
import ISearchCondition from '@/interfaces/user-settings/search-condition';

export default class User {
  private client: IClient;

  constructor(client: IClient) {
    this.client = client;
  }

  public async getSearchCondition(): Promise<ISearchCondition> {
    const item = {
      stageStatus: [1, 3],
      salesAt: {
        from: '',
        to: '',
      },
      transportations: [
        {
          lineId: 101,
          fromStationId: 103,
          toStationId: 108,
          walkMin: 5,
          walkMax: 10,
          busMin: 0,
          busMax: 3,
        },
        {
          lineId: 102,
          fromStationId: 110,
          toStationId: 112,
          walkMin: 10,
          walkMax: 20,
          busMin: 0,
          busMax: 5,
        },
      ],
      areas: [
        { prefectureId: 101, municipalityId: 102 },
        { prefectureId: 102, municipalityId: 106 },
        { prefectureId: 101, municipalityId: 104 },
      ],
      name: {
        searchWord: '検索したい言葉を入力する。',
        searchType: 1,
      },
      unitCount: {
        from: 50,
        to: 100,
        searchType: 1,
      },
    };
    return item;
  }
}
