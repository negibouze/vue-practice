import { NumberKeyItem, StringKeyItem } from '@/interfaces/dropdown';

enum Trigger {
  CLICK = 'click',
  HOVER = 'hover',
}

export {
  Trigger,
};

export default class DropdownItems {
  public readonly items: NumberKeyItem[] | StringKeyItem[];
  public readonly trigger: Trigger;

  constructor(items: NumberKeyItem[] | StringKeyItem[], trigger: Trigger = Trigger.CLICK) {
    this.items = items;
    this.trigger = trigger;
  }
}
