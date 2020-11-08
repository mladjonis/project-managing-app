import React, { createRef } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import ChatMessage from "./ChatMessage";
import { sendMessage } from "../../actions";

class ChatRoom extends React.Component {
  state = {
    messageText: "",
  };
  ref = createRef();

  onMessageInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  sendMessage = (e) => {
    e.preventDefault();
    //napraviti profil za korisnika da moze da menja podatke
    //srediti chat da izgleda puno lepse
    //da se izvuce u posebnu komponentu
    //i kada se klikne na to da izbaci neke opcije umesto inicijala
    this.props.sendMessage(this.state);
    this.setState({
      messageText: "",
    });
    this.ref.current.scrollIntoView({ behaviour: "smooth" });
  };
  render() {
    const { auth, messages } = this.props;
    // console.log("chatroom props", this.props);
    // console.log("state", this.state);
    return (
      <React.Fragment>
        <section>
          <main>
            <div ref={this.ref}>
              {messages &&
                messages.map((message) => {
                  return (
                    <ChatMessage
                      key={message.id}
                      message={message}
                      uid={auth.uid}
                    />
                  );
                })}
            </div>
          </main>
          <form onSubmit={this.sendMessage}>
            <input
              type="text"
              id="messageText"
              value={this.state.messageText}
              onChange={(e) => this.onMessageInputChange(e)}
            />
            <button type="submit" disabled={!this.state.messageText}>
              Send
            </button>
          </form>
        </section>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  //console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
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
