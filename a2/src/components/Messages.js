import React from "react";
import { connect } from "react-redux";
import { deleteMessage } from "../actions/TableActions";
import { bindActionCreators } from "redux";

      class Messages extends React.Component{
        render(){
          return (
          <div>{this.props.messages.map((message)=>
            <div key={message.key}>
              <span>{message.message}</span>
              <button onClick={() => this.props.deleteMessage(message.key)}>x</button>
            </div>)}
          </div>);
      }
    }


function mapStateToProps(state){ //name is by convention
	//state has entire state of app!!
return { messages: state.messages }; //now it will appear as props
};

const mapDispatchToProps = dispatch => ({
  deleteMessage: (key) => dispatch(deleteMessage(key))
});


//export default connect(mapStateToProps, ()=>{return {}})(Messages);
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
