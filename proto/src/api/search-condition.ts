// import TResponse from './core/response';
import IClient from './core/i-client';

export default class SearchCondition {
  private client: IClient;

  constructor(client: IClient) {
    this.client = client;
  }

  public async getLines(areaCode: number): Promise<any> {
    const items: {[key: number]: object[]} = {
      1: [
        { id: 0, label: '全路線' },
        { id: 101, label: 'JR中央' },
        { id: 102, label: 'JR山手' },
      ],
    };
    return items[areaCode];
  }

  public async getStations(lineId: number): Promise<any> {
    const items: {[key: number]: object[]} = {
      101: [
        { id: 101, label: '東京' },
        { id: 102, label: '神田' },
        { id: 103, label: '御茶ノ水' },
        { id: 104, label: '水道橋' },
        { id: 105, label: '飯田橋' },
        { id: 106, label: '市ケ谷' },
        { id: 107, label: '四ツ谷' },
        { id: 108, label: '信濃町' },
        { id: 109, label: '千駄ケ谷' },
        { id: 110, label: '代々木' },
        { id: 111, label: '新宿' },
        { id: 112, label: '大久保' },
        { id: 113, label: '東中野' },
        { id: 114, label: '中野' },
        { id: 115, label: '高円寺' },
        { id: 116, label: '阿佐ケ谷' },
        { id: 117, label: '荻窪' },
        { id: 118, label: '西荻窪' },
        { id: 119, label: '吉祥寺' },
        { id: 120, label: '三鷹' },
        { id: 121, label: '武蔵境' },
        { id: 122, label: '東小金井' },
        { id: 123, label: '武蔵小金井' },
        { id: 124, label: '国分寺' },
        { id: 125, label: '西国分寺' },
        { id: 126, label: '国立' },
        { id: 127, label: '立川' },
        { id: 128, label: '日野' },
        { id: 129, label: '豊田' },
        { id: 130, label: '八王子' },
        { id: 131, label: '西八王子' },
        { id: 132, label: '高尾' },
      ],
      102: [
        { id: 201, label: '大崎' },
        { id: 202, label: '五反田' },
        { id: 203, label: '目黒' },
        { id: 204, label: '恵比寿' },
        { id: 205, label: '渋谷' },
        { id: 206, label: '原宿' },
        { id: 207, label: '代々木' },
        { id: 208, label: '新宿' },
        { id: 209, label: '新大久保' },
        { id: 210, label: '高田馬場' },
        { id: 211, label: '目白' },
        { id: 212, label: '池袋' },
        { id: 213, label: '大塚' },
        { id: 214, label: '巣鴨' },
        { id: 215, label: '駒込' },
        { id: 216, label: '田端' },
        { id: 217, label: '西日暮里' },
        { id: 218, label: '日暮里' },
        { id: 219, label: '鶯谷' },
        { id: 220, label: '上野' },
      ],
    };
    return items[lineId];
  }

  public async getPrefectures(areaCode: number): Promise<any> {
    const items: {[key: number]: object[]} = {
      1: [
        { id: 101, label: '東京都' },
        { id: 102, label: '神奈川県' },
      ],
    };
    return items[areaCode];
  }

  public async getMunicipalities(prefectureId: number): Promise<any> {
    const items: {[key: number]: object[]} = {
      101: [
        { id: 101, label: '千代田区' },
        { id: 102, label: '中央区' },
        { id: 103, label: '港区' },
        { id: 104, label: '新宿区' },
        { id: 105, label: '文京区' },
        { id: 106, label: '台東区' },
        { id: 107, label: '墨田区' },
        { id: 108, label: '江東区' },
        { id: 109, label: '品川区' },
        { id: 110, label: '目黒区' },
        { id: 111, label: '大田区' },
        { id: 112, label: '世田谷区' },
        { id: 113, label: '渋谷区' },
        { id: 114, label: '中野区' },
        { id: 115, label: '杉並区' },
        { id: 116, label: '豊島区' },
        { id: 117, label: '北区' },
        { id: 118, label: '荒川区' },
        { id: 119, label: '板橋区' },
        { id: 120, label: '練馬区' },
        { id: 121, label: '足立区' },
        { id: 122, label: '葛飾区' },
        { id: 123, label: '江戸川区' },
      ],
      102: [
        { id: 201, label: '横浜市' },
        { id: 202, label: '川崎市' },
        { id: 203, label: '横須賀市' },
        { id: 204, label: '鎌倉市' },
        { id: 205, label: '逗子市' },
        { id: 206, label: '三浦市' },
        { id: 207, label: '葉山町' },
        { id: 208, label: '相模原市' },
        { id: 209, label: '厚木市' },
        { id: 210, label: '大和市' },
        { id: 211, label: '海老名市' },
        { id: 212, label: '座間市' },
        { id: 213, label: '綾瀬市' },
        { id: 214, label: '愛川町' },
        { id: 215, label: '清川村' },
        { id: 216, label: '平塚市' },
        { id: 217, label: '藤沢市' },
        { id: 218, label: '茅ヶ崎市' },
        { id: 219, label: '秦野市' },
        { id: 220, label: '伊勢原市' },
        { id: 221, label: '寒川町' },
        { id: 222, label: '大磯町' },
        { id: 223, label: '二宮町' },
        { id: 224, label: '小田原市' },
        { id: 225, label: '南足柄市' },
        { id: 226, label: '中井町' },
        { id: 227, label: '大井町' },
        { id: 228, label: '松田町' },
        { id: 229, label: '山北町' },
        { id: 230, label: '開成町' },
        { id: 231, label: '箱根町' },
        { id: 232, label: '真鶴町' },
        { id: 233, label: '湯河原町' },
      ],
    };
    return items[prefectureId];
  }
}
