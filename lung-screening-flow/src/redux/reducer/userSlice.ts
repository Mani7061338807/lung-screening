import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Interface for the questions
export interface QuestionData {
  age: number | null;
  currentlySmoke: string;
  quitAge: number | null;
  startedSmokingAge: number | null;
  packPerDay: number | null;
  copd: string;
  cancer: string;
  familyCancer: string;
  race: string;
  education: string;
  height: number | null;
  weight: number | null;
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
    age: null,
    currentlySmoke: "",
    quitAge: null,
    startedSmokingAge: null,
    packPerDay: null,
    copd: "",
    cancer: "",
    familyCancer: "",
    race: "",
    education: "",
    height: null,
    weight: null,
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
    setAllQuestions: (state, action: PayloadAction<QuestionData>) => {
      state.questions = action.payload;
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
  setAllQuestions,
} = userSlice.actions;

export default userSlice.reducer;
