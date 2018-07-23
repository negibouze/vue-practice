export default class Select {
  value: string | number
  label: string

  constructor(value: string | number, label: string) {
    this.value = value
    this.label = label
  }
}
