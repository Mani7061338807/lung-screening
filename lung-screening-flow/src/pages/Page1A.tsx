import { saveUserData } from "@/api/apiCommunication";
import Input from "@/components/Input";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setQuestionField } from "@/redux/reducer/userSlice";
import { validateAge } from "@/utills/validation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Page1A = () => {
  const dispatch = useAppDispatch();
  const { age: userAge, quitAge } = useAppSelector(
    (state) => state.user.questions
  );
  const { userID, questions } = useAppSelector((state) => state.user);

  const [age, setAge] = useState(quitAge);
  const [ageError, setAgeError] = useState("");
  const [isSubmitPending, setSubmitPending] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleAgeChange = (value: number) => {
    setAge(value);

    const error = validateAge(value);
    setAgeError(error);
  };
  const handleNext = () => {
    const diffAge = Number(userAge) - Number(age);
    if (!age) {
      return toast.error(t("error_fill_details"));
    }
    dispatch(setQuestionField({ field: "quitAge", value: age }));
    navigate(diffAge > 15 ? "/page-3" : "/page-2");
  };
  const handleSubmit = async () => {
    setSubmitPending(true);
    await saveUserData({
      currentPage: "/page-1a",
      questions,
      screeningResult: "incomplete",
      userID,
    });
    setSubmitPending(false);
  };
  return (
    <div className="relative flex h-full justify-center flex-col gap-6 text-[#043a66] w-full">
      <div className="flex flex-col gap-2 w-full">
        <label className="text-[22px] font-bold text-left">
          {t("quit_age_label")}
        </label>
        <Input
          value={age as number}
          placeholder={t("quit_age_placeholder")}
          error={ageError}
          onChange={(value) => handleAgeChange(value as number)}
        />
      </div>

      <div className="flex justify-end">
        <button
          className="bg-[#043a66] cursor-pointer text-white px-5 py-1.5 rounded-md text-[18px] font-semibold"
          onClick={handleNext}
        >
          {t("next")}
        </button>
      </div>

      <div className="absolute w-full bottom-4 left-1/2 transform -translate-x-1/2  flex flex-col items-center gap-2">
        <button
          className="text-white cursor-pointer text-[20px] py-2 bg-[#0a6ec0] rounded-md px-5 py-1"
          onClick={() => navigate(-1)}
        >
          {t("back")}
        </button>

        <p className="cursor-pointer  underline  mt-1" onClick={handleSubmit}>
          {isSubmitPending ? (
            <div className="text-md text-[#043a66]">{t("saving")}</div>
          ) : (
            <div className="text-[#B81E7B] text-[14px] text-center ">
              {t("save_work")}
            </div>
          )}
        </p>
      </div>
    </div>
  );
};

export default Page1A;
