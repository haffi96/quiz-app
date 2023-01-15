import { getQuestion } from "../../../helpers/pocketbaseHelper";

export default async function Head({ params }: { params: { id: string } }) {
  const question = await getQuestion(params.id);

  return (
    <>
      <title>{question.title}</title>
      <link rel="icon" href="/quiz.svg" />
    </>
  );
}
