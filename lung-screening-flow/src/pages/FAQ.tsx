import { useState } from "react";
import { useTranslation } from "react-i18next";
type FAQItem = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const toggleQuestion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  const faqs = t("faq", { returnObjects: true }) as FAQItem[];

  return (
    <div className="text-[#043a66] flex flex-col gap-4 text-sm">
      <h2 className="font-bold text-[26px] text-left mb-2">{t("faq_title")}</h2>

      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            onClick={() => toggleQuestion(index)}
            className="text-[#e3006e] cursor-pointer underline text-[20px] font-semibold text-left w-full"
          >
            {faq.question}
          </button>
          {openIndex === index && (
            <p className="text-[#043a66] text-[18px] mt-1">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
