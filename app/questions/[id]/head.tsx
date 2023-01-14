import { QuestionData } from "../../../types";

export const getQuestion = async (id: string): Promise<QuestionData> => {
    const res = await fetch(
      `${process.env.PB_API}/collections/questions/records/${id}`,
      {
        next: { revalidate: 10 },
      }
    );
    const data = await res.json();
    return data
  };

export default async function Head({ params }: { params: { id: string } }) {
    const question = await getQuestion(params.id);

    return (
      <>
          <title>{question.title}</title>
          <link rel="icon" href="/favicon.ico" />
      </>
    );
  }
  