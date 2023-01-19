import Question from "../../components/question";
import { getQuestions } from "../../helpers/pocketbaseHelper";

export default async function Questions() {
  const questions = await getQuestions();

  return (
    <div className="flex flex-col items-center my-10">
      {questions?.map((question) => {
        return <Question key={question.id} question={question} />;
      })}
    </div>
  );
}
