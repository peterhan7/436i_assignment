import { combineReducers } from 'redux'

const initialState = {
                        messages:[{key: 1, message: "Peter Han"},{key: 2, message: "CPSC"},{key: 3, message: "436i"}],
                        showPopup:false,
                        detailedMessage:""
                      };
const messageReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_MESSAGE":
      return {...state, messages:[...state.messages,{key: action.key, message: action.payload}]}
    case "DELETE_MESSAGE":
      state.messages = state.messages.filter((message) =>{
        return message.key !== action.payload;
      });
      return {...state}
      break;
    case "DETAIL":
      return {...state, showPopup:true, detailedMessage: action.message};
    case "TOGGLE_POPUP":
      return {...state, showPopup:false};
    }
    return state;

  }

export default combineReducers({
  messages: messageReducer,
})
