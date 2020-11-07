import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import ChatMessage from "./ChatMessage";
import { sendMessage } from "../../actions";

class ChatRoom extends React.Component {
  state = {
    messageText: "",
  };

  onMessageInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  sendMessage = (e) => {
    e.preventDefault();
    console.log(e);
    this.props.sendMessage(this.state);
    this.setState({
      messageText: "",
    });
    //const { uid, photoURL } = this.props.auth.currentUser;
  };
  render() {
    const { auth, messages } = this.props;
    console.log("chatroom props", this.props);
    console.log("state", this.state);
    return (
      <React.Fragment>
        <div>
          {messages &&
            messages.map((message) => {
              return <ChatMessage key={message.id} message={message} />;
            })}
        </div>
        <form onSubmit={this.sendMessage}>
          <input
            type="text"
            id="messageText"
            value={this.state.messageText}
            onChange={(e) => this.onMessageInputChange(e)}
          />
          <button type="submit">Send</button>
        </form>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  //console.log(state);
  return {
    auth: state.firebase.auth,
    messages: state.firestore.ordered.messages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => dispatch(sendMessage(message)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "messages", orderBy: ["createdAt", "desc"] }])
)(ChatRoom);
