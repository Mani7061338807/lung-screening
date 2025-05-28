import { saveUserData } from "@/api/apiCommunication";
import { Screen } from "@/components/Screen";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";

export const ScreeningNotRecommended = () => {
  const dispatch = useAppDispatch();
  const { userID, questions } = useAppSelector((state) => state.user);
  const handleSubmit = async () => {
    await saveUserData({
      currentPage: "THANKS_SCREEN",
      questions,
      screeningResult: "complete",
      userID,
    });
  };
  return (
    <Screen>
      <div className="space-y-6 text-[#043a66] text-sm text-center">
        <p className="font-semibold">
          Based on the information you entered, we do not recommend lung cancer
          screening at this time.
        </p>
        <p>
          Your unique ID number is <span className="font-bold">{userID}</span>.
          Please keep this number in your records. Please re-take this screening
          in one year to re-evaluate.
        </p>

        <div className="flex flex-col justify-center gap-4">
          <button
            className="cursor-pointer bg-[#043a66] text-white px-5 py-1.5 rounded-md text-sm font-semibold"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="cursor-pointer bg-[#0a6ec0] flex justify-center items-center mx-auto w-[100px] text-white px-5 py-1.5 rounded-md text-sm font-semibold"
            onClick={() => dispatch(setPageType("Page-3A"))}
          >
            ← Back
          </button>
        </div>
      </div>
    </Screen>
  );
};
