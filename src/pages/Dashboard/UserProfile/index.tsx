import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { createSelector } from "reselect";
// hooks
import { useRedux } from "../../../hooks/index.ts";

// actions
import {
  toggleUserDetailsTab,
  toggleFavouriteContact,
  getChatUserDetails,
  toggleArchiveContact,
} from "../../../redux/actions.ts";

// components
import AudioCallModal from "../../../components/AudioCallModal.tsx";
import VideoCallModal from "../../../components/VideoCallModal.tsx";
import AppSimpleBar from "../../../components/AppSimpleBar.tsx";
import Loader from "../../../components/Loader.tsx";
import ProfileUser from "./ProfileUser.tsx";
import Actions from "./Actions.tsx";
import BasicDetails from "./BasicDetails.tsx";
import Groups from "./Groups.tsx";
import Media from "../../../components/Media.tsx";
import AttachedFiles from "../../../components/AttachedFiles.tsx";
import Status from "./Status.tsx";
import Members from "./Members.tsx";

interface IndexProps {
  isChannel: boolean;
}
const Index = ({ isChannel }: IndexProps) => {
  // global store
  const { dispatch, useAppSelector } = useRedux();

  const errorData = createSelector(
    (state : any) => state.Chats,
   
    (state) => ({
      chatUserDetails: state.chatUserDetails,
      getUserDetailsLoading: state.getUserDetailsLoading,
      isOpenUserDetails: state.isOpenUserDetails,
      isFavouriteContactToggled: state.isFavouriteContactToggled,
    })
  );
  // Inside your component
  const { chatUserDetails,getUserDetailsLoading,isOpenUserDetails,isFavouriteContactToggled } = useAppSelector(errorData);

  useEffect(() => {
    if (isFavouriteContactToggled) {
      dispatch(getChatUserDetails(chatUserDetails.id));
    }
  }, [dispatch, isFavouriteContactToggled, chatUserDetails.id]);

  /*
  close tab
  */
  const onCloseUserDetails = () => {
    dispatch(toggleUserDetailsTab(false));
  };

    /*
    video call modal
    */
  const [isOpenVideoModal, setIsOpenVideoModal] = useState<boolean>(false);
  const onOpenVideo = () => {
    setIsOpenVideoModal(true);
  };
  const onCloseVideo = () => {
    setIsOpenVideoModal(false);
  };

  /*
  audio call modal  
  */
  const [isOpenAudioModal, setIsOpenAudioModal] = useState<boolean>(false);
  const onOpenAudio = () => {
    setIsOpenAudioModal(true);
  };
  const onCloseAudio = () => {
    setIsOpenAudioModal(false);
  };

  /*
  favourite
  */
  const onToggleFavourite = () => {
    dispatch(toggleFavouriteContact(chatUserDetails.id));
  };

  /*
  archive
  */
  const onToggleArchive = () => {
    dispatch(toggleArchiveContact(chatUserDetails.id));
  };

  return (
    <>
      <div
        className={classnames("user-profile-sidebar", {
          "d-block": isOpenUserDetails,
        })}
      >
        <div className="position-relative">
          {getUserDetailsLoading && <Loader />}

          <ProfileUser
            onCloseUserDetails={onCloseUserDetails}
            chatUserDetails={chatUserDetails}
            onOpenVideo={onOpenVideo}
            onOpenAudio={onOpenAudio}
          />
          {/* <!-- End profile user --> */}

          {/* <!-- Start user-profile-desc --> */}
          <AppSimpleBar className="p-4 user-profile-desc">
            {" "}
            {/* simplebar */}
            <Actions
              chatUserDetails={chatUserDetails}
              onOpenVideo={onOpenVideo}
              onOpenAudio={onOpenAudio}
              onToggleFavourite={onToggleFavourite}
              onToggleArchive={onToggleArchive}
            />
            <Status about={chatUserDetails.about} />
            {!isChannel ? (
              <>
                <BasicDetails chatUserDetails={chatUserDetails} />
                <hr className="my-4" />
                <Groups chatUserDetails={chatUserDetails} />
                <hr className="my-4" />
              </>
            ) : (
              <>
                <Members chatUserDetails={chatUserDetails} />
                <hr className="my-4" />
              </>
            )}
            <Media media={chatUserDetails.media} limit={3} />
            <hr className="my-4" />
            <AttachedFiles attachedFiles={chatUserDetails.attachedFiles} />
          </AppSimpleBar>
          {/* <!-- end user-profile-desc --> */}
          {isOpenAudioModal && (
            <AudioCallModal
              isOpen={isOpenAudioModal}
              onClose={onCloseAudio}
              user={chatUserDetails}
            />
          )}
          {isOpenVideoModal && (
            <VideoCallModal
              isOpen={isOpenVideoModal}
              onClose={onCloseVideo}
              user={chatUserDetails}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
