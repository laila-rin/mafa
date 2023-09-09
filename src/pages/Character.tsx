import {PageProps} from "../types.ts";
import {Answer, questionNames, questions, StartValue} from "./Questions.ts";
import {Adelig} from "./characters/Adelig.tsx";
import {Ninja} from "./characters/Ninja.tsx";

export const Character = (props: PageProps) => {

  let score = 0;
  for (const question of questionNames) {
    let value = questions[question][StartValue];

    for (const answer of Object.values(questions[question]) as Answer[]) {
      if (props.isAnswerSelected(answer)) {
        value += answer.value
      }

      score += Math.max(0, Math.min(value, 10))
    }
  }

  if (score > 120) return <Adelig/>
  if (score > 90) return <Ninja/>

  // TODO
  return <div>
    {score}
  </div>
}