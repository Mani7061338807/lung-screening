import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";
import { useState } from "react";
import { motion } from "framer-motion";
import Input from "@/components/Input";
import { setQuestionField } from "@/redux/reducer/userSlice";
import { validateAge } from "@/utills/validation";

const Page1 = () => {
  const dispatch = useAppDispatch();
  const { age: userAge, currentlySmoke } = useAppSelector(
    (state) => state.user.questions
  );
  const { questions } = useAppSelector((state) => state.user);
  console.log(questions);
  const [age, setAge] = useState(userAge);
  const [smokingStatus, setSmokingStatus] = useState<string>(currentlySmoke);
  const [ageError, setAgeError] = useState("");

  const handleAgeChange = (value: number) => {
    setAge(value);

    const err = validateAge(value);
    setAgeError(err);
  };

  const isFormValid = age && !ageError && smokingStatus;

  const handleNext = () => {
    if (!isFormValid) return;
    dispatch(setQuestionField({ field: "age", value: age }));
    dispatch(
      setQuestionField({ field: "currentlySmoke", value: smokingStatus })
    );
    dispatch(setPageType(smokingStatus === "No" ? "Page-1A" : "Page-2"));
  };

  return (
    <div className="flex flex-col gap-6 items-center text-[#043a66]">
      <h2 className="text-lg font-bold">
        Please fill out the following fields:
      </h2>

      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm font-semibold text-left">
          What is your age?
        </label>

        <Input
          value={age as number}
          type="number"
          onChange={(value) => handleAgeChange(value as number)}
          placeholder="(A) Eg. 50–80 years old"
          error={ageError}
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label className="text-sm font-semibold text-left">
          Do you currently smoke? Select one.
        </label>
        <div className="flex gap-4 justify-center">
          {["Yes", "No"].map((option) => (
            <motion.button
              key={option}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundColor:
                  smokingStatus === option ? "#043a66" : "#ffffff",
                color: smokingStatus === option ? "#ffffff" : "#043a66",
                borderColor: "#043a66",
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setSmokingStatus(option as "Yes" | "No")}
              className="border px-4 py-1 rounded-md text-sm font-medium"
            >
              {option}
            </motion.button>
          ))}
        </div>
      </div>

      <button
        className={`${
          isFormValid
            ? "bg-[#043a66] hover:bg-[#022949]"
            : "bg-gray-300 cursor-not-allowed"
        } flex items-center justify-center mt-24 self-end text-white px-4 py-2 rounded-md text-[14px] font-medium"`}
        onClick={handleNext}
        disabled={!isFormValid}
      >
        Next →
      </button>
    </div>
  );
};

export default Page1;
