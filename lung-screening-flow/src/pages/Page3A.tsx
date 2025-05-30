import { saveUserData } from "@/api/apiCommunication";
import Input from "@/components/Input";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setQuestionField } from "@/redux/reducer/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Page3A = () => {
  const dispatch = useAppDispatch();
  const {
    race: Urace,
    education: Ueducation,
    height: Uheight,
    weight: Uweight,
  } = useAppSelector((state) => state.user.questions);
  const { userID, questions } = useAppSelector((state) => state.user);

  const [race, setRace] = useState(Urace);
  const [education, setEducation] = useState(Ueducation);
  const [height, setHeight] = useState(Uheight);
  const [weight, setWeight] = useState(Uweight);
  const [isSubmitPending, setSubmitPending] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (!race || !education || !height || !weight) {
      return toast.error("Please answer all questions!");
    }

    dispatch(setQuestionField({ field: "race", value: race }));
    dispatch(setQuestionField({ field: "height", value: height }));
    dispatch(setQuestionField({ field: "weight", value: weight }));
    dispatch(setQuestionField({ field: "education", value: education }));

    navigate("/not-recommended");
  };
  const handleSubmit = async () => {
    setSubmitPending(true);
    await saveUserData({
      currentPage: "/page-3a",
      questions,
      screeningResult: "incomplete",
      userID,
    });
    setSubmitPending(false);
  };

  return (
    <div className="flex flex-col  justify-center text-[#043a66] text-sm">
      <div className="mb-4">
        <label htmlFor="race" className="font-semibold text-[22px] block mb-1">
          Which race/ethnicity do you most closely identify with?
        </label>

        <select
          id="race"
          className="w-full border-2 text-[20px] border-[#043a66] focus:outline-none rounded-md p-2"
          onChange={(e) => setRace(e.target.value)}
        >
          <option>Please select one</option>
          <option>White</option>
          <option>Black (Non-Hispanic)</option>
          <option>Hispanic</option>
          <option>Asian</option>
          <option>Native Hawaiian/Pacific Islander</option>
          <option>American Indian/Alaskan Native</option>
          <option>Defer to answer</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="education" className="font-semibold block text-[22px] ">
          What is the highest level of education you have completed?
        </label>
        <select
          id="education"
          className="w-full border-2 text-[20px] border-[#043a66] focus:outline-none rounded-md p-2"
          onChange={(e) => setEducation(e.target.value)}
        >
          <option>Please select one</option>
          <option>Less than high school</option>
          <option>High school/Grad</option>
          <option>Post high school training</option>
          <option>Some college</option>
          <option>College grad</option>
          <option>Postgraduate/Professional</option>
          <option>Defer to answer</option>
        </select>
      </div>

      <div>
        <label className="font-semibold text-[22px] block ">
          What is your height? (In cm)
        </label>
        <Input
          type="number"
          value={height as number}
          placeholder="Eg: 160"
          onChange={(value) => setHeight(value as number)}
        />
      </div>

      <div>
        <label className="font-semibold text-[22px] block ">
          What is your weight? (in Kg)
        </label>
        <Input
          type="number"
          placeholder="Eg: 45"
          value={weight as number}
          onChange={(value) => setWeight(value as number)}
        />
      </div>

      <div className="mt-4 flex justify-end w-full">
        <button
          className="bg-[#043a66] text-white px-5 py-1.5 rounded-md text-[16px] font-semibold"
          onClick={() => handleNext()}
        >
          Next →
        </button>
      </div>

      <div className="flex flex-col items-center gap-2">
        <button
          className="text-white text-[16px] font-bold bg-[#0a6ec0] rounded-md px-5 py-1"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <p className="cursor-pointer  underline  mt-1" onClick={handleSubmit}>
          {isSubmitPending ? (
            <div className="text-[16px] text-[#043a66]">Saving...</div>
          ) : (
            <div className="text-[#B81E7B] text-[14px] text-center ">
              Click here to save your work and return later.
            </div>
          )}
        </p>
      </div>
    </div>
  );
};
