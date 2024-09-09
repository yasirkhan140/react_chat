import React from "react";
import classnames from "classnames";

// hooks
import { useRedux } from "../../hooks/index.ts";

// hooks
import { useConversationUserType } from "../../hooks/index.ts";
import { createSelector } from "reselect";
// component
import Leftbar from "./Leftbar.tsx";
import ConversationUser from "./ConversationUser/index.tsx";
import UserProfileDetails from "./UserProfile/index.tsx";
import Welcome from "./ConversationUser/Welcome.tsx";

interface IndexProps {}
const Index = (props: IndexProps) => {
  // global store
  const { useAppSelector } = useRedux();

  // const { selectedChat } = useAppSelector(state => ({
  //   selectedChat: state.Chats.selectedChat,
  // }));
  const errorData = createSelector(
    (state : any) => state.Chats,
    (state) => ({
      selectedChat: state.selectedChat,
    })
  );
  // Inside your component
  const { selectedChat} = useAppSelector(errorData);


  const { isChannel } = useConversationUserType();

  return (
    <>
      <Leftbar />

      <div
        className={classnames("user-chat", "w-100", "overflow-hidden", {
          "user-chat-show": selectedChat,
        })}
        id="user-chat"
      >
        <div className="user-chat-overlay" id="user-chat-overlay"></div>
        {selectedChat !== null ? (
          <div className="chat-content d-lg-flex">
            <div className="w-100 overflow-hidden position-relative">
              <ConversationUser isChannel={isChannel} />
            </div>
            <UserProfileDetails isChannel={isChannel} />
          </div>
        ) : (
          <Welcome />
        )}
      </div>
    </>
  );
};

export default Index;
