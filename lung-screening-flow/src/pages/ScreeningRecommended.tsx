import { saveUserData } from "@/api/apiCommunication";
import { Loader } from "@/components/Loader";
import { useAppSelector } from "@/hooks/redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ScreeningRecommended = () => {
  const { userID, questions } = useAppSelector((state) => state.user);
  const [isSubmitPending, setSubmitPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setSubmitPending(true);
    await saveUserData({
      currentPage: "thanks",
      questions,
      screeningResult: "complete",
      userID,
    });
    setSubmitPending(false);
    navigate("/thanks");
  };
  return (
    <div className=" h-full flex flex-col justify-center">
      <div className="space-y-6 text-[#043a66] text-sm text-center">
        <p className="font-semibold text-[24px]">
          Based on the information you entered, we recommend lung cancer
          screening.
        </p>
        <p className="text-[20px] font-medium text-[#0064B0]">
          Your unique ID number is <span className="font-bold">{userID}</span>.
          Please keep this number in your records. Let your primary doctor know
          to send a lung cancer referral and determine the next steps.
        </p>

        <div className="flex h-[40%] flex-col justify-between gap-4">
          <button
            className="cursor-pointer bg-[#043a66] px-5 py-1.5 rounded-md "
            onClick={handleSubmit}
          >
            {isSubmitPending ? (
              <Loader />
            ) : (
              <div className="text-white text-[18px] py-1 font-semibold">
                Submit
              </div>
            )}
          </button>
          <button
            className="cursor-pointer bg-[#0a6ec0] flex justify-center items-center mx-auto w-[100px] text-white px-5 py-1.5 rounded-md text-[16px] font-semibold"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};
