import { Screen } from "@/components/Screen";
import { useAppDispatch } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";

export const ScreeningThankYou = () => {
  const dispatch = useAppDispatch();

  return (
    <Screen>
      <div className="space-y-6 text-white text-sm text-center bg-[#043a66] p-6 rounded-2xl">
        <p className="font-semibold text-lg">
          Thank you for completing the screening process.
        </p>
        <p className="text-base">
          Please feel free to ask your provider any questions regarding lung
          cancer screening.
        </p>

        <p className="text-pink-500 underline cursor-pointer text-xs">
          Click here to save your work and return later <br />
          www.lcscreening.com
        </p>

        <p
          className="underline text-xs cursor-pointer"
          onClick={() => dispatch(setPageType("FAQ"))}
        >
          Frequently asked questions
        </p>
      </div>
    </Screen>
  );
};
