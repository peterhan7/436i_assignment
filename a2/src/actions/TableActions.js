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
