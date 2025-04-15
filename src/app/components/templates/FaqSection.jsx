"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection() {
    const faqData = [
        {
            question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, officia?",
            answer: "Repellendus ex omnis beatae magnam, error quidem reiciendis."
        },
        {
            question: "Amet consectetur adipisicing elit?",
            answer: "inventore soluta nulla ipsum cupiditate recusandae sint! Esse eos maxime sint ducimus odit."
        },
        {
            question: "Lorem ipsum?",
            answer: "Yes."
        },
        {
            question: "Voluptatum blanditiis commodi reiciendis voluptate?",
            answer: "beatae quae, enim provident excepturi.   totam sed modi rem porro veritatis deserunt quidem adipisci."
        },
        {
            question: "aperiam architecto iste nobis soluta facilis et similique maxime ipsa sequi, quidem, corporis sint?",
            answer: "At facere iusto nostrum, animi ipsam quidem delectus odio ipsa quas sit numquam porro ad rerum."
        },
        {
            question: "Et eum quo vero earum laboriosam fugiat voluptates accusamus velit?",
            answer: "distinctio, ratione tenetur quibusdam neque inventore suscipit facere voluptate, eveniet dolore qui."
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full min-h-screen bg-fuchsia-100 py-20">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-900 bg-clip-text text-transparent mb-6">
                    Frequently asked questions
                </h1>

                <div className="w-full max-w-2xl bg-white rounded-xl shadow p-6 border border-gray-200">
                    {faqData.map((item, index) => (
                        <div key={index} className="mb-3 border-b border-gray-200">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <span className="font-medium text-gray-800">{item.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-gray-600" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-600" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="pb-4 text-sm text-gray-600 text-left">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
