export default class Radio {
  public readonly value: string | number;
  public readonly label: string;

  constructor(value: string | number, label: string) {
    this.value = value;
    this.label = label;
  }
}
