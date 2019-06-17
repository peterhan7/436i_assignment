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
        /*apiCall(){
          // Load initial message here
          axios.get('http://localhost:3001/users/getMessage')
            .then((response) => {
              // handle success
              console.log(response.data);
              this.setState({items: response.data});
              console.log("this.state in CDM is: " + this.state.items);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
        }
        componentDidMount(){
          this.apiCall();
          }

        // the end
        render(){
          const { items } = this.state;
          console.log("this.state in render is: " + items)
          const messageList = items.length ? (
            <ul>{items.map( message =>
              <div key={message.key} className="message">
                <span>{message.message}</span>
                <span className="close" onClick={() => this.props.deleteMessage(message.key)}>x</span>
                <button onClick={()=> this.props.showDetail(message.message)} >Show Detail</button>
              </div>)}
            </ul>
          ) : (
            <Loader
             type="Puff"
             color="#00BFFF"
             height="100"
             width="100"
            />
          )
          return (
            <div>
            {messageList}
            </div>
          );
        }*/

        componentDidMount(){
          // Load initial message here
          /*axios.get('http://localhost:3001/users/getMessage')
            .then((response) => {
              // handle success
              console.log(response.data);
              console.log("gg");
              //this.setState({messages:response.data})
              this.props.loadMessages(response.data);
              //this.setState(response);
              //this.props.messages = response;
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });*/
            const parent = this;
            parent.callApi()
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
