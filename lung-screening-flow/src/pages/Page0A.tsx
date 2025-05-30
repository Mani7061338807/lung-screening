import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { resetUser, setUserID } from "@/redux/reducer/userSlice";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Page0A = () => {
  const dispatch = useAppDispatch();
  const { currentPage, userID } = useAppSelector((state) => state.user);
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="font-bold text-center text-[28px] text-[#043a66] ">
        {t("welcome_back")}
      </div>
      <button
        className="w-[90%] bg-[#043a66] mt-18 text-center cursor-pointer text-white font-semibold text-[18px] px-4 py-3  rounded-[12px]"
        onClick={() => navigate(currentPage)}
      >
        {t("continue_session")}
      </button>
      <button
        className="w-[90%] bg-[#043a66] mt-6 text-center cursor-pointer text-white font-semibold text-[18px] px-4 py-3  rounded-[12px]"
        onClick={() => {
          dispatch(resetUser());
          dispatch(setUserID(userID));
          navigate("/page-1");
        }}
      >
        {t("start_new_session")}
      </button>
    </div>
  );
};

export default Page0A;
