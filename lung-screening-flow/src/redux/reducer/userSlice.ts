import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Interface for the questions
interface QuestionData {
  age: number;
  currentlySmoke: string;
  quitAge: number;
  startedSmokingAge: number;
  packPerDay: number;
  copd: string;
  cancer: string;
  familyCancer: string;
  race: string;
  education: string;
  height: number;
  weight: number;
}

// Interface for the user state
interface UserState {
  userID: string;
  questions: QuestionData;
  currentPage: string;
  screeningResult: string;
}

// Initial state
const initialState: UserState = {
  userID: "",
  questions: {
    age: 0,
    currentlySmoke: "",
    quitAge: 0,
    startedSmokingAge: 0,
    packPerDay: 0,
    copd: "",
    cancer: "",
    familyCancer: "",
    race: "",
    education: "",
    height: 0,
    weight: 0,
  },
  currentPage: "page-1",
  screeningResult: "incomplete",
};

// Create slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserID: (state, action: PayloadAction<string>) => {
      state.userID = action.payload;
    },
    setQuestionField: <K extends keyof QuestionData>(
      state: UserState,
      action: PayloadAction<{ field: K; value: QuestionData[K] }>
    ) => {
      const { field, value } = action.payload;
      state.questions[field] = value;
    },
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
    setScreeningResult: (state, action: PayloadAction<string>) => {
      state.screeningResult = action.payload;
    },
    setAllUserData: (_, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    resetUser: () => initialState,
  },
});

export const {
  setUserID,
  setQuestionField,
  setCurrentPage,
  setScreeningResult,
  setAllUserData,
  resetUser,
} = userSlice.actions;

export default userSlice.reducer;
