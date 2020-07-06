export default (state = null, action) => {
  switch (action.type) {
    case "fetch_user":
      return action.payload || false;
      break;
    default:
      return state;
  }
};
