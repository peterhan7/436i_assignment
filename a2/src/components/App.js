import React from "react";
import Messages from "./Messages"
import { connect } from "react-redux";
import Input from "./Input"
import { deleteMessage } from "../actions/TableActions"

class App extends React.Component{
  /*state = {
    messages:[
      {key: 1, message: "Peter Han"},
      {key: 2, message: "CPSC"},
      {key: 3, message: "436i"}
    ]
  }*/
  /*deleteMessage = (key) => {
    const newMessages = this.state.messages.filter(message => {
      return message.key !== key
    });
    this.setState({messages:newMessages})
  }*/

  /*deleteMessage={this.deleteMessage}*/

  render(){
    return (
      <div className="App">
        <h1>ChitChat</h1>
        <Input />
        <Messages />
      </div>
    );

  }
}

function mapStateToProps(state){
  return{
    messages: state.messages
  }
}
export default connect(mapStateToProps)(App);
