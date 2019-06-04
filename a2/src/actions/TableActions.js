let next = 4;   // 3 default stored message

export const addMessage = (message) => {
  return {
      type: "ADD_MESSAGE",
      key: next++,
      payload: message
  };
};

export const deleteMessage = (key) => {
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
