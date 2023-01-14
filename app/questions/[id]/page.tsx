"use client";

import { RadioGroup } from "@headlessui/react";
import { useEffect, useState } from "react";
import { QuestionData } from "../../../types";

const CHECKED_STYLE = "pl-3 p-5 bg-blue-400 dark:bg-red-500 rounded-full flex";
const UNCHECKED_STYLE = "pl-3 p-5 bg-blue-200 dark:bg-red-300 rounded-full flex w-11/12";

interface QuestionPageParams {
  params: {
    id: string
  }
}

export default function QuestionPage({ params }: QuestionPageParams) {
  const [questionData, setQuestion] = useState<QuestionData>();
  const [checked, setChecked] = useState<string>("");

  useEffect(() => {
    const getQuestion = async () => {
      const res = await fetch(
        `${process.env.PB_API}/collections/questions/records/${params.id}`,
        { cache: "no-store" }
      );
      const data = await res.json();

      setQuestion(data);
    };
    getQuestion();
  }, [params.id]);

  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="font-bold">{questionData?.title}</p>
        <p className="py-5">{questionData?.body}</p>
        <RadioGroup value={checked} onChange={setChecked} className="pt-3 flex flex-col w-2/3 space-y-3">
          <RadioGroup.Label>Pick an answer:</RadioGroup.Label>
          <RadioGroup.Option value="a1">
            {({ checked }) => (
              <span className={checked ? CHECKED_STYLE : UNCHECKED_STYLE}>
                {questionData?.choices.a1}
              </span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="a2">
            {({ checked }) => (
              <span className={checked ? CHECKED_STYLE : UNCHECKED_STYLE}>
                {questionData?.choices.a2}
              </span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="a3">
            {({ checked }) => (
              <span className={checked ? CHECKED_STYLE : UNCHECKED_STYLE}>
                {questionData?.choices.a3}
              </span>
            )}
          </RadioGroup.Option>
        </RadioGroup>
        <div className="p-10">
          <button className="bg-transparent hover:bg-blue-500 dark:hover:bg-red-500 text-blue-700 dark:text-red-700 font-semibold hover:text-white dark:hover:text-white py-2 px-4 border border-blue-500 dark:border-red-500 hover:border-transparent rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
