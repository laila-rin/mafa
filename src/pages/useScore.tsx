import {PageProps} from "../types.ts";
import {Answer, questionNames, questions, StartValue} from "./Questions.ts";

export const useScore = (props: Pick<PageProps, "isAnswerSelected">) => {
  let score = 0;
  for (const question of questionNames) {
    let value = questions[question][StartValue];

    for (const answer of Object.values(questions[question]) as Answer[]) {
      if (props.isAnswerSelected(answer)) {
        value += answer.value
      }
    }
    
    score += Math.max(0, Math.min(value, 10))
  }

  return score;
}