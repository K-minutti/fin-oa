import axios from "axios";

export const setCustomerLoans = (customerLoans) => {
  return {
    type: "SET_LOANS",
    customerLoans,
  };
};

export const fetchCustomerLoans = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/overview");
      dispatch(setCustomerLoans(data));
    } catch (e) {
      console.log(e);
    }
  };
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOANS":
      return action.customerLoans;
    default:
      return state;
  }
};
