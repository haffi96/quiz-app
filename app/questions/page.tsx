"use client";

import { pb_client } from "../../pocket";
import { useState, useEffect } from "react";
import "../globals.css";
import Question from "../../components/question";

pb_client.autoCancellation(false);

interface Choices {
  a1: string;
  a2: string;
  a3: string;
}

interface Question {
  id: string;
  title: string;
  body: string;
  choices: Choices;
  created: string;
  updated: string;
}

export default function Questions() {
  const [questions, setQuestions] = useState<Question[]>();

  useEffect(() => {
    const getQuestions = async () => {
      const res = await fetch(
        "http://127.0.0.1:8090/api/collections/questions/records?page=1&perPage=30",
        { cache: "no-store" }
      );
      const data = await res.json();
      setQuestions(data?.items as Question[]);
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
