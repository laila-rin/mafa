export type Answer = Readonly<{ value: number }>

const StartValue = Symbol("StartValue");

export type Questions = {
  [key: string]: Readonly<{ [StartValue]: number, readonly [T: string]: Answer }>
};


export const questions = {
  "Welche Suchmaschine(n) benutzt du?": {
    [StartValue]: 10,
    "Google": {
      value: -5,
    },
    "DuckDuckGo": {
      value: 0
    },
    "Startpage": {
      value: 0
    },
    "Safari": {
      value: 0
    },
    "Bing": {
      value: 0
    },
    "Keine Ahnung": {
      value: 0
    },
  },
  "Wie verschickst du Nachrichten?": {
    [StartValue]: 0,
    "WhatsApp": {value: 2},
    "Signal": {value: 10},
    "iMessage": {value: 2},
    "Threema": {value: 2},
    "Snapchat": {value: 2},
    "Instagram": {value: 2},
    "BeReal": {value: 2},
    "SMS": {value: 2},
    "E-Mail": {value: 2},
    "Tiktok": {value: 2},
    "Andere": {value: 2},
  },
  "Wie häufig löscht du deinen Browser-Cache?": {
    [StartValue]: 0,
    "Oft": {value: 10},
    "Manchmal": {value: 7},
    "Was ist das?": {value: 2},
  },
  "Hast du die Ortungsfunktion in deinem Handy eingeschalten?": {
    [StartValue]: 0,
    "Ja": {value: 2},
    "Nein": {value: 10},
    "Sowas gibt es?": {value: 0},
  },
  "Du gehst auf eine Webseite und wirst nach Cookies gefragt - was machst du?": {
    [StartValue]: 0,
    "Akzeptieren und schnell weiter.": {value: 0},
    "Falls ein 'nur essenzielle Cookies' angezeigt wird, dann nehme ich den. Sonst einfach akzeptieren.": {value: 5},
    "Immer anpassen und so wenig wie möglich akzeptieren. Am besten alle ablehnen!": {value: 10},
  },
  "Teilst du deinen Standort auf der Snapchat Map?": {
    [StartValue]: 0,
    "Immer": {value: 0},
    "Manchmal": {value: 5},
    "Nie": {value: 10},
    "Ich nutze kein Snapchat": {value: 10},
  }
} as const satisfies Questions;


export type QuestionName = keyof typeof questions;

export const questionNames: QuestionName[] = [
  "Welche Suchmaschine(n) benutzt du?",
  "Wie verschickst du Nachrichten?",
  "Wie häufig löscht du deinen Browser-Cache?",
  "Hast du die Ortungsfunktion in deinem Handy eingeschalten?",
  "Du gehst auf eine Webseite und wirst nach Cookies gefragt - was machst du?",
  "Teilst du deinen Standort auf der Snapchat Map?",
];

export function getAnswers<T extends QuestionName>(question: T): [string, Questions[string][string]][] {
  return Object.entries(questions[question]) as never;
}
