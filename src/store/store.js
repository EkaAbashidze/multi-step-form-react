import { createStore } from "redux";

const initialState = {
  userInfo: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  selectedPlan: "OLA",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "updateUserInfo":
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          [action.field]: action.value,
        },
      };
    case "updatePlan":
      return {
        ...state,
        selectedPlan: action.value,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
