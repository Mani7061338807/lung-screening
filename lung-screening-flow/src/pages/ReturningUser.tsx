import axiosInstance from "@/api/axiosInstance";
import Input from "@/components/Input";
import { Screen } from "@/components/Screen";
import { useAppDispatch } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";
import { useState } from "react";
import { setUserID } from "@/redux/reducer/userSlice";
import { toast } from "react-toastify";

const ReturningUser = () => {
  const [userId, setUserId] = useState("");
  const dispatch = useAppDispatch();

  const onGetUser = async () => {
    try {
      const result = await axiosInstance.get(`/${userId}`);
      dispatch(setPageType("Page-0A"));
      console.log(result.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const onCreateUser = async () => {
    const result = await axiosInstance.post("/create");
    dispatch(setUserID(result.data.userID));
  };

  return (
    <Screen>
      <div className=" text-[#043a66] py-4 font-bold text-[16px]">
        Are you a returning user? <br />
        Please enter your unique ID number if you have one:
      </div>
      <Input
        type="text"
        placeholder="Eg. 00000"
        value={userId}
        onChange={(value) => setUserId(value as string)}
      />
      <button
        disabled={!userId}
        className={`w-full py-2 rounded text-white font-semibold ${
          userId
            ? "bg-[#043a66] cursor-pointer"
            : "bg-[#043a66]/20 cursor-not-allowed"
        }`}
        onClick={() => {
          onGetUser();
        }}
      >
        Submit
      </button>
      <button
        className="text-white mt-18 cursor-pointer bg-[#043a66] w-full text-center rounded px-4 py-2 text-sm font-semibold"
        onClick={() => {
          onCreateUser();
          dispatch(setPageType("Page-0B"));
        }}
      >
        Click here if this is your first time
      </button>
    </Screen>
  );
};

export default ReturningUser;
