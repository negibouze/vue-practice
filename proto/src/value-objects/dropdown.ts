interface NumberKeyItem {
  key: number;
  value: number | string;
}
interface StringKeyItem {
  key: string;
  value: number | string;
}

enum Trigger {
  CLICK = 'click',
  HOVER = 'hover',
}

export {
  NumberKeyItem,
  StringKeyItem,
  Trigger,
};

export default class Dropdown {
  public readonly items: NumberKeyItem[] | StringKeyItem[];
  public readonly trigger: Trigger;

  constructor(items: NumberKeyItem[] | StringKeyItem[], trigger: Trigger = Trigger.CLICK) {
    this.items = items;
    this.trigger = trigger;
  }
}
