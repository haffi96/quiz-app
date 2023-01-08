export interface Choices {
    a1: string;
    a2: string;
    a3: string;
  }
  
export interface QuestionData {
    id: string;
    title: string;
    body: string;
    choices: Choices;
  }