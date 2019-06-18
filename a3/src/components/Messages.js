import React from "react";
import { connect } from "react-redux";
import { deleteMessage, showDetail, loadMessages } from "../actions/TableActions";
import { bindActionCreators } from "redux";
import "../cssLayout.css"
import Popup from "reactjs-popup";
import Loader from 'react-loader-spinner'
const axios = require('axios');

/* <Popup trigger={<button className="detail"> detail </button>} position="right center">
  <div>
    <text>{message.message}</text>
  </div>
</Popup>*/
      class Messages extends React.Component{
        // web stuff
        state = {
          items:[]
        }
        // Code snippet by the courtesy of Erica Choi
        componentDidMount(){
            const parent = this;
            parent.callApi()
            // I implmented the action on my own, the only part I was confused about was the async handling
            .then(res => parent.props.loadMessages(res))
            .catch(err => console.log(err));
          }

          callApi = async () => {
          const response = await fetch('http://localhost:3001/users/getMessage');
          const body = await response.json();
          if(response.status !== 200){throw Error(body.message)}
          console.log(body);
          return body;
        }
        // ----------- code snippet ends here

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
  showDetail: (message) => dispatch(showDetail(message)),
  loadMessages: (messages) => dispatch(loadMessages(messages))
});


//export default connect(mapStateToProps, ()=>{return {}})(Messages);
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
