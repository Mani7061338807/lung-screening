import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Helper to get a cookie
  const getCookie = (name: string) => {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    return match ? match[2] : null;
  };

  // Helper to set a cookie
  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  };

  useEffect(() => {
    const cookie = getCookie("termsAccepted");
    if (cookie === "true") {
      setTermsAccepted(true);
    }

    const savedLang = getCookie("lang");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  const handleStart = () => {
    if (!termsAccepted) {
      setCookie("termsAccepted", "true", 365); // Store for 1 year
      navigate("/terms");
    } else {
      navigate("/flow-chart");
    }
  };

  return (
    <div className="flex flex-col h-full justify-between items-center pt-[120px] pb-8 px-4">
      <div className="flex flex-2  pt-[150px] flex-col items-center gap-8">
        <div className="text-[24px] font-bold text-[#043a66] text-center">
          {t("home_page_title")}
        </div>
        <div
          className="py-2 w-full text-center bg-[#043a66] rounded-md text-white text-[20px] font-medium cursor-pointer"
          onClick={handleStart}
        >
          {t("start_screening")}
        </div>
      </div>

      <div className="flex flex-col gap-3 text-[#B81E7B] text-md items-center font-medium">
        <div
          className="underline text-[16px] cursor-pointer"
          onClick={() => {
            const newLang = i18n.language === "en" ? "es" : "en";
            i18n.changeLanguage(newLang);
            setCookie("lang", newLang, 365);
          }}
        >
          {t("language_switch")}
        </div>
        <a href="#" className="underline text-center leading-tight">
          {t("faq_lung")}
        </a>
        <a href="#" className="underline">
          {t("contact")}
        </a>
      </div>
    </div>
  );
};

export default HomePage;
