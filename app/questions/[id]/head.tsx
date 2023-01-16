import { getQuestionById } from "../../../helpers/pocketbaseHelper";

export default async function Head({ params }: { params: { id: string } }) {
  const question = await getQuestionById(params.id);

  return (
    <>
      <title>{question.title}</title>
      <link rel="icon" href="/quiz.svg" />
    </>
  );
}
