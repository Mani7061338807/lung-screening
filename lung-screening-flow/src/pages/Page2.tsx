import { saveUserData } from "@/api/apiCommunication";
import Input from "@/components/Input";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setQuestionField } from "@/redux/reducer/userSlice";
import { validateAge } from "@/utills/validation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
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
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleAgeChange = (value: number) => {
    setStartAge(value);
    setAgeError(validateAge(value));
  };
  const handleNext = () => {
    if (!packDuration) {
      return toast.error(t("error_pack_duration"));
    } else if (ageError || !age || !startAge) return;
    const cal = (age - startAge) * packDuration;

    dispatch(setQuestionField({ field: "startedSmokingAge", value: startAge }));
    dispatch(setQuestionField({ field: "packPerDay", value: packDuration }));
    navigate(cal >= 20 ? "/recommended" : "/page-3");
  };
  const handleSubmit = async () => {
    setSubmitPending(true);
    await saveUserData({
      currentPage: "/page-2",
      questions,
      screeningResult: "incomplete",
      userID,
    });
    setSubmitPending(false);
  };
  return (
    <div className="flex h-full justify-center relative flex-col gap-2 text-[#043a66] w-full">
      {/* Input 1 */}
      <div className="flex flex-col gap-2 w-full">
        <label className="text-[24px] font-bold text-left">
          {t("start_smoking_age_label")}
        </label>
        <Input
          type="number"
          placeholder={t("start_smoking_age_placeholder")}
          value={startAge as number}
          error={ageError}
          onChange={(value) => handleAgeChange(value as number)}
        />
      </div>

      {/* Input 2 */}
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="pack-duration"
          className="text-[24px] font-bold text-left leading-snug"
        >
          {t("pack_duration_label")}
        </label>
        <select
          id="pack-duration"
          className="border-2 text-[20px] border-[#043a66] focus:outline-[#043a66] rounded-md p-2 text-sm"
          value={packDuration as number}
          onChange={(e) => setPackDuration(parseFloat(e.target.value))}
        >
          <option value={0}>{t("pack_duration_select")}</option>
          <option value={3}>{t("pack_duration_3")}</option>
          <option value={2}>{t("pack_duration_2")}</option>
          <option value={1.5}>{t("pack_duration_1_5")}</option>
          <option value={1}>{t("pack_duration_1")}</option>
          <option value={0.5}>{t("pack_duration_half")}k</option>
          <option value={0.3}>{t("pack_duration_0_3")}</option>
          <option value={1}>{t("pack_duration_week")}</option>
        </select>
      </div>

      {/* Next Button */}
      <div className="flex mt-2 justify-end">
        <button
          className="bg-[#043a66] text-white px-5 py-1.5 cursor-pointer rounded-md text-[16px] font-semibold"
          onClick={handleNext}
        >
          {t("next")}
        </button>
      </div>

      {/* Back and Save */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full bottom-4 flex flex-col items-center gap-2">
        <button
          className="text-white cursor-pointer py-1.5 text-[16px] font-bold bg-[#0a6ec0] rounded-md px-5 py-1"
          onClick={() => navigate(-1)}
        >
          {t("back")}
        </button>

        <p className="cursor-pointer  underline  mt-1" onClick={handleSubmit}>
          {isSubmitPending ? (
            <div className="text-[14px] text-[#043a66]">{t("saving")}</div>
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

export default Page2;
