import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";
import { useState } from "react";
import { motion } from "framer-motion";
import Input from "@/components/Input";
import { setQuestionField } from "@/redux/reducer/userSlice";
import { validateAge } from "@/utills/validation";
import { useTranslation } from "react-i18next";

const Page1 = () => {
  const dispatch = useAppDispatch();
  const { age: userAge, currentlySmoke } = useAppSelector(
    (state) => state.user.questions
  );
  const [age, setAge] = useState(userAge);
  const [smokingStatus, setSmokingStatus] = useState<string>(currentlySmoke);
  const [ageError, setAgeError] = useState("");
  const { t } = useTranslation();

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
    <div className="flex flex-col h-full gap-6 items-center text-[#043a66] justify-center">
      <h2 className="text-[26px] font-bold">{t("page1_title")}</h2>

      <div className="flex flex-col mt-6 gap-1 w-full">
        <label className="text-[22px] font-semibold text-left">
          {t("question_age")}
        </label>

        <Input
          value={age as number}
          type="number"
          onChange={(value) => handleAgeChange(value as number)}
          placeholder={t("placeholder_age")}
          error={ageError}
        />
      </div>

      <div className="flex flex-col mt-6 gap-2 w-full">
        <label className="text-[22px] font-semibold text-left">
          {t("question_smoke")}
        </label>
        <div className="flex gap-4 justify-center">
          {[t("yes"), t("no")].map((optionText, index) => {
            const option = index === 0 ? "Yes" : "No";
            return (
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
                className="border-2 px-4 py-2 w-[45%] rounded-md text-[20px] font-medium"
              >
                {optionText}
              </motion.button>
            );
          })}
        </div>
      </div>

      <button
        className={`${
          isFormValid
            ? "bg-[#043a66] hover:bg-[#022949]"
            : "bg-gray-300 cursor-not-allowed"
        } flex items-center justify-center mt-24 self-end text-white px-4 py-2 rounded-md text-[18px] font-medium`}
        onClick={handleNext}
        disabled={!isFormValid}
      >
        {t("next")}
      </button>
    </div>
  );
};

export default Page1;
