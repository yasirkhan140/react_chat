// constants
import { TABS, LAYOUT_MODES } from "../../constant/layout.ts";

import { LayoutActionTypes, LayoutState } from "./types.ts";

export const INIT_STATE: LayoutState = {
  activeTab: TABS.CHAT,
  layoutMode: LAYOUT_MODES.DARK,
};

const Layout = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case LayoutActionTypes.CHANGE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };

    case LayoutActionTypes.CHANGE_LAYOUT_MODE:
      return {
        ...state,
        layoutMode: action.payload.layoutMode,
      }
    default:
      return { ...state };
  }
};

export default Layout;
