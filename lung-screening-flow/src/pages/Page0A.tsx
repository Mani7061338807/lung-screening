import { Screen } from "@/components/Screen";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";
import { resetUser, setUserID } from "@/redux/reducer/userSlice";

const Page0A = () => {
  const dispatch = useAppDispatch();
  const { currentPage, userID } = useAppSelector((state) => state.user);

  return (
    <Screen>
      <div className="font-bold text-center text-[24px] text-[#043a66] ">
        Welcome back!
      </div>
      <button
        className="w-full bg-[#043a66] mt-18 text-center cursor-pointer text-white font-semibold text-[16px] px-4 py-3  rounded-[12px]"
        onClick={() => dispatch(setPageType(currentPage))}
      >
        Click here to continue where you left off
      </button>
      <button
        className="w-full bg-[#043a66] mt-6 text-center cursor-pointer text-white font-semibold text-[16px] px-4 py-3  rounded-[12px]"
        onClick={() => {
          dispatch(resetUser());
          dispatch(setUserID(userID));
          dispatch(setPageType("Page-1"));
        }}
      >
        Click here to start a new session
      </button>
    </Screen>
  );
};

export default Page0A;
