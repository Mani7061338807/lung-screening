import { saveUserData } from "@/api/apiCommunication";
import Input from "@/components/Input";
import { Loader } from "@/components/Loader";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";
import { setQuestionField } from "@/redux/reducer/userSlice";
import { validateAge } from "@/utills/validation";
import { useState } from "react";

const Page1A = () => {
  const dispatch = useAppDispatch();
  const { age: userAge, quitAge } = useAppSelector(
    (state) => state.user.questions
  );
  const { userID, questions } = useAppSelector((state) => state.user);

  const [age, setAge] = useState(quitAge);
  const [ageError, setAgeError] = useState("");
  const [isSubmitPending, setSubmitPending] = useState(false);

  const handleAgeChange = (value: number) => {
    setAge(value);

    const error = validateAge(value);
    setAgeError(error);
  };
  const handleNext = () => {
    const diffAge = Number(userAge) - Number(age);

    dispatch(setQuestionField({ field: "quitAge", value: age }));
    dispatch(setPageType(diffAge > 15 ? "Page-3" : "Page-2"));
  };
  const handleSubmit = async () => {
    setSubmitPending(true);
    await saveUserData({
      currentPage: "Page-1A",
      questions,
      screeningResult: "incomplete",
      userID,
    });
    setSubmitPending(false);
  };
  return (
    <div className="flex flex-col gap-6 mt-28 text-[#043a66] w-full">
      <div className="flex flex-col gap-2 w-full">
        <label className="text-sm font-bold text-left">
          How old were you when you quit smoking?
        </label>
        <Input
          value={age as number}
          placeholder="(B) Eg. 20–80 years"
          error={ageError}
          onChange={(value) => handleAgeChange(value as number)}
        />
      </div>

      <div className="flex justify-end">
        <button
          className="bg-[#043a66] cursor-pointer text-white px-5 py-1.5 rounded-md text-sm font-semibold"
          onClick={handleNext}
        >
          Next →
        </button>
      </div>

      <div className="mt-24 flex flex-col items-center gap-2">
        <button
          className="text-white cursor-pointer text-sm bg-[#0a6ec0] rounded-md px-5 py-1"
          onClick={() => dispatch(setPageType("Page-1"))}
        >
          ← Back
        </button>

        <p className="cursor-pointer  underline  mt-1" onClick={handleSubmit}>
          {isSubmitPending ? (
            <Loader />
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

export default Page1A;
