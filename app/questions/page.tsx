import Question from "../../components/question";
import { getQuestions } from "../../getQuestions";

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
