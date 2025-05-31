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
import { useTranslation } from "react-i18next";

const ReturningUser = () => {
  const [userId, setUserId] = useState("");
  const dispatch = useAppDispatch();
  const [isUserGetPending, setUserGetPending] = useState<true | false>(false);
  const [isUserCreatePending, setUserCreatePending] = useState<true | false>(
    false
  );
  const { t } = useTranslation();

  const onGetUser = async () => {
    try {
      setUserGetPending(true);
      const result = await axiosInstance.get(`/${userId}`);
      console.log(result);
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
      toast.error(error?.response?.data.message || t("error_generic"));
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
      toast.error(error?.response?.data.message || t("error_generic"));
    } finally {
      setUserCreatePending(false);
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className=" text-[#043a66] py-4 font-bold text-[22px]">
        {t("returning_title")}
      </div>
      <div className="w-full">
        <Input
          type="number"
          placeholder={t("input_placeholder")}
          value={userId}
          onChange={(value) => setUserId(value as string)}
        />
      </div>
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
          <div className="text-white text-[18px] font-semibold">
            {t("submit")}
          </div>
        )}
      </button>
      <button
        className="mt-24 cursor-pointer bg-[#043a66] w-full rounded-md px-4 py-2 "
        onClick={() => {
          onCreateUser();
        }}
      >
        {isUserCreatePending ? (
          <Loader />
        ) : (
          <div className="text-white text-[18px] text-center font-semibold">
            {t("first_time")}
          </div>
        )}
      </button>
    </div>
  );
};

export default ReturningUser;
