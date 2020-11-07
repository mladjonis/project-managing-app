import React from "react";

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;
  return <div>{text}</div>;
};

export default ChatMessage;
