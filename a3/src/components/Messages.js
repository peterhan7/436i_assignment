import React from "react";
import { connect } from "react-redux";
import { deleteMessage, showDetail } from "../actions/TableActions";
import { bindActionCreators } from "redux";
import "../cssLayout.css"
import Popup from "reactjs-popup";
const axios = require('axios');

/* <Popup trigger={<button className="detail"> detail </button>} position="right center">
  <div>
    <text>{message.message}</text>
  </div>
</Popup>*/
      class Messages extends React.Component{
        // web stuff
        /*state = {
          messages:[]
        }

        componentDidMount(){
          // Load initial message here
          axios.get('http://localhost:3001/users/getMessage')
            .then(function (response) {
              // handle success
              console.log(response.data);
              console.log("gg");
              console.log(this.state.messages);
              this.setState({messages:response.data})
              //this.setState(response);
              //this.props.messages = response;
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
          }
        // the end
        render(){
          //const { messages } = this.state;
          const messageList = this.state.messages.length ? (
            <ul>{messageList.map((message)=>
              <div key={message.key} className="message">
                <span>{message.message}</span>
                <span className="close" onClick={() => this.props.deleteMessage(message.key)}>x</span>
                <button onClick={()=> this.props.showDetail(message.message)} >Show Detail</button>
              </div>)}
            </ul>
          ) : (
            <div>Loading</div>
          )
          return (
            <div>
            {messageList}
            </div>
          );
        }*/
        componentDidMount(){
          // Load initial message here
          axios.get('http://localhost:3001/users/getMessage')
            .then(function (response) {
              // handle success
              console.log(response.data);
              console.log("gg");
              this.setState({messages:response.data})
              //this.setState(response);
              //this.props.messages = response;
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
          }

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
