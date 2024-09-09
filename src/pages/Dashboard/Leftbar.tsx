import React from "react";
import { TabContent, TabPane } from "reactstrap";

// hooks
import { useRedux } from "../../hooks/index.ts";
import { createSelector } from "reselect";
// constants
import { TABS } from "../../constant/layout.ts";

// component
import Profile from "./Profile/index.tsx";
import Chats from "./Chats/index.tsx";
import Contacts from "./Contacts/index.tsx";
import Calls from "./Calls/index.tsx";
import Bookmark from "./Bookmark/index.tsx";
import Settings from "./Settings/index.tsx";

interface LeftbarProps {}
const Leftbar = (props: LeftbarProps) => {
  // global store
  const { useAppSelector } = useRedux();

  // const { activeTab } = useAppSelector(state => ({
  //   activeTab: state.Layout.activeTab,
  // }));
  const errorData = createSelector(
    (state : any) => state.Layout,
    (state) => ({
      activeTab: state.activeTab,
    })
  );
  // Inside your component
  const { activeTab} = useAppSelector(errorData);

  return (
    <>
      {/* start chat-leftsidebar */}
      <div className="chat-leftsidebar">
        <TabContent activeTab={activeTab}>
          {/* Start Profile tab-pane */}
          <TabPane
            tabId={TABS.USERS}
            role="tabpanel"
          >
            <Profile />
          </TabPane>

          <TabPane
            tabId={TABS.CHAT}
            role="tabpanel"
          >
            <Chats />
          </TabPane>

          <TabPane
            tabId={TABS.CONTACTS}
            role="tabpanel"
          >
            <Contacts />
          </TabPane>

          <TabPane
            tabId={TABS.CALLS}
            role="tabpanel"
          >
            <Calls />
          </TabPane>

          <TabPane
            tabId={TABS.BOOKMARK}
            role="tabpanel"
          >
            <Bookmark />
          </TabPane>

          <TabPane
            tabId={TABS.SETTINGS}
            role="tabpanel"
          >
            <Settings />
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};

export default Leftbar;
