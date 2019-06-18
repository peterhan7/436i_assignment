import React from "react";
import Messages from "./Messages"
import { connect } from "react-redux";
import Input from "./Input"
import Detail from "./Detail"
import Swag from "./Swag"
import { deleteMessage } from "../actions/TableActions"
import "../cssLayout.css"
import "../swag.css"
/*
references:
  Danya,
  Stephanie,
  Wesley F. ,
  w3schools,
  https://react-redux.js.org/introduction/quick-start,
  Erica Choi
*/


class App extends React.Component{


  render(){
    return (
      <div>
        <div className="header">
          <h1>ChitChat</h1>
          <Swag />
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
