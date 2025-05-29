import { useAppDispatch } from "@/hooks/redux";
import { setPageType } from "@/redux/reducer/pageSlice";

const TermsAndCondition = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="text-[#043a66] text-left text-sm font-medium">
      <h1 className="text-2xl font-bold  mb-4">Terms of use</h1>

      <p className="text-[13px] font-bold underline text-pink-700 mb-4">
        Read the terms of this agreement carefully before using this app.
      </p>

      <p className="mb-4">
        This Terms of Agreement is a binding legal contract between you and the
        Lung Cancer Screening app. By downloading, accessing or using any part
        of this app, you are bound by the terms of this agreement.
      </p>

      <ol className="list-decimal pl-4 space-y-3 text-[13px]">
        <li>
          <strong>Accessing the app:</strong> In order to access certain
          features on this application, you may be asked to provide certain
          information, which is governed by our privacy policy and consent form.
          You agree not to access or use the app in an unlawful way, for any
          unlawful purpose, or for any purposes other than its intended
          purposes.
        </li>
        <li>
          <strong>Disclaimer:</strong> This app is intended to be used for
          general educational and informational purposes only. It should not be
          relied upon as a substitute for a doctor’s professional medical
          judgment or medical advice. Use of this app is at your sole risk. You
          assume full responsibility for all risk associated with this app,
          without any warranties and conditions.
        </li>
        <li>
          <strong>Limitation of Liability:</strong> In no event shall Lung
          Cancer Screening be liable for any special, punitive, indirect,
          incidental, or consequential damages, whether in any action or
          otherwise arising out of or in any way connected with the use of the
          app. If you are not satisfied with the app, your sole and exclusive
          remedy is to terminate your use of the app.
        </li>
        <li>
          <strong>Intellectual Property:</strong> All intellectual property
          rights in the Lung Cancer Screening app and any documentation is
          property of Lung Cancer Screening app, and are protected by the United
          States and international copyright, trademark, and other intellectual
          property laws.
        </li>
        <li>
          All information we collect on this App is subject to our Privacy
          Policy. Please review the policy before using the App.
        </li>
      </ol>

      <p className="mt-4 text-[13px]">
        The app is operated by Montefiore Health System, Inc. Please direct all
        feedback, comments, requests for technical support, etc to{" "}
        <a href="#" className="text-blue-700 underline">
          this survey
        </a>
        .
      </p>

      <button
        onClick={() => dispatch(setPageType("PRIVACY_AND_POLICY"))}
        className="w-full cursor-pointer bg-[#043a66] text-white font-semibold text-sm px-4 py-3 mt-8 rounded-[12px]"
      >
        I agree to the terms of use.
      </button>
    </div>
  );
};

export default TermsAndCondition;
