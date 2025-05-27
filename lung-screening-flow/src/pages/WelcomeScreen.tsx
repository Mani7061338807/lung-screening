import { Screen } from "@/components/Screen";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";

const WelcomeScreen = () => {
  const dispatch = useAppDispatch();
  const { userID } = useAppSelector((state) => state.user);

  return (
    <Screen>
      <div className="flex flex-col mt-20 gap-8">
        <div className="text-[18px] font-bold text-[#043a66] ">
          Welcome to the <br />
          <span className="text-[#043a66]">Lung Cancer screening app.</span>
        </div>

        <div className="text-[14px] text-[#043a66] font-medium leading-snug">
          Your unique ID number is <span className="font-bold">{userID}</span>.
          Please keep this number in your records, to return to your unique
          profile anytime.
        </div>

        <button
          className="bg-[#043a66] cursor-pointer flex items-center justify-center mt-36 self-end text-white px-4 py-2 rounded-md text-[14px] font-medium"
          onClick={() => dispatch(setPageType("Page-1"))}
        >
          Next →
        </button>
      </div>
    </Screen>
  );
};

export default WelcomeScreen;
