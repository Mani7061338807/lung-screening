import axiosInstance from "@/api/axiosInstance";
import Input from "@/components/Input";
import { useAppDispatch } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";
import { useState } from "react";
import {
  setAllQuestions,
  setCurrentPage,
  setScreeningResult,
  setUserID,
} from "@/redux/reducer/userSlice";
import { toast } from "react-toastify";
import { Loader } from "@/components/Loader";

const ReturningUser = () => {
  const [userId, setUserId] = useState("");
  const dispatch = useAppDispatch();
  const [isUserGetPending, setUserGetPending] = useState<true | false>(false);
  const [isUserCreatePending, setUserCreatePending] = useState<true | false>(
    false
  );
  const onGetUser = async () => {
    try {
      setUserGetPending(true);
      const result = await axiosInstance.get(`/${userId}`);
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
    } finally {
      setUserGetPending(false);
    }
  };
  const onCreateUser = async () => {
    try {
      setUserCreatePending(true);
      const result = await axiosInstance.post("/create");
      dispatch(setUserID(result.data.userID));
      dispatch(setPageType("Page-0B"));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.response?.data.message || "Somethinh went wrong");
    } finally {
      setUserCreatePending(false);
    }
  };

  return (
    <>
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
        className={`w-full py-2 rounded  ${
          userId
            ? "bg-[#043a66] cursor-pointer"
            : "bg-[#043a66]/20 cursor-not-allowed"
        }`}
        onClick={() => {
          onGetUser();
        }}
      >
        {isUserGetPending ? (
          <Loader />
        ) : (
          <div className="text-white font-semibold">Submit</div>
        )}
      </button>
      <button
        className="mt-18 cursor-pointer bg-[#043a66] w-full rounded px-4 py-2 "
        onClick={() => {
          onCreateUser();
        }}
      >
        {isUserCreatePending ? (
          <Loader />
        ) : (
          <div className="text-white text-sm text-center font-semibold">
            Click here if this is your first time
          </div>
        )}
      </button>
    </>
  );
};

export default ReturningUser;
