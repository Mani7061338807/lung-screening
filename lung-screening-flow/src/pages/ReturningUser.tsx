import axiosInstance from "@/api/axiosInstance";
import Input from "@/components/Input";
import { Screen } from "@/components/Screen";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";
import { useState } from "react";
import {
  setAllQuestions,
  setCurrentPage,
  setScreeningResult,
  setUserID,
} from "@/redux/reducer/userSlice";
import { toast } from "react-toastify";

const ReturningUser = () => {
  const [userId, setUserId] = useState("");
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const onGetUser = async () => {
    try {
      const result = await axiosInstance.get(`/${userId}`);
      console.log(result.data);
      if (result.data) {
        const { currentPage, screeningResult, userID, questions } = result.data;
        dispatch(setAllQuestions(questions));
        dispatch(setCurrentPage(currentPage));
        dispatch(setUserID(userID));
        dispatch(setScreeningResult(screeningResult));
        dispatch(setPageType("Page-0A"));
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.response?.data.message || "Something went wrong!");
    }
  };
  console.log(user);
  const onCreateUser = async () => {
    try {
      const result = await axiosInstance.post("/create");
      dispatch(setUserID(result.data.userID));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.response?.data.message || "Somethinh went wrong");
    }
  };

  return (
    <Screen>
      <div className=" text-[#043a66] py-4 font-bold text-[16px]">
        Are you a returning user? <br />
        Please enter your unique ID number if you have one:
      </div>
      <Input
        type="text"
        placeholder="Eg. 00000"
        value={userId}
        onChange={(value) => setUserId(value as string)}
      />
      <button
        disabled={!userId}
        className={`w-full py-2 rounded text-white font-semibold ${
          userId
            ? "bg-[#043a66] cursor-pointer"
            : "bg-[#043a66]/20 cursor-not-allowed"
        }`}
        onClick={() => {
          onGetUser();
        }}
      >
        Submit
      </button>
      <button
        className="text-white mt-18 cursor-pointer bg-[#043a66] w-full text-center rounded px-4 py-2 text-sm font-semibold"
        onClick={() => {
          onCreateUser();
          dispatch(setPageType("Page-0B"));
        }}
      >
        Click here if this is your first time
      </button>
    </Screen>
  );
};

export default ReturningUser;
