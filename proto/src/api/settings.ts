// import TResponse from './core/response';
import IClient from './core/i-client';

export default class Settings {
  private client: IClient;

  constructor(client: IClient) {
    this.client = client;
  }

  public async getBalloon(): Promise<any> {
    const items = [
      { id: 1, label: '物件名', active: false, nl: false },
      { id: 2, label: '建物名', active: true, nl: false },
      { id: 6, label: '所在地', active: true, nl: true },
      { id: 7, label: '交通', active: true, nl: false },
      { id: 8, label: '最寄駅', active: false, nl: false },
      { id: 13, label: '事業主', active: true, nl: false },
      { id: 15, label: '販売会社', active: false, nl: false },
      { id: 18, label: '管理会社', active: true, nl: true },
      { id: 24, label: '着工日', active: false, nl: false },
      { id: 25, label: '竣工日', active: true, nl: false },
      { id: 26, label: '敷地面積', active: false, nl: false },
      { id: 30, label: '構造', active: true, nl: false },
    ];
    return items;
  }

  public async updateBalloon(values: number[]): Promise<any> {
    return values;
  }
}
