import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useAppSelector } from "@/hooks/redux";
import { useLocation } from "react-router-dom";
const pageUrls = ["/page-1", "/page-1a", "/page-2", "/page-3", "/page-3a"];

type ScreenProps = {
  children: ReactNode;
};

export const Screen = ({ children }: ScreenProps) => {
  const { userID } = useAppSelector((state) => state.user);
  const location = useLocation();

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`w-full sm:h-screen  h-[90vh]`}
    >
      <div
        className={`relative w-full mx-auto max-w-[400px] h-full  ${
          location.pathname === "/thanks" ? "bg-[#0064B0]" : ""
        }`}
      >
        {userID && pageUrls.includes(location.pathname) && (
          <p className="text-[20px] text-[#043a66] pt-4 px-4 font-medium">
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
