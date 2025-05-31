import { useAppSelector } from "@/hooks/redux";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const { userID } = useAppSelector((state) => state.user);

  return (
    <div className="flex flex-col  gap-8 h-full justify-center">
      <div className="text-[24px] font-bold text-[#043a66] ">
        Welcome to the <br />
        <span className="text-[#043a66]">Lung Cancer screening app.</span>
      </div>

      <div className="text-[18px] text-[#0064B0] font-medium ">
        Your unique ID number is <span className="font-bold">{userID}</span>.
        Please keep this number in your records, to return to your unique
        profile anytime.
      </div>

      <button
        className="bg-[#043a66] cursor-pointer flex items-center justify-center mt-16 self-end text-white px-4 py-2 rounded-md text-[16px] font-medium"
        onClick={() => navigate("/page-1")}
      >
        Next →
      </button>
    </div>
  );
};

export default WelcomeScreen;
