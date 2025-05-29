import { useAppDispatch } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col justify-between items-center  mt-[120px] py-12">
      <div className="flex flex-col items-center gap-8">
        <div className="text-[18px] font-bierstadt font-semibold text-[#043a66] text-center">
          Lung Cancer Screening
        </div>
        <div
          className="py-2 px-6 bg-[#043a66] rounded-md text-white text-[16px] font-medium cursor-pointer"
          onClick={() => dispatch(setPageType("TERM_AND_CONDITION"))}
        >
          Start screening
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-10 text-[#B80C7B] text-sm items-center font-medium">
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
