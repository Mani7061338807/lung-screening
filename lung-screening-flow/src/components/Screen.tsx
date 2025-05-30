import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useAppSelector } from "@/hooks/redux";
const pageWithIds = ["Page-1", "Page-1A", "Page-2", "Page-3", "Page-3A"];

type ScreenProps = {
  children: ReactNode;
};

export const Screen = ({ children }: ScreenProps) => {
  const { userID } = useAppSelector((state) => state.user);
  const { pageType } = useAppSelector((state) => state.page);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`w-full xl:h-screen  h-[90vh] ${
        pageType === "THANKS_SCREEN" ? "bg-[#0064B0]" : ""
      }`}
    >
      <div className="relative w-full mx-auto max-w-[400px] h-full">
        {userID && pageWithIds.includes(pageType) && (
          <p className="text-xs absolute top-4 left-4 text-[#043a66] font-medium z-10">
            ID: {userID}
          </p>
        )}
        <div className=" h-full overflow-y-auto custom-scrollbar px-4 py-6">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
