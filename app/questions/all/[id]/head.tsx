import { getQuestionById } from "../../../../helpers/supabase-helpers";

export default async function Head({ params }: { params: { id: number } }) {
  const question = await getQuestionById(params.id);

  return (
    <>
      <title>{question?.title}</title>
      <link rel="icon" href="/quiz.svg" />
    </>
  );
}
