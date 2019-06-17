const axios = require('axios');
let next = Math.random();   // 3 default stored message

export const addMessage = (message) => {

  // API call
  axios.post('http://localhost:3001/users/addMessage', {key: next, message: message})
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  return {
      type: "ADD_MESSAGE",
      key: next++,
      payload: message
  };
};

export const deleteMessage = (key) => {
  // API call
  axios.delete(`http://localhost:3001/users/deleteMessage/${key}`)
  .then((response) => {
  })
  .catch((err) => {
    console.error.bind(err);
  })
  return {
    type: "DELETE_MESSAGE",
    payload: key
  };
};

export const showDetail = (message) => {
  return {
    type: "DETAIL",
    message: message,
    showPopup: true,
  };
};

export const togglePopup = () => {
  return {
    type: "TOGGLE_POPUP",
  }
}

export const removeAll = () => {
  // API call

  axios.delete(`http://localhost:3001/users/deleteAllMessage`)
  .then((response) => {
  })
  .catch((err) => {
    console.error.bind(err);
  })

  return {
    type: "REMOVE_ALL",
  }
}

export const loadMessages = (messages) => {
  console.log("action : ")
  console.log(messages);
  return{
    type: "LOAD_ALL_MESSAGES",
    payload: messages,
  }
}
