import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useAppSelector } from "@/hooks/redux";

type ScreenProps = {
  children: ReactNode;
};

export const Screen = ({ children }: ScreenProps) => {
  const { userID } = useAppSelector((state) => state.user);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="relative flex justify-center items-center w-full h-full p-4">
        <div className="relative w-full max-w-[400px] h-full overflow-hidden flex flex-col">
          {userID && (
            <p className="text-xs absolute top-4 left-4 text-[#043a66] font-medium z-10">
              ID: {userID}
            </p>
          )}
          <div className="flex flex-col justify-center h-screen border overflow-y-auto custom-scrollbar px-4 py-6">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
