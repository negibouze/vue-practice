interface SettingsItem {
  readonly id: number;
  readonly label: string;
  readonly active: boolean;
}

interface SettingsBallonItem extends SettingsItem {
  readonly nl: boolean;
}

export {
  SettingsItem,
  SettingsBallonItem,
};
