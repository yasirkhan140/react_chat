import React from "react";

// interface
import { MessagesTypes } from "../../../data/messages.ts";

// hooks
import { useProfile } from "../../../hooks/index.ts";

interface RepliedMessageProps {
  isFromMe: boolean;
  message: MessagesTypes;
  fullName: string;
}
function RepliedMessage({ isFromMe, message, fullName }: RepliedMessageProps) {
  const { userProfile } = useProfile();

  const isReplyFromMe = message.meta.sender + "" === userProfile.uid + "";
  return (
    <div className="">
      <div className="replymessage-block mb-2 d-flex align-items-start">
        <div className="flex-grow-1">
          <h5 className="conversation-name">
            {isReplyFromMe ? "You" : fullName}
          </h5>

          {message.replyOf?.text && (
            <p className="mb-0">{message.replyOf?.text}</p>
          )}

          {(message.replyOf?.attachments) && (
            <p className="mb-0">
              {message.replyOf?.attachments &&
                !message.replyOf?.image &&
                `${message.replyOf?.attachments.length} Files`}
              {message.replyOf?.image &&
                !message.replyOf?.attachments &&
                `${message.replyOf?.image.length} Images`}
              {message.replyOf?.image &&
                message.replyOf?.attachments &&
                `${message.replyOf?.attachments.length} Files & ${message.replyOf?.image.length} Images`}
            </p>
          )}

          {(message.replyOf?.newimage) && (
            <div className="ctext-wrap">
              <div className="message-img mb-0">
                <div className="message-img-list">
                  <div>
                    <a className="popup-img d-inline-block" href="/dashboard">
                      <img src={message.replyOf?.newimage[0].downloadLink} alt="" className="rounded border" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default RepliedMessage;
