import { useNavigate } from "react-router-dom";

export const ScreeningThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 h-full relative flex flex-col justify-center text-white text-sm  p-6 rounded-2xl">
      <p className="font-semibold text-[24px]">
        Thank you for completing the screening process.
      </p>
      <p className="text-[20px] text-[#003A66]">
        Please feel free to ask your provider any questions regarding lung
        cancer screening.
      </p>

      <div className="flex absolute w-full text-center p-6 bottom-4 left-1/2 transform -translate-x-1/2 w-full flex-col gap-4">
        <p className="text-[#901075] underline decoration-[#AC0069] cursor-pointer text-[16px]">
          Click here to save your work and return later <br />
          www.lcscreening.com
        </p>

        <p
          className="underline text-[16px] cursor-pointer"
          onClick={() => navigate("/faq")}
        >
          Frequently asked questions
        </p>
      </div>
    </div>
  );
};
