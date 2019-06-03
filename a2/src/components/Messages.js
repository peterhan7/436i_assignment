import React from "react";
import { connect } from "react-redux";
import { deleteMessage } from "../actions/TableActions";
import { bindActionCreators } from "redux";


  /*const Messages = ({messages, deleteMessage}) => {
    console.log(messages);
    const collection = messages.map(message => {
        return(
          <div key={message.key}>
            <span>{message.message}</span>
            <button onClick={() => this.props.deleteMessage(message.key)}>x</button>
          </div>
        );
      });
      return (<div>{collection}</div>);
    }*/


    /*return (messages.map(message => {
        return(
          <div key={message.key}>
            <span>{message.message}</span>
            <button onClick={() => this.props.deleteMessage(message.key)}>x</button>
          </div>
        );*/
      class Messages extends React.Component{
        render(){
          console.log("gg");
          console.log(this.props.messages);
          console.log("gg");
          return (
          <div>{this.props.messages.map((message)=>
            <div key={message.key}>
              <span>{message.message}</span>
              <button onClick={() => this.props.deleteMessage(message.key)}>x</button>
            </div>)}
          </div>);

        /*return(<div>gg</div>);*/
      };
    }


function mapStateToProps(state){ //name is by convention
	//state has entire state of app!!
return { messages: state.messages }; //now it will appear as props
};

const mapDispatchToProps = dispatch => ({
  deleteMessage: () => dispatch(deleteMessage())
});


//export default connect(mapStateToProps, ()=>{return {}})(Messages);
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
