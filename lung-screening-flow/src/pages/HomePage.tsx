import { useAppDispatch } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";
const HomePage = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col h-full justify-between items-center pt-[120px] pb-8 px-4">
      <div className="flex flex-2  pt-[200px] flex-col items-center gap-8">
        <div className="text-[24px] font-bold text-[#043a66] text-center">
          Lung Cancer Screening
        </div>
        <div
          className="py-2 w-full text-center bg-[#043a66] rounded-md text-white text-[20px] font-medium cursor-pointer"
          onClick={() => dispatch(setPageType("TERM_AND_CONDITION"))}
        >
          Start screening
        </div>
      </div>

      <div className="flex flex-col gap-3 text-[#B81E7B] text-md items-center font-medium">
        <a href="#" className="underline">
          Espanol
        </a>
        <a href="#" className="underline text-center leading-tight">
          Have questions about lung cancer screening?
        </a>
        <a href="#" className="underline">
          Contact us
        </a>
      </div>
    </div>
  );
};

export default HomePage;
