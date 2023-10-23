import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  selectedPlan: "",
  addons: [],
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: initialState.userInfo,
  reducers: {
    updateUserInfo(state, action) {
      const { field, value } = action.payload;
      return {
        ...state,
        [field]: value,
      };
    },
  },
});

const selectedPlanSlice = createSlice({
  name: "selectedPlan",
  initialState: initialState.selectedPlan,
  reducers: {
    updatePlan(state, action) {
      return action.payload;
    },
  },
});

const addonsSlice = createSlice({
  name: "addons",
  initialState: initialState.addons,
  reducers: {
    updateAddons(state, action) {
      return action.payload;
    },
  },
});

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "updateUserInfo":
//       return {
//         ...state,
//         userInfo: {
//           ...state.userInfo,
//           [action.field]: action.value,
//         },
//       };
//     case "updatePlan":
//       return {
//         ...state,
//         selectedPlan: action.value,
//       };
//     case "updateAddons":
//       return {
//         ...state,
//         addons: action.value,
//       };
//     default:
//       return state;
//   }
// };

const store = configureStore({
  reducer: {
    userInfo: userInfoSlice.reducer,
    selectedPlan: selectedPlanSlice.reducer,
    addons: addonsSlice.reducer,
  },
});

export const userInfoActions = userInfoSlice.actions;

export default store;
