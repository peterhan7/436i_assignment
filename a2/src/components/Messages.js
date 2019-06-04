import React from "react";
import { connect } from "react-redux";
import { deleteMessage, showDetail } from "../actions/TableActions";
import { bindActionCreators } from "redux";
import "../cssLayout.css"
import Popup from "reactjs-popup";

/* <Popup trigger={<button className="detail"> detail </button>} position="right center">
  <div>
    <text>{message.message}</text>
  </div>
</Popup>*/
      class Messages extends React.Component{
        render(){
          return (
          <ul>{this.props.messages.map((message)=>
            <div key={message.key} className="message">
              <span>{message.message}</span>
              <span className="close" onClick={() => this.props.deleteMessage(message.key)}>x</span>
              <button onClick={()=> this.props.showDetail(message.message)} >Show Detail</button>
            </div>)}
          </ul>);
      }
    }


function mapStateToProps(state){ //name is by convention
	//state has entire state of app!!
return { messages: state.messages.messages}; //now it will appear as props
};

const mapDispatchToProps = dispatch => ({
  deleteMessage: (key) => dispatch(deleteMessage(key)),
  showDetail: (message) => dispatch(showDetail(message))
});


//export default connect(mapStateToProps, ()=>{return {}})(Messages);
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
