import { saveUserData } from "@/api/apiCommunication";
import Input from "@/components/Input";
import { Screen } from "@/components/Screen";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";
import { setQuestionField } from "@/redux/reducer/userSlice";
import { useState } from "react";
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

  const handleNext = () => {
    if (!race || !education || !height || !weight) {
      return toast.error("Please answer all questions!");
    }

    dispatch(setQuestionField({ field: "race", value: race }));
    dispatch(setQuestionField({ field: "height", value: height }));
    dispatch(setQuestionField({ field: "weight", value: weight }));
    dispatch(setQuestionField({ field: "education", value: education }));

    dispatch(setPageType("NOT_RECOMMENDED"));
  };
  const handleSubmit = async () => {
    await saveUserData({
      currentPage: "Page-3A",
      questions,
      screeningResult: "incomplete",
      userID,
    });
  };

  return (
    <Screen>
      <div className="space-y-6 text-[#043a66] text-sm">
        <div className="space-y-4">
          <div>
            <label htmlFor="race" className="font-semibold block mb-1">
              Which race/ethnicity do you most closely identify with?
            </label>

            <select
              id="race"
              className="w-full border border-[#043a66] focus:outline-none rounded-md p-2"
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

          <div>
            <label htmlFor="education" className="font-semibold block mb-1">
              What is the highest level of education you have completed?
            </label>
            <select
              id="education"
              className="w-full border border-[#043a66] focus:outline-none rounded-md p-2"
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
            <label className="font-semibold block mb-1">
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
            <label className="font-semibold block mb-1">
              What is your weight? (in Kg)
            </label>
            <Input
              type="number"
              placeholder="Eg: 45"
              value={weight as number}
              onChange={(value) => setWeight(value as number)}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end w-full">
          <button
            className="bg-[#043a66] text-white px-5 py-1.5 rounded-md text-sm font-semibold"
            onClick={() => handleNext()}
          >
            Next →
          </button>
        </div>

        <div className="mt-[10px] flex flex-col items-center gap-2">
          <button
            className="text-white text-sm bg-[#0a6ec0] rounded-md px-5 py-1"
            onClick={() => dispatch(setPageType("Page-3"))}
          >
            ← Back
          </button>

          <p
            className="text-[11px] cursor-pointer text-[#e3006e] underline text-center mt-1"
            onClick={handleSubmit}
          >
            Click here to save your work and return later.
          </p>
        </div>
      </div>
    </Screen>
  );
};
