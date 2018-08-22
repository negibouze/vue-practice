// import TResponse from './core/response';
import ISearchCondition from '@/interfaces/user-settings/search-condition';
import IClient from './core/i-client';

export default class User {
  private client: IClient;

  constructor(client: IClient) {
    this.client = client;
  }

  public async getSearchCondition(): Promise<ISearchCondition> {
    const item = {
      stageStatus: [1, 3],
      salesAt: {
        from: '2018-05-13',
        to: '2018-05-31',
      },
      transportations: [
        {
          lineId: 101,
          fromStationId: 103,
          toStationId: 108,
          walkMin: 5,
          walkMax: 10,
          busMin: 3,
        },
        {
          lineId: 102,
          fromStationId: 210,
          toStationId: 212,
          walkMax: 20,
          busMin: 0,
          busMax: 5,
        },
      ],
      areas: [
        { prefectureId: 101, municipalityId: 102 },
        { prefectureId: 102, municipalityId: 206 },
        { prefectureId: 101, municipalityId: 104 },
      ],
      name: {
        searchWord: '検索したい言葉を入力する。',
        searchType: 1,
      },
      company: {
        searchWord: 'おやつカンパニー',
        searchType: 2,
      },
      unitCount: {
        from: 50,
        to: 100,
      },
    };
    return item;
  }
}
