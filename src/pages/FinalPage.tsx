import {PageProps} from "../types.ts";
import {Character} from "./Character.tsx";

import * as s from "./FinalPage.module.css";
import {questions} from "./Questions.ts";

const styles = s as unknown as Record<string, string>;

export const FinalPage = (props: PageProps) => {

  const tipps: string[] = [];

  if (props.isAnswerSelected(questions["Welche Suchmaschine(n) benutzt du?"]["Google"])) {
    tipps.push("Haha schlecht.")
  }

  return <div className={"flex flex-col pt-8"}>
    <Character {...props} />

    <div className={styles["tipps"] + ' p-8'}>Deine Tipps:</div>

    {tipps.map((tipp) => (<>
        <svg viewBox="0 0 375 149" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M375 0L375 149H0L375 0Z" fill="#DAEBDA"/>
        </svg>
        <div className={'bg-[#DAEBDA] text-xl p-8'}>
          {tipp}
        </div>
        <svg viewBox="0 0 375 149" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.10352e-05 149L0 0H375L6.10352e-05 149Z" fill="#DAEBDA"/>
        </svg>
      </>
    ))}

    <div className={"flex justify-center py-8"} onClick={() => {
      window.scrollTo({top: 0, behavior: "instant"})
      window.location.reload();
    }}>
      <svg width="74" height="72" viewBox="0 0 74 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="21.5" cy="32.5" r="21.5" fill="#FFE4C5"/>
        <circle cx="28" cy="46" r="26" fill="#FFD29E"/>
        <circle cx="41.5" cy="32.5" r="32.5" fill="#ED8205"/>
        <line x1="30.2681" y1="20.9648" x2="53.0362" y2="43.7329" stroke="#F3F3F3" strokeWidth="7.5"
              strokeLinecap="round"/>
        <line x1="29.9648" y1="43.7319" x2="52.7329" y2="20.9638" stroke="#F3F3F3" strokeWidth="7.5"
              strokeLinecap="round"/>
      </svg>
    </div>
  </div>

}