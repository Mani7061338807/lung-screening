import Input from "@/components/Input";
import { Screen } from "@/components/Screen";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";
import { setQuestionField } from "@/redux/reducer/userSlice";
import { validateAge } from "@/utills/validation";
import { useState } from "react";

const Page1A = () => {
  const dispatch = useAppDispatch();
  const userAge = useAppSelector((state) => state.user.questions.age);

  const [age, setAge] = useState(0);
  const [ageError, setAgeError] = useState("");

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
  return (
    <Screen>
      <div className="flex flex-col gap-6 mt-28 text-[#043a66] w-full">
        <div className="flex flex-col gap-2 w-full">
          <label className="text-sm font-bold text-left">
            How old were you when you quit smoking?
          </label>
          <Input
            value={age}
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

          <p className="text-[11px] text-[#d90429] underline text-center mt-1">
            Click here to save your work and return later.
          </p>
        </div>
      </div>
    </Screen>
  );
};

export default Page1A;
