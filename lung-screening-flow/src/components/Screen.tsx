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
    >
      <div className="flex justify-center items-center min-h-[93vh]">
        <div className="custom-scrollbar relative flex justify-center items-center min-h-[85vh] border-2  border-[#043a66] w-[300px] md:w-[400px] mx-auto rounded-[40px]">
          <div className="max-h-[80vh] overflow-y-auto p-4">
            {userID && (
              <p className="text-xs absolute top-8 left-4 text-[#043a66] font-medium mb-3">
                ID: {userID}
              </p>
            )}
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
