// import TResponse from './core/TResponse';
import IClient from './core/IClient';

export default class Settings { 
    private client: IClient

    constructor(client: IClient) {
        this.client = client
        console.log(this.client)
    }

    async getBalloon(): Promise<any> {
        const items = [
            { key: 1, label: '物件名' },
            { key: 2, label: '建物名' },
            { key: 6, label: '所在地' },
            { key: 7, label: '交通' },
            { key: 8, label: '最寄駅' },
            { key: 13, label: '事業主' },
            { key: 15, label: '販売会社' },
            { key: 18, label: '管理会社' },
            { key: 24, label: '着工日' },
            { key: 25, label: '竣工日' },
            { key: 26, label: '敷地面積' },
            { key: 30, label: '構造' }    
        ]
        const values = [ 1, 2, 6, 8, 25 ]

        return { items, values }
    }

    async updateBalloon(values: number[]): Promise<any> {
      console.log(values)
      return values
    }
}
