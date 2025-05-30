import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { setQuestionField } from "@/redux/reducer/userSlice";
import { saveUserData } from "@/api/apiCommunication";

const Page3 = () => {
  const dispatch = useAppDispatch();
  const {
    copd: userCopd,
    cancer: userCancer,
    familyCancer: userFamilyCancer,
  } = useAppSelector((state) => state.user.questions);
  const { userID, questions } = useAppSelector((state) => state.user);

  const [copd, setCopd] = useState<string | null>(userCopd);
  const [cancer, setCancer] = useState<string | null>(userCancer);
  const [familyCancer, setFamilyCancer] = useState<string | null>(
    userFamilyCancer
  );
  const [isSubmitPending, setSubmitPending] = useState(false);

  const handleNext = () => {
    if (!copd || !cancer || !familyCancer) {
      return toast.error("Please answer all questions!");
    }

    dispatch(setQuestionField({ field: "copd", value: copd }));
    dispatch(setQuestionField({ field: "cancer", value: cancer }));
    dispatch(setQuestionField({ field: "familyCancer", value: familyCancer }));

    dispatch(setPageType("Page-3A"));
  };

  const handleSubmit = async () => {
    setSubmitPending(true);
    await saveUserData({
      currentPage: "Page-3",
      questions,
      screeningResult: "incomplete",
      userID,
    });
    setSubmitPending(false);
  };
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-full text-[#043a66]">
      <h2 className="font-bold text-[22px] text-left w-full">
        Please fill out these additional questions to the best of your
        knowledge:
      </h2>

      <div className="w-full flex flex-col gap-1">
        <p className="text-[18px] font-semibold">
          Have you ever been diagnosed with COPD (a chronic lung condition)?
        </p>
        <div className="flex justify-between">
          {["Yes", "No"].map((option) => (
            <motion.button
              key={option}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundColor: copd === option ? "#043a66" : "#ffffff",
                color: copd === option ? "#ffffff" : "#043a66",
                borderColor: "#043a66",
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setCopd(option as "Yes" | "No")}
              className="border-2 text-[18px] w-[45%] px-4 py-1 rounded-md text-sm font-medium"
            >
              {option}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-1">
        <p className="text-[20px] font-semibold">
          Have you ever been diagnosed with cancer?
        </p>
        <div className="flex justify-between">
          {["Yes", "No"].map((option) => (
            <motion.button
              key={option}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundColor: cancer === option ? "#043a66" : "#ffffff",
                color: cancer === option ? "#ffffff" : "#043a66",
                borderColor: "#043a66",
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setCancer(option as "Yes" | "No")}
              className="border-2 text-[18px]  w-[45%] px-4 py-1 rounded-md text-sm font-medium"
            >
              {option}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-1">
        <p className="text-[20px] font-semibold">
          Has anyone in your family ever been diagnosed with lung cancer?
        </p>
        <div className="flex justify-between">
          {["Yes", "No"].map((option) => (
            <motion.button
              key={option}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundColor:
                  familyCancer === option ? "#043a66" : "#ffffff",
                color: familyCancer === option ? "#ffffff" : "#043a66",
                borderColor: "#043a66",
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setFamilyCancer(option as "Yes" | "No")}
              className="border-2 text-[18px] w-[45%] px-4 py-1 rounded-md text-sm font-medium"
            >
              {option}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end w-full">
        <button
          className="bg-[#043a66] text-white px-5 py-1.5 rounded-md text-[16px] font-semibold"
          onClick={() => handleNext()}
        >
          Next →
        </button>
      </div>

      <div className="mt-[10px] flex flex-col items-center gap-2">
        <button
          className="text-white text-[16px] bg-[#0a6ec0] font-bold rounded-md px-5 py-1"
          onClick={() => dispatch(setPageType("Page-2"))}
        >
          ← Back
        </button>

        <p className="cursor-pointer  underline  mt-1" onClick={handleSubmit}>
          {isSubmitPending ? (
            <div className="text-[14px] text-[#043a66]">Saving...</div>
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

export default Page3;
