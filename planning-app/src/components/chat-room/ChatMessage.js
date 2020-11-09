import React from "react";
import moment from "moment";

const ChatMessage = (props) => {
  const { text, uid, photoURL, createdAt } = props.message;
  //console.log(createdAt);
  const sentOrReceivedClass = uid === props.uid ? "sent" : "received";
  return (
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
          <div>
            {props.profile.firstName} {props.profile.lastName}
          </div>
          <div className="col s10">
            <span className="black-text">{text}</span>
          </div>
          <p className="note-date black-text">
            {moment(createdAt.toDate()).fromNow()} at{" "}
            {moment.utc(createdAt.seconds * 1000).format("HH:mm")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
