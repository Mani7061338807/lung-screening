import { saveUserData } from "@/api/apiCommunication";
import { Loader } from "@/components/Loader";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";
import { useState } from "react";

export const ScreeningNotRecommended = () => {
  const dispatch = useAppDispatch();
  const { userID, questions } = useAppSelector((state) => state.user);
  const [isSubmitPending, setSubmitPending] = useState(false);

  const handleSubmit = async () => {
    setSubmitPending(true);
    await saveUserData({
      currentPage: "THANKS_SCREEN",
      questions,
      screeningResult: "complete",
      userID,
    });
    setSubmitPending(false);
    dispatch(setPageType("THANKS_SCREEN"));
  };
  return (
    <div className=" h-full flex flex-col justify-center">
      <div className="space-y-6 text-[#043a66] text-sm text-center">
        <p className="font-semibold text-[24px]">
          Based on the information you entered, we do not recommend lung cancer
          screening at this time.
        </p>
        <p className="text-[20px] font-medium text-[#0064B0]">
          Your unique ID number is <span className="font-bold">{userID}</span>.
          Please keep this number in your records. Please re-take this screening
          in one year to re-evaluate.
        </p>

        <div className="flex h-[60%] flex-col justify-between gap-4">
          <button
            className="cursor-pointer bg-[#043a66] px-5 py-1.5 rounded-md "
            onClick={handleSubmit}
          >
            {isSubmitPending ? (
              <Loader />
            ) : (
              <div className="text-white text-[16px] py-1 font-semibold">
                Submit
              </div>
            )}
          </button>
          <button
            className="cursor-pointer bg-[#0a6ec0] flex justify-center items-center mx-auto w-[100px] text-white px-5 py-1.5 rounded-md text-[16px] font-semibold"
            onClick={() => dispatch(setPageType("Page-3A"))}
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};
