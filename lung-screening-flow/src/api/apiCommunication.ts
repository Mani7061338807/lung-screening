import type { QuestionData } from "@/redux/reducer/userSlice";
import axiosInstance from "./axiosInstance";
import { toast } from "react-toastify";

type UserDataProps = {
  currentPage: string;
  questions: QuestionData;
  screeningResult: string;
  userID: string;
};

export const saveUserData = async ({
  currentPage,
  questions,
  screeningResult,
  userID,
}: UserDataProps) => {
  try {
    const res = await axiosInstance.put(`/${userID}`, {
      currentPage,
      questions,
      screeningResult,
    });
    toast.success("Your Response has Submitted successfully!");
    return res.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    toast.error(error?.response?.data.message || "Something went wrong");
  }
};
