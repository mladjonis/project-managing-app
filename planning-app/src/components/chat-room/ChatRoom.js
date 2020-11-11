import React, { createRef } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import ChatMessage from "./ChatMessage";
import { sendMessage } from "../../actions";
import { Redirect } from "react-router-dom";

class ChatRoom extends React.Component {
  state = {
    messageText: "",
  };
  constructor(props) {
    super(props);
    this.ref = createRef();
  }

  onMessageInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  scrollToBottom = () => {
    this.ref.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

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
    //this.ref.scrollIntoView({ behaviour: "smooth" });
  };
  render() {
    const { auth, messages } = this.props;
    if (!auth.uid) {
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        <section>
          <main>
            <h3 className="heading-chat-room">Chat room</h3>
            <div>
              {messages &&
                messages.map((message) => {
                  return (
                    <ChatMessage
                      key={message.id}
                      message={message}
                      uid={auth.uid}
                      profile={this.props.profile}
                    />
                  );
                })}
            </div>
            <div
              ref={(el) => {
                this.ref = el;
              }}
            ></div>
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
  firestoreConnect([{ collection: "messages", orderBy: ["createdAt", "asc"] }])
)(ChatRoom);
