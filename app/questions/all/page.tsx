import { LinkMotionButton } from "../../../components/LinkMotionButton";
import { getFirstQuestion, getQuestionSets } from "../../../helpers/supabase-helpers";
import { Routes } from "../../../Routes";

export default async function Questions() {
  const questionSets = await getQuestionSets();
  const firstQuestion = await getFirstQuestion();

  return (
    <div className="flex flex-col items-center my-10">
      {firstQuestion && <LinkMotionButton key={firstQuestion.id} text={'Go to all questions (first question)'} href={`${Routes.QUESTIONS_ALL}/${firstQuestion.id}`} />}
      <br />
      <h1>Question Sets</h1>
      {questionSets?.map((questionSet) => {
        return <LinkMotionButton key={questionSet.id} text={questionSet['name']} href={`${Routes.QUESTION_SETS}/${questionSet.id}`} />;
      })}
    </div>
  );
}
