import React from "react";
import Messages from "./Messages"
import { connect } from "react-redux";
import Input from "./Input"
import { deleteMessage } from "../actions/TableActions"

class App extends React.Component{
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
