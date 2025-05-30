import { useState } from "react";

const faqData = [
  {
    question: "Who needs lung cancer screening?",
    answer: `There are several guidelines regarding who should receive lung cancer screening. One organization called the U.S. Preventive Services Task Force recommends screening for people aged 50-80, who have a 20 pack-year smoking history and currently smoke or have quit within 15 years. "Pack-year" depends on how many cigarettes you smoke in a day for how many years. Screening can reduce the chances of death due to lung cancer.`,
  },
  {
    question: "What factors lead to an increased risk of lung cancer?",
    answer: `Smoking is the leading cause of lung cancer. About 80% of lung cancer deaths are due to smoking. Other risk factors include exposure to secondhand smoke, radon gas, asbestos, air pollution, and a family history of lung cancer.`,
  },
  {
    question:
      "How does lung cancer screening work and are there risks to imaging?",
    answer: `Lung cancer screening is performed with a test called a low-dose CT scan. It takes images of your lungs in a few minutes and is painless. It can detect abnormalities early. Risks may include false positives and exposure to radiation, but the benefits outweigh the risks.`,
  },
  {
    question: "Why is it important to undergo lung cancer screening?",
    answer: `Lung cancer is often found at an advanced stage. Screening helps detect cancer early, making it more treatable and improving survival rates.`,
  },
  {
    question: "Who can I contact regarding this application?",
    answer: `For any questions, concerns, or feedback about this application, please reach out to your local support team or fill out this survey.`,
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="text-[#043a66] flex flex-col gap-4 text-sm">
      <h2 className="font-bold text-[26px] text-left mb-2">
        Frequently asked questions
      </h2>

      {faqData.map((faq, index) => (
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
