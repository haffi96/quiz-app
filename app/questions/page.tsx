import Question from "../../components/question";
import { QuestionData } from "../../types";

async function getQuestions(): Promise<QuestionData[]> {
  const res = await fetch(
    `${process.env.PB_API}/collections/questions/records?page=1&perPage=30`,
    {
      next: { revalidate: 10 },
    }
  );

  const data = await res.json();
  const questions = data.items;

  return questions
}

export default async function Questions() {
  const questions = await getQuestions();

  return (
    <div className="flex flex-col items-center">
      {questions?.map((question) => {
        return <Question key={question.id} question={question} />;
      })}
    </div>
  );
}
