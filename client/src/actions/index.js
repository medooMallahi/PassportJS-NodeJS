import axios from "axios";

export const fetchUser = () => {
  //redux thuk will see if we are return a function it will pass dispatch to this function
  return async (dispatch) => {
    const response = await axios.get("/api/current_user");
    dispatch({
      type: "fetch_user",
      payload: response.data,
    }); // end of dispatch
  }; // end of dispatch function
}; // end of action function

export const handleToken = (token) => {
  //redux thun will see if we are return a function it will pass dispatch to this function
  return async (dispatch) => {
    const response = await axios.post("/api/stripe", token);
    dispatch({
      type: "fetch_user",
      payload: response.data,
    }); // end of dispatch
  }; // end of dispatch function
}; // end of action function

export const submitSurvey = (values, history) => {
  return async (dispatch) => {
    history.push("/surveys");
    const response = await axios.post("/api/surveys", values);

    dispatch({
      type: "fetch_user",
      payload: response.data,
    }); // end of dispatch
  }; // end of dispatch function
}; // end of the submitSurvey function
