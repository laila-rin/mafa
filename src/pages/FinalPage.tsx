import {PageProps} from "../types.ts";
import {Character} from "./Character.tsx";

import * as s from "./FinalPage.module.css";
import {questions} from "./Questions.ts";
import {Fragment} from "react";

const styles = s as unknown as Record<string, string>;

export const FinalPage = (props: PageProps) => {

  const tipps: string[] = [];

  if (props.isAnswerSelected(questions["Welche Suchmaschine(n) benutzt du?"]["Google"])) {
    tipps.push("Haha schlecht.")
  }

  return <div className={"flex flex-col pt-8"}>
    <Character {...props} />

    <div className={styles["tipps"] + ' p-8'}>Deine Tipps:</div>

    {tipps.map((tipp) => (<Fragment key={tipp}>
        <svg viewBox="0 0 375 149" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M375 0L375 149H0L375 0Z" fill="#DAEBDA"/>
        </svg>
        <div className={'bg-[#DAEBDA] text-xl p-8'}>
          {tipp}
        </div>
        <svg viewBox="0 0 375 149" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.10352e-05 149L0 0H375L6.10352e-05 149Z" fill="#DAEBDA"/>
        </svg>
      </Fragment>
    ))}

    <div className={"flex justify-center py-8 gap-6"}>
      <svg onClick={() => {
        window.scrollTo({top: 0, behavior: "instant"})
        window.location.reload();
      }} width="74" height="72" viewBox="0 0 74 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="21.5" cy="32.5" r="21.5" fill="#FFE4C5"/>
        <circle cx="28" cy="46" r="26" fill="#FFD29E"/>
        <circle cx="41.5" cy="32.5" r="32.5" fill="#ED8205"/>
        <line x1="30.2681" y1="20.9648" x2="53.0362" y2="43.7329" stroke="#F3F3F3" strokeWidth="7.5"
              strokeLinecap="round"/>
        <line x1="29.9648" y1="43.7319" x2="52.7329" y2="20.9638" stroke="#F3F3F3" strokeWidth="7.5"
              strokeLinecap="round"/>
      </svg>

      <svg onClick={() => {
        const shareData = {
          title: 'Deine Online Odysse',
          text: 'Wie gut kennst du dich mit Datenschutz aus? Welcher TechTale Charakter bist du? Mache jetzt den Selbsttest!',
          url: 'https://github.com/laila-rin/mafa',
        }
        navigator.share(shareData).then(() => {
          console.log('shared successfully')
        }).catch(() => {
          console.error('sharing errored')
        })
      }} width="74" height="72" viewBox="0 0 74 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="21.5" cy="32.5" r="21.5" fill="#FFE4C5"/>
        <circle cx="28" cy="46" r="26" fill="#FFD29E"/>
        <circle cx="41.5" cy="32.5" r="32.5" fill="#ED8205"/>
        <circle cx="53" cy="20" r="7" fill="#F3F3F3"/>
        <circle cx="53" cy="20" r="7" fill="#F3F3F3"/>
        <circle cx="53" cy="20" r="7" fill="#F3F3F3"/>
        <circle cx="29" cy="31" r="7" fill="#F3F3F3"/>
        <circle cx="29" cy="31" r="7" fill="#F3F3F3"/>
        <circle cx="29" cy="31" r="7" fill="#F3F3F3"/>
        <path
          d="M58 45C58 48.866 54.866 52 51 52C47.134 52 44 48.866 44 45C44 41.134 47.134 38 51 38C54.866 38 58 41.134 58 45Z"
          fill="#F3F3F3"/>
        <path
          d="M58 45C58 48.866 54.866 52 51 52C47.134 52 44 48.866 44 45C44 41.134 47.134 38 51 38C54.866 38 58 41.134 58 45Z"
          fill="#F3F3F3"/>
        <path
          d="M58 45C58 48.866 54.866 52 51 52C47.134 52 44 48.866 44 45C44 41.134 47.134 38 51 38C54.866 38 58 41.134 58 45Z"
          fill="#F3F3F3"/>
        <line x1="33.4583" y1="34.2649" x2="50.2317" y2="45.1577" stroke="#F3F3F3" strokeWidth="5"
              strokeLinecap="round"/>
        <line x1="51.448" y1="20.3223" x2="33.3218" y2="28.7747" stroke="#F3F3F3" strokeWidth="5"
              strokeLinecap="round"/>
      </svg>

    </div>
  </div>

}