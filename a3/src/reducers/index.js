import { combineReducers } from 'redux';
const axios = require('axios');

const initialState = {
                        //messages:[{key: 1, message: "Peter Han"},{key: 2, message: "CPSC"},{key: 3, message: "436i"}],
                        messages:[],
                        showPopup:false,
                        detailedMessage:""
                      };

const messageReducer = (state = initialState, action) => {
  /*axios.get('http://localhost:3001/users/getMessage')
    .then(function (response) {
      // handle success
      console.log(response.data);
      console.log("gg");
      return state.messages = response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });*/
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
    case "REMOVE_ALL":
      state.messages = [];
      return {...state};
    }
    return state;

  }

export default combineReducers({
  messages: messageReducer,
})
