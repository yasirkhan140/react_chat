
import { DISPLAY_TYPES, STATUS_TYPES } from "../constant/settings.ts";

export interface BasicDetailsTypes {
  firstName: string;
  lastName: string;
  profile: string;
  coverImage: string;
  email: string;
  location: string;
}

export interface ThemeTypes {
  color?: string;
  image: string;
}
export interface PrivacyTypes {
  displayprofilePhoto: string;
  displayLastSeen: boolean;
  displayStatus:
    | DISPLAY_TYPES.EVERYONE
    | DISPLAY_TYPES.SELECTED
    | DISPLAY_TYPES.EVERYONE;
  readReceipts: boolean;
  displayGroups:
    | DISPLAY_TYPES.EVERYONE
    | DISPLAY_TYPES.SELECTED
    | DISPLAY_TYPES.EVERYONE;
}
export interface SecurityTypes {
  securityNotification: boolean;
}

export interface SettingsTypes {
  basicDetails: BasicDetailsTypes;
  theme: ThemeTypes;
  privacy: PrivacyTypes;
  security: SecurityTypes;
  status: STATUS_TYPES.ACTIVE | STATUS_TYPES.AWAY | STATUS_TYPES.DO_NOT_DISTURB;
}

let settings: SettingsTypes = {
  basicDetails: {
    firstName: "Kathryn",
    lastName: "Swarey",
    profile: "avatar5",
    coverImage: "avatar5",
    email: "adc@123.com",
    location: "California, USA",
  },
  theme: {
    // color: "bgcolor-radio1",
    image: "bgimg-radio5",
  },
  privacy: {
    displayprofilePhoto: "selected",
    displayLastSeen: true,
    displayStatus: DISPLAY_TYPES.EVERYONE,
    readReceipts: true,
    displayGroups: DISPLAY_TYPES.EVERYONE,
  },
  security: {
    securityNotification: false,
  },
  status: STATUS_TYPES.ACTIVE,
};

const onChangeSettings = (newSettings: SettingsTypes) => {
  settings = newSettings;
};

export { settings, onChangeSettings };
