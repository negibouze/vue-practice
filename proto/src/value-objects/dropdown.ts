interface NumberKeyItem {
  key: number
  value: number | string
}
interface StringKeyItem {
  key: string
  value: number | string
}

enum Trigger {
  HOVER = 'hover',
  CLICK = 'click'
}

export {
  NumberKeyItem,
  StringKeyItem,
  Trigger
}

export default class Dropdown {
  items: NumberKeyItem[] | StringKeyItem[]
  trigger: Trigger

  constructor(items: NumberKeyItem[] | StringKeyItem[], trigger: Trigger = Trigger.CLICK) {
    this.items = items
    this.trigger = trigger
  }
}
