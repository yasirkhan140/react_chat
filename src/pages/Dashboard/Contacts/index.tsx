import React, { useEffect, useState } from "react";

// hooks
import { useRedux } from "../../../hooks/index.ts";
import { createSelector } from "reselect";
// components
import Loader from "../../../components/Loader.tsx";
import AppSimpleBar from "../../../components/AppSimpleBar.tsx";
import InviteContactModal from "../../../components/InviteContactModal.tsx";
import EmptyStateResult from "../../../components/EmptyStateResult.tsx";
import ListHeader from "./ListHeader.tsx";
import Contact from "./Contact.tsx";

// actions
import {
  getContacts,
  inviteContact,
  resetContacts,
  getChannelDetails,
  getChatUserDetails,
  getChatUserConversations,
  changeSelectedChat,
} from "../../../redux/actions.ts";

//utils
import { divideByKey, DivideByKeyResultTypes } from "../../../utils/index.ts";

interface IndexProps {}

const Index = (props: IndexProps) => {
  // global store
  const { dispatch, useAppSelector } = useRedux();

  const errorData = createSelector(
    (state : any) => state.Contacts,
    (state) => ({
      contactsList: state.contacts,
      getContactsLoading: state.getContactsLoading,
      isContactInvited: state.isContactInvited,
    })
  );
  // Inside your component
  const { contactsList,getContactsLoading,isContactInvited} = useAppSelector(errorData);

 
  // get contacts

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const [contacts, setContacts] = useState<Array<any>>([]);
  const [contactsData, setContactsData] = useState<Array<any>>([]);
  useEffect(() => {
    if (contactsList.length > 0) {
      setContacts(contactsList);
    }
  }, [contactsList]);

  useEffect(() => {
    if (contacts.length > 0) {
      const formattedContacts = divideByKey("firstName", contacts);
      setContactsData(formattedContacts);
    }
  }, [contacts]);

  /*
  add contact modal handeling
  */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  /*
  onInvite handeling
  */
  const onInviteContact = (data: any) => {
    dispatch(inviteContact(data));
  };
  useEffect(() => {
    if (isContactInvited) {
      setIsOpen(false);
      setTimeout(() => {
        dispatch(resetContacts("isContactInvited", false));
      }, 1000);
    }
  }, [dispatch, isContactInvited]);

  /*
  contact search
  */
  const [search, setSearch] = useState("");
  const onChangeSearch = (value: string) => {
    setSearch(value);
    let modifiedContacts = [...contactsList];
    let filteredContacts = (modifiedContacts || []).filter((c: any) =>
      c["firstName"].toLowerCase().includes(value.toLowerCase())
    );
    setContacts(filteredContacts);
  };

  const totalC = (contacts || []).length;
  const onSelectChat = (id: string | number, isChannel?: boolean) => {
    if (isChannel) {
      dispatch(getChannelDetails(id));
    } else {
      dispatch(getChatUserDetails(id));
    }
    dispatch(getChatUserConversations(id));
    dispatch(changeSelectedChat(id));
  };

  return (
    <>
      <div className="position-relative">
        {getContactsLoading && <Loader />}
        <ListHeader
          search={search}
          onChangeSearch={onChangeSearch}
          openModal={openModal}
        />

        <AppSimpleBar className="chat-message-list chat-group-list">
          <div>
            {totalC === 0 ? (
              <EmptyStateResult searchedText={search} />
            ) : (
              (contactsData || []).map(
                (letterContacts: DivideByKeyResultTypes, key: number) => (
                  <Contact
                    letterContacts={letterContacts}
                    key={key}
                    index={key}
                    onSelectChat={onSelectChat}
                  />
                )
              )
            )}
          </div>
        </AppSimpleBar>
      </div>
      <InviteContactModal
        isOpen={isOpen}
        onClose={closeModal}
        onInvite={onInviteContact}
      />
    </>
  );
};

export default Index;
