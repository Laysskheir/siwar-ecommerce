import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    sliders: [],
    categories: [],
  },
  reducers: {
    setSliders(state, action) {
      state.sliders = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

const { actions: sliderActions, reducer: slidersReducer } = sliderSlice;

export { sliderActions, slidersReducer };
