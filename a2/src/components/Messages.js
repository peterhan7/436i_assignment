import React from "react";
import { connect } from "react-redux";
import { deleteMessage } from "../actions/TableActions";
import { bindActionCreators } from "redux";
import "../cssLayout.css"
import Popup from "reactjs-popup";
      class Messages extends React.Component{
        render(){
          return (
          <ul>{this.props.messages.map((message)=>
            <div key={message.key} className="message">
              <span>{message.message}</span>
              <span className="close" onClick={() => this.props.deleteMessage(message.key)}>x</span>
              <Popup trigger={<button className="detail"> detail </button>} position="right center">
                <div>
                  <text>{message.message}</text>
                </div>
              </Popup>
            </div>)}
          </ul>);
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
