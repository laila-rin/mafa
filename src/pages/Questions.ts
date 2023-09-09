export type Answer = Readonly<{ value: number }>

export const StartValue = Symbol("StartValue");

export type Questions = {
  [key: string]: Readonly<{ [StartValue]: number, readonly [T: string]: Answer }>
};


export const questions = {
  "Welche Suchmaschine(n) benutzt du?": {
    [StartValue]: 10,
    "Google": {value: -10},
    "DuckDuckGo": {value: 0},
    "Startpage": {value: 0},
    "Bing": {value: -10},
    "Keine Ahnung": {value: -7},
  },
  "Wie verschickst du Nachrichten?": {
    [StartValue]: 10,
    "WhatsApp": {value: -2},
    "Signal": {value: -0},
    "iMessage": {value: -0},
    "Threema": {value: -0},
    "Snapchat": {value: -4},
    "Instagram": {value: -4},
    "BeReal": {value: -3},
    "SMS": {value: -0},
    "E-Mail": {value: -0},
    "TikTok": {value: -7},
    "Andere": {value: -0},
  },
  "Wie häufig löscht du deinen Browser-Cache?": {
    [StartValue]: 0,
    "Oft": {value: 10},
    "Manchmal": {value: 7},
    "Was ist das?": {value: 2},
  },
  "Hast du die Ortungsfunktion in deinem Handy eingeschalten?": {
    [StartValue]: 0,
    "Ja": {value: 3},
    "Nein": {value: 10},
    "Sowas gibt es?": {value: 0},
  },
  "Du gehst auf eine Webseite und wirst nach Cookies gefragt - was machst du?": {
    [StartValue]: 0,
    "Akzeptieren und schnell weiter.": {value: 0},
    "Falls ein 'nur essenzielle Cookies' angezeigt wird, dann nehme ich den. Sonst einfach akzeptieren.": {value: 6},
    "Immer anpassen und so wenig wie möglich akzeptieren. Am besten alle ablehnen!": {value: 10},
  },
  "Teilst du deinen Standort auf der Snapchat Map?": {
    [StartValue]: 0,
    "Immer": {value: 0},
    "Manchmal": {value: 5},
    "Nie": {value: 10},
    "Ich nutze kein Snapchat": {value: 10},
  },
  "Benutzt du deinen echten Namen in sozialen Medien?": {
    [StartValue]: 0,
    "Klar, bin ja ich": {value: 0},
    "Nur meinen Vornamen": {value: 9},
    "Manchmal": {value: 5},
    "Nie": {value: 10},
  },
  "Sei ehrlich - benutzt du überall das gleiche Passwort?": {
    [StartValue]: 0,
    "Ja, immer das gleiche.": {value: 0},
    "Ich habe ein paar verschiedene.": {value: 5},
    "Ich denke mir immer neue aus.": {value: 10},
    "Ich benutze einen Passwortmanager.": {value: 10},
  },
  "Wie viele der Personen, die dir auf Instagram, Snapchat und anderen Medien folgen, kennst du persönlich?": {
    [StartValue]: 0,
    "Alle": {value: 10},
    "Die meisten": {value: 8},
    "Fast niemanden": {value: 0},
    "Ich nutze keine sozialen Medien.": {value: 10},
  },
  "Benutzt du Smart-Home-Geräte, wie zum Beispiel Alexa?": {
    [StartValue]: 0,
    "Ja": {value: 3},
    "Nein": {value: 10},
  },
  "Postest du Bilder von dir selbst oder deinen Freunden, auf denen man dein/eure Gesichter sieht?": {
    [StartValue]: 0,
    "Ja": {value: 0},
    "Nein": {value: 10},
  },
  "Klickst du auf die Werbung, die dir auf Instagram, Tiktok oder anderen sozialen Medien angezeigt wird?": {
    [StartValue]: 0,
    "Oft": {value: 0},
    "Nie": {value: 10},
    "Manchmal": {value: 5},
  },
  "Verlinkst du deinen Standort auf Instagram Posts?": {
    [StartValue]: 0,
    "Immer": {value: 0},
    "Manchmal, wenn ich an coolen Orten bin": {value: 5},
    "Nie": {value: 10},
    "Ich nutze kein Instagram": {value: 10},
  },
} as const satisfies Questions;


export type QuestionName = keyof typeof questions;

export const questionNames: QuestionName[] = [
  "Welche Suchmaschine(n) benutzt du?",
  "Wie verschickst du Nachrichten?",
  "Wie häufig löscht du deinen Browser-Cache?",
  "Hast du die Ortungsfunktion in deinem Handy eingeschalten?",
  "Du gehst auf eine Webseite und wirst nach Cookies gefragt - was machst du?",
  "Teilst du deinen Standort auf der Snapchat Map?",
  "Benutzt du deinen echten Namen in sozialen Medien?",
  "Sei ehrlich - benutzt du überall das gleiche Passwort?",
  "Wie viele der Personen, die dir auf Instagram, Snapchat und anderen Medien folgen, kennst du persönlich?",
  "Benutzt du Smart-Home-Geräte, wie zum Beispiel Alexa?",
  "Postest du Bilder von dir selbst oder deinen Freunden, auf denen man dein/eure Gesichter sieht?",
  "Klickst du auf die Werbung, die dir auf Instagram, Tiktok oder anderen sozialen Medien angezeigt wird?",
  "Verlinkst du deinen Standort auf Instagram Posts?",
];

export function getAnswers<T extends QuestionName>(question: T): [string, Questions[string][string]][] {
  return Object.entries(questions[question]) as never;
}
