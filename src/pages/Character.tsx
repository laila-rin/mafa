import {PageProps} from "../types.ts";
import {questions} from "./Questions.ts";
import {Adelig} from "./characters/Adelig.tsx";
import {Ninja} from "./characters/Ninja.tsx";
import {Magier} from "./characters/Magier.tsx";
import {Ritter} from "./characters/Ritter.tsx";
import {Entdecker} from "./characters/Entdecker.tsx";
import {Novize} from "./characters/Novize.tsx";
import {useScore} from "./useScore.tsx";

export const Character = (props: PageProps) => {

  const score = useScore(props);

  if (score > 120 && props.isAnswerSelected(questions["Teilst du deinen Standort auf der Snapchat Map?"]["Nie"])
    && props.isAnswerSelected(questions["Benutzt du deinen echten Namen in sozialen Medien?"]["Nie"])
    && props.isAnswerSelected(questions["Verlinkst du deinen Standort auf Instagram Posts?"]["Nie"])) return <Magier/> //Magier
  if (score > 120) return <Adelig/>
  if (score > 90) return <Ritter/>
  if (score > 60) return <Ninja/>
  if (score > 30) return <Entdecker/>
  return <Novize/>
}