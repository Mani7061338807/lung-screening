import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface PageState {
  pageType: string;
}

const initialState: PageState = {
  pageType: "FLOW_CHART",
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPageType: (state, action: PayloadAction<string>) => {
      state.pageType = action.payload;
    },
  },
});

export const { setPageType } = pageSlice.actions;
export default pageSlice.reducer;
