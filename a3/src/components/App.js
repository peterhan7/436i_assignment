import React from "react";
import Messages from "./Messages"
import { connect } from "react-redux";
import Input from "./Input"
import Detail from "./Detail"
import { deleteMessage } from "../actions/TableActions"
import "../cssLayout.css"
/*
references:
  Danya,
  Stephanie,
  Wesley F. ,
  w3schools,
  https://react-redux.js.org/introduction/quick-start,
*/

class App extends React.Component{
  render(){
    return (
      <div>
        <div className="header">
          <h1>ChitChat</h1>
          <Input />
          <Messages />
        </div>
        <div>
          <Detail />
        </div>
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
