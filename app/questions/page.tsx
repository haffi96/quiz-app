"use client";

import { useState, useEffect } from "react";
import Question from "../../components/question";
import { QuestionData } from "../../types";

export default function Questions() {
  const [questions, setQuestions] = useState<QuestionData[]>();

  useEffect(() => {
    const getQuestions = async () => {
      const res = await fetch(
        "http://127.0.0.1:8090/api/collections/questions/records?page=1&perPage=30",
        { cache: "no-store" }
      );
      const data = await res.json();
      setQuestions(data?.items as QuestionData[]);
    };
    getQuestions();
  }, []);

  return (
    <div className="flex flex-col items-center">
        {questions?.map((question) => {
          return <Question key={question.id} question={question} />;
        })}
    </div>
  );
}
