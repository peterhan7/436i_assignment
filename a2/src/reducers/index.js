import { combineReducers } from 'redux'

const initialMessages = [{key: 1, message: "Peter Han"},{key: 2, message: "CPSC"},{key: 3, message: "436i"}];
const messageReducer = (messages = initialMessages, action) => {
  switch(action.type) {
    case "ADD_MESSAGE":
      console.log(action);
      console.log(action.payload + action.key);
      return [...messages, {key: action.key, message: action.payload,}]
    case "DELETE_MESSAGE":
      console.log(action);
      /*messages = messages.slice();
      messages.splice(action.payload,1);*/
      messages = messages.filter((message) =>{
        return message.key !== action.payload;
      });
      break;
    }
    return messages;
  }

export default combineReducers({
  messages: messageReducer,
  // count: messageReducer
  //messages: messageReducer
})
