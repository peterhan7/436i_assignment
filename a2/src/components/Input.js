import React from "react";
import { connect } from "react-redux";
import { addMessage, counter } from "../actions/TableActions";
import { bindActionCreators } from "redux";


class Input extends React.Component {
  render(){
    return (
      <div>
        <input type="search" ref="input" placeholder="Enter comment here..." />
        <button className="addBtn"
        onClick={()=>this.props.addMessage(this.refs.input.value)}>Submit</button>
      </div>
    );
  }
};

function mapStateToProps(state){
  return bindActionCreators({addMessage}, state);
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addMessage}, dispatch);
}

export default connect(()=>{return {}}, mapStateToProps)(Input)
