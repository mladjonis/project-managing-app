import React from "react";

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;
  const sentOrReceivedClass = uid === props.uid ? "sent" : "received";
  console.log(sentOrReceivedClass);
  console.log(props);
  //console.log(props);
  return (
    // <div className={`message ${sentOrReceivedClass}`}>
    //   <img src={photoURL} className="circle responsive-img"/>
    //   <p>{text}</p>
    // </div>
    <div
      className={`col s12 m8 offset-m2 l6 offset-l3 message ${sentOrReceivedClass}`}
    >
      <div className="card-panel grey lighten-5 z-depth-1">
        <div className="row valign-wrapper">
          <div className="col s2">
            <img
              src={photoURL}
              alt={photoURL}
              className="circle responsive-img"
            />
          </div>
          <div className="col s10">
            <span className="black-text">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
