"use client";

import { RadioGroup } from "@headlessui/react";
import { useEffect, useState } from "react";
import { QuestionData } from "../../../types";


export default function QuestionPage({ params }: any) {
  const [questionData, setQuestion] = useState<QuestionData>();
  const [checked, setChecked] = useState<string>("");

  useEffect(() => {
    const getQuestion = async () => {
      const res = await fetch(
        `${process.env.PB_API}/collections/questions/records/${params.id}`,
        {
          next: { revalidate: 10 },
        }
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
        <RadioGroup value={checked} onChange={setChecked}>
          {/* <RadioGroup.Label>Pick an answer:</RadioGroup.Label> */}
          <div className="pt-3">
          <RadioGroup.Option value="a1">
            {({ checked }) => (
              <span className={checked ? "bg-blue-200 dark:bg-red-300" : ""}>
                {questionData?.choices.a1}
              </span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="a2">
            {({ checked }) => (
              <span className={checked ? "bg-blue-200 dark:bg-red-300" : ""}>
                {questionData?.choices.a2}
              </span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="a3">
            {({ checked }) => (
              <span className={checked ? "bg-blue-200 dark:bg-red-300" : ""}>
                {questionData?.choices.a3}
              </span>
            )}
          </RadioGroup.Option>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
