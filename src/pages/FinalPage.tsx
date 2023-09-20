import {PageProps} from "../types.ts";
import {Character} from "./Character.tsx";

import * as s from "./FinalPage.module.css";
import {questions} from "./Questions.ts";
import {Fragment} from "react";
import {useScore} from "./useScore.tsx";
import {Ranking} from "./characters/Ranking.tsx";

const styles = s as unknown as Record<string, string>;

export const FinalPage = (props: PageProps) => {

  const tipps: string[] = [];

  if (props.isAnswerSelected(questions["Welche Suchmaschine(n) benutzt du?"]["Google"]) || props.isAnswerSelected(questions["Welche Suchmaschine(n) benutzt du?"]["Bing"] || props.isAnswerSelected(questions["Welche Suchmaschine(n) benutzt du?"]["Keine Ahnung"]))) {
    tipps.push("Es ist eine gute Idee, Suchmaschinen wie Startpage oder DuckDuckGo zu verwenden, da sie weniger persönliche Informationen speichern und sicherer für deine Online-Suchen sind.")
  }

  if (props.isAnswerSelected(questions["Wie verschickst du Nachrichten?"]["WhatsApp"]) || props.isAnswerSelected(questions["Wie verschickst du Nachrichten?"]["TikTok"]) || props.isAnswerSelected(questions["Wie verschickst du Nachrichten?"]["Snapchat"]) || props.isAnswerSelected(questions["Wie verschickst du Nachrichten?"]["Instagram"]) || props.isAnswerSelected(questions["Wie verschickst du Nachrichten?"]["BeReal"])) {
    tipps.push("Denke daran, dass Nachrichten auf sozialen Plattformen nicht immer privat sind. Es ist deshalb besser Messenger-Apps zu verwenden, die Ende-zu-Ende-Verschlüsselung anbieten, wie Signal oder Threema.")
  }

  if (props.isAnswerSelected(questions["Wie verschickst du Nachrichten?"]["WhatsApp"])) {
    tipps.push("Viele Messenger Apps speichern nicht nur deine Daten, wie Nachrichten und Bilder, sondern haben sogar ein Recht darauf, sie weiter zu benutzen! Das heisst das peinliche Bild, das du deiner Besten Freundin oder deinem besten Freund auf WhatsApp geschickt hast, das könnte WhatsApp für Plakate nuten oder anderweitig verteilen und du könntest nichts dagegen tun. Manche Firmen haben die Nutzung von WhatsApp für Ihre Mitarbeiter deshalb sogar verboten. Und wusstest du, dass das Mindestalter zur Nutzung von WhatsApp mittlerweile bei 16 Jahren ist?")
  }

  if (props.isAnswerSelected(questions["Wie häufig löscht du deinen Browser-Cache?"]["Was ist das?"])) {
    tipps.push("Der Browser-Cache speichert Daten von besuchten Websites. Es ist ratsam, ihn gelegentlich zu löschen, um Speicherplatz freizugeben und deine Privatsphäre zu schützen. Du kannst dies in den Browsereinstellungen tun.")
  }

  if (props.isAnswerSelected(questions["Hast du die Ortungsfunktion in deinem Handy eingeschalten?"]["Ja"]) || props.isAnswerSelected(questions["Hast du die Ortungsfunktion in deinem Handy eingeschalten?"]["Sowas gibt es?"])) {
    tipps.push("Die Ortungsfunktion in deinem Handy kann nützlich sein, um dein Handy zu finden wenn du es mal verlegt hast - aber es ist wichtig, sie nicht immer eingeschaltet zu lassen, um deine Privatsphäre zu schützen. Du solltest sie nur bei Bedarf aktivieren.")
  }

  if (props.isAnswerSelected(questions["Du gehst auf eine Webseite und wirst nach Cookies gefragt - was machst du?"]["Akzeptieren und schnell weiter."]) || props.isAnswerSelected(questions["Du gehst auf eine Webseite und wirst nach Cookies gefragt - was machst du?"]["Falls ein 'nur essenzielle Cookies' angezeigt wird, dann nehme ich den. Sonst einfach akzeptieren."])) {
    tipps.push("Es ist klug, Cookies auf Webseiten bewusst zu verwalten, um deine Privatsphäre zu schützen. Wähle nur die essenziellen Cookies aus, die du wirklich brauchst, und lehne nicht notwendige Cookies ab.")
  }

  if (props.isAnswerSelected(questions["Teilst du deinen Standort auf der Snapchat Map?"]["Immer"]) || props.isAnswerSelected(questions["Teilst du deinen Standort auf der Snapchat Map?"]["Manchmal"]) || props.isAnswerSelected(questions["Verlinkst du deinen Standort auf Instagram Posts?"]["Immer"]) || props.isAnswerSelected(questions["Verlinkst du deinen Standort auf Instagram Posts?"]["Manchmal, wenn ich an coolen Orten bin"])) {
    tipps.push("Es ist verlockend, deine Standorte auf Instagram oder in anderen sozialen Medien zu teilen, aber denke daran, dass es gefährlich sein kann, dein Zuhause oder andere persönliche Orte öffentlich preiszugeben. Schütze deine Privatsphäre, indem du vermeidest, sensiblen Orten eine genaue Markierung zu geben, um deine Sicherheit und die deiner Familie zu gewährleisten.")
  }

  if (props.isAnswerSelected(questions["Teilst du deinen Standort auf der Snapchat Map?"]["Immer"]) || props.isAnswerSelected(questions["Benutzt du deinen echten Namen in sozialen Medien?"]["Manchmal"]) || props.isAnswerSelected(questions["Benutzt du deinen echten Namen in sozialen Medien?"]["Klar, bin ja ich"])) {
    tipps.push("Die Verwendung deines echten Namens in deinen online Profilen kann es leichter machen, dich online zu finden - das gilt aber leider nicht nur für deine Freunde, sondern auch für Fremde. Verwende vielleicht nur deinen Vornamen, um dich und deine Identität zu schützen.")
  }

  if (props.isAnswerSelected(questions["Sei ehrlich - benutzt du überall das gleiche Passwort?"]["Ja, immer das gleiche."]) || props.isAnswerSelected(questions["Sei ehrlich - benutzt du überall das gleiche Passwort?"]["Ich denke mir immer neue aus."]) || props.isAnswerSelected(questions["Sei ehrlich - benutzt du überall das gleiche Passwort?"]["Ich habe ein paar verschiedene."])) {
    tipps.push("Es ist besser, jedes Mal ein neues einzigartiges Passwort zu verwenden. Das hilft, deine Accounts sicherer zu machen. Du könntest einen Passwortmanager verwenden, um dir dabei zu helfen, alle Passwörter sicher zu organisieren.")
  }

  if (props.isAnswerSelected(questions["Wie viele der Personen, die dir auf Instagram, Snapchat und anderen Medien folgen, kennst du persönlich?"]["Fast niemanden"]) || props.isAnswerSelected(questions["Wie viele der Personen, die dir auf Instagram, Snapchat und anderen Medien folgen, kennst du persönlich?"]["Die meisten"])) {
    tipps.push("Es ist wichtig, vorsichtig zu sein und nur Personen auf Instagram, Snapchat und anderen sozialen Medien zu akzeptieren, die du wirklich kennst. Nicht alle, die dir folgen, haben gute Absichten. Schütze deine Online-Privatsphäre, indem du nur echte Freunde und Bekannte in deinen sozialen Netzwerken akzeptierst.")
  }

  if (props.isAnswerSelected(questions["Benutzt du Smart-Home-Geräte, wie zum Beispiel Alexa?"]["Ja"])) {
    tipps.push("Klar, Smart Home Geräte wie Alexa sind praktisch. Aber die hören oft mehr mit, als man denkt!Wenn du über private Sachen redest, denk daran, sie ab und zu auszuschalten. Das schützt deine Privatsphäre.")
  }

  if (props.isAnswerSelected(questions["Postest du Bilder von dir selbst oder deinen Freunden, auf denen man dein/eure Gesichter sieht?"]["Ja"])) {
    tipps.push("Natürlich ist es toll, Erinnerungen und Bilder zu teilen! Aber sei vorsichtig. Stell sicher, dass du deine Kontoeinstellungen so einstellst, dass nur enge Freunde deine Fotos sehen können. So hältst du deine Bilder sicher und teilst sie nur mit den Menschen, die dir wichtig sind.")
  }

  if (props.isAnswerSelected(questions["Klickst du auf die Werbung, die dir auf Instagram, Tiktok oder anderen sozialen Medien angezeigt wird?"]["Manchmal"]) || props.isAnswerSelected(questions["Klickst du auf die Werbung, die dir auf Instagram, Tiktok oder anderen sozialen Medien angezeigt wird?"]["Oft"])) {
    tipps.push("Manchmal können Werbeanzeigen (auch auf Instagram, Tiktok oder Snapchat) gefälscht sein oder auf unsichere Seiten führen. Denk daran, aufmerksam zu bleiben und nur auf Anzeigen zu klicken, wenn du sicher bist, dass sie echt sind. So schützt du dich vor möglichen Betrügereien oder unerwünschten Folgen.")
  }

  // character setzen
  const score = useScore(props);
  let character = "Noviz*in";

  if (score > 120 && props.isAnswerSelected(questions["Teilst du deinen Standort auf der Snapchat Map?"]["Nie"])
    && props.isAnswerSelected(questions["Benutzt du deinen echten Namen in sozialen Medien?"]["Nie"])
    && props.isAnswerSelected(questions["Verlinkst du deinen Standort auf Instagram Posts?"]["Nie"])) character = "Magier*in"
  else if (score > 120) character = "Adelige*r"
  else if (score > 90) character = "Ritter*in"
  else if (score > 60) character = "Ninja"
  else if (score > 30) character = "Entdecker*in"

  let rank: number = 0;
  if (character == "Adeliger") rank = 5
  else if (character == "Ritter*in") rank = 4
  else if (character == "Ninja") rank = 3
  else if (character == "Entdecker*in") rank = 2
  else if (character == "Noviz*in") rank = 1
  else if (character == "Magier*in") rank = 6

  return <div className={"flex flex-col pt-20"}>
    <Character {...props} />

    {rank !== 6 &&
        <div className={styles["tipps"] + ' p-8'}>Als {character} bist du auf Ranglistenplatz {rank}/5:</div>}
    {rank === 6 &&
        <div className={styles["tipps"] + ' p-8'}>Als {character} hast du den geheimen Charakter freigeschalten!:</div>}

    <Ranking/>

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
          title: 'Detektivsaga im Königreich der Daten',
          text: 'Ich bin ein*e ' + character + '! Welcher TechTale Charakter bist du? Wie gut kennst du dich mit Datenschutz aus? Mache jetzt das Quiz!',
          url: 'https://laila-rin.github.io/mafa/',
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