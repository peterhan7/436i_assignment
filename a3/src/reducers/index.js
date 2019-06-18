import { combineReducers } from 'redux';
const axios = require('axios');

const initialState = {
                        //messages:[{key: 1, message: "Peter Han"},{key: 2, message: "CPSC"},{key: 3, message: "436i"}],
                        messages:[],
                        showPopup:false,
                        detailedMessage:""
                      };

const messageReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_MESSAGE":
      return {...state, messages:[...state.messages,{key: action.key, message: action.payload}]}
    case "DELETE_MESSAGE":
      state.messages = state.messages.filter((message) =>{
        return parseFloat(message.key).toFixed(15) !== parseFloat(action.payload).toFixed(15);
      });
      return {...state}
      break;
    case "DETAIL":
      return {...state, showPopup:true, detailedMessage: action.message};
    case "TOGGLE_POPUP":
      return {...state, showPopup:false};
    case "REMOVE_ALL":
      state.messages = [];
      return {...state};
    case "LOAD_ALL_MESSAGES":
      console.log("reducer: ");
      console.log(action.payload);
      return {...state, messages: action.payload};
    }
    return state;

  }

export default combineReducers({
  messages: messageReducer,
})
