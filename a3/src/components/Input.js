import React from "react";
import { connect } from "react-redux";
import { addMessage, counter, removeAll } from "../actions/TableActions";
import { bindActionCreators } from "redux";
import "../cssLayout.css"



class Input extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: ""
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
  /*
  onClick={()=>this.props.addMessage(this.refs.input.value)
    */
  render(){
    return (
      <div>
        <input type="search" ref="input" onChange={this.onHandleChange} value={this.state.message} placeholder="Enter comment here..." />
        <button className="addBtn" disabled={!this.state.message}
        onClick={this.onHandleSubmit}>Submit</button>
        <span onClick={()=> this.props.removeAll()} className="removeBtn">Remove All</span>
      </div>
    );
  }


  onHandleChange(e) {
      this.setState({
        message: e.target.value
      });
  }

  onHandleSubmit(e) {
    e.preventDefault();
    const message = this.state.message;
    this.props.addMessage(message);
    this.setState({
      message: ''
    });
  }
};

function mapStateToProps(state){
  return bindActionCreators({addMessage, removeAll}, state);
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addMessage, removeAll}, dispatch);
}

export default connect(()=>{return {}}, mapStateToProps)(Input)
