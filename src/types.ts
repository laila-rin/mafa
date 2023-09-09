import {Answer, QuestionName} from "./pages/Questions.ts";

export type PageProps = {
  // changeScore: (delta: number) => unknown;
  // changeProfile: (profile: {
  //   name: string, alter: number
  // }) => unknown;
  toggleAnswer: (a: Answer) => unknown;
  isAnswerSelected: (a: Answer) => boolean;
  isQuestionAnswered: (q: QuestionName) => boolean;
  nextPage: () => unknown;
}