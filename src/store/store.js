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
      return action.payload.value;
    },
  },
});

const addonsSlice = createSlice({
  name: "addons",
  initialState: initialState.addons,
  reducers: {
    updateAddons(state, action) {
      return action.payload.value;
    },
  },
});

const store = configureStore({
  reducer: {
    userInfo: userInfoSlice.reducer,
    selectedPlan: selectedPlanSlice.reducer,
    addons: addonsSlice.reducer,
  },
});

export const userInfoActions = userInfoSlice.actions;
export const selectedPlanSliceActions = selectedPlanSlice.actions;
export const addonsSliceActions = addonsSlice.actions;

export default store;
