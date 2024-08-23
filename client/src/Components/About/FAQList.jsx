import { useState } from "react";
import { Box } from "@mui/material";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQList = () => {
  const [open, setOpen] = useState(null);

  const handleClick = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <Box>
      <section className="bg-white dark:bg-gray-900">
        <div className="container max-w-4xl px-4 py-8 mx-auto sm:px-6 sm:py-10 lg:px-8">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
            Frequently Asked Questions
          </h1>

          <div className="mt-8 space-y-4 lg:mt-12">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-gray-100 rounded-lg dark:border-gray-700"
              >
                <button
                  className="flex items-center justify-between w-full p-4 sm:p-6 lg:p-8"
                  onClick={() => handleClick(index)}
                >
                  <h1 className="text-left text-sm font-semibold text-gray-700 sm:text-base lg:text-lg dark:text-white">
                    {faq.question}
                  </h1>
                  {open === index ? (
                    <FaChevronUp className="text-gray-700 dark:text-white" />
                  ) : (
                    <FaChevronDown className="text-gray-700 dark:text-white" />
                  )}
                </button>
                {open === index && (
                  <div className="p-4 text-sm text-gray-500 dark:text-gray-300 sm:p-6 lg:p-8 lg:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Box>
  );
};

const faqData = [
  {
    question: "How can I access my diagnosis results online?",
    answer:
      "Patients can access their diagnosis results by logging into their account on our website. Results are updated in real-time once uploaded by medical staff.",
  },
  {
    question: "Is there a cost for accessing the diagnosis results?",
    answer:
      "Accessing diagnosis results online is generally covered under your healthcare plan. For specific details, please check with your health insurance provider.",
  },
  {
    question: "Do I need a referral to view my results?",
    answer:
      "No referral is needed to view your results. You can access them directly through your account once they are uploaded by medical staff.",
  },
  {
    question: "What are the office hours for support?",
    answer:
      "Our support team is available from 9 AM to 5 PM, Monday through Friday. For urgent queries, please contact us via our emergency support line.",
  },
  {
    question: "What should I expect during my first consultation?",
    answer:
      "During your first consultation, you will discuss your medical history and current symptoms with the doctor. The consultation will help determine the necessary tests and follow-up actions.",
  },
];

export default FAQList;
