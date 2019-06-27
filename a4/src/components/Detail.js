import React from "react";
import { connect } from "react-redux";
import { showDetail, togglePopup } from "../actions/TableActions";

class Detail extends React.Component {
  render() {
    return (
      <div className='app'>
        {this.props.showPopup ?
          <div>
            <div className='popup'>
              <div className='popup_inner'>
                <button onClick={()=>this.props.togglePopup()}>x</button>
                <div>{this.props.detailedMessage}</div>
              </div>
            </div>
          </div>
          : null
        }
      </div>
    );
  }
};

function mapStateToProps(state){
  return {
      detailedMessage: state.messages.detailedMessage,
      showPopup: state.messages.showPopup
   };
};

const mapDispatchToProps = dispatch => ({
  showDetail: ({message, showPopup}) => dispatch(showDetail({message, showPopup})),
  togglePopup: () => dispatch(togglePopup())
});

export default connect(mapStateToProps,mapDispatchToProps)(Detail);
