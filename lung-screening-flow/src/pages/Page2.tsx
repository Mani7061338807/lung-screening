import { saveUserData } from "@/api/apiCommunication";
import Input from "@/components/Input";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";
import { setQuestionField } from "@/redux/reducer/userSlice";
import { validateAge } from "@/utills/validation";
import { useState } from "react";
import { toast } from "react-toastify";

const Page2 = () => {
  const dispatch = useAppDispatch();
  const { age, packPerDay, startedSmokingAge } = useAppSelector(
    (state) => state.user.questions
  );
  const { userID, questions } = useAppSelector((state) => state.user);

  const [startAge, setStartAge] = useState(startedSmokingAge);
  const [packDuration, setPackDuration] = useState(packPerDay);
  const [ageError, setAgeError] = useState("");
  const [isSubmitPending, setSubmitPending] = useState(false);

  const handleAgeChange = (value: number) => {
    setStartAge(value);
    setAgeError(validateAge(value));
  };
  const handleNext = () => {
    if (!packDuration) {
      return toast.error("Select Pack Duration!");
    } else if (ageError || !age || !startAge) return;
    const cal = (age - startAge) * packDuration;

    dispatch(setQuestionField({ field: "startedSmokingAge", value: startAge }));
    dispatch(setQuestionField({ field: "packPerDay", value: packDuration }));
    dispatch(setPageType(cal >= 20 ? "RECOMMENDED" : "Page-3"));
  };
  const handleSubmit = async () => {
    setSubmitPending(true);
    await saveUserData({
      currentPage: "Page-2",
      questions,
      screeningResult: "incomplete",
      userID,
    });
    setSubmitPending(false);
  };
  return (
    <div className="flex flex-col gap-2 mt-20 text-[#043a66] w-full">
      {/* Input 1 */}
      <div className="flex flex-col gap-2 w-full">
        <label className="text-sm font-bold text-left">
          How old were you when you started smoking?
        </label>
        <Input
          type="number"
          placeholder="(C) Eg. 5–80 years"
          value={startAge as number}
          error={ageError}
          onChange={(value) => handleAgeChange(value as number)}
        />
      </div>

      {/* Input 2 */}
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="pack-duration"
          className="text-sm font-bold text-left leading-snug"
        >
          When your smoking habit was at its heaviest, how long would a pack or
          multiple packs last you?
        </label>
        <select
          id="pack-duration"
          className="border border-[#043a66] focus:outline-[#043a66] rounded-md p-2 text-sm"
          value={packDuration as number}
          onChange={(e) => setPackDuration(parseFloat(e.target.value))}
        >
          <option value={0}>(D) Select option</option>
          <option value={3}>3 or more packs a day</option>
          <option value={2}>2 packs a day</option>
          <option value={1.5}>1.5 pack a day</option>
          <option value={1}>1 pack a day</option>
          <option value={0.5}>1/2 pack a week</option>
          <option value={0.3}>2 pack a week</option>
          <option value={1}>1 pack a week or less</option>
        </select>
      </div>

      {/* Next Button */}
      <div className="flex justify-end">
        <button
          className="bg-[#043a66] text-white px-5 py-1.5 cursor-pointer rounded-md text-sm font-semibold"
          onClick={handleNext}
        >
          Next →
        </button>
      </div>

      {/* Back and Save */}
      <div className="mt-[130px] flex flex-col items-center gap-2">
        <button
          className="text-white cursor-pointer text-sm bg-[#0a6ec0] rounded-md px-5 py-1"
          onClick={() => dispatch(setPageType("Page-1A"))}
        >
          ← Back
        </button>

        <p className="cursor-pointer  underline  mt-1" onClick={handleSubmit}>
          {isSubmitPending ? (
            <div className="text-md text-[#043a66]">Saving...</div>
          ) : (
            <div className="text-[#e3006e] text-[11px] text-center ">
              Click here to save your work and return later.
            </div>
          )}
        </p>
      </div>
    </div>
  );
};

export default Page2;
