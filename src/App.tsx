import {ReactNode, useEffect, useState} from 'react'
import {StartPage} from "./pages/StartPage.tsx";
import {PageProps} from "./types.ts";
import {Question} from "./pages/Question.tsx";
import {Answer, questionNames, questions} from "./pages/Questions.ts";
import {FinalPage} from "./pages/FinalPage.tsx";
import {useScore} from "./pages/useScore.tsx";

const pages: ((prop: PageProps) => ReactNode)[] = [
  StartPage,
  ...questionNames.map((question) => (props: PageProps) => <Question
    question={question} {...props} />),
  FinalPage
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);

  const Page = pages[currentPage];

  return (
    <div className={"max-w-[512px] min-h-screen m-auto flex flex-col items-stretch [&>*]:w-full"}>
      <Page
        nextPage={() => {
          setCurrentPage(currentPage + 1)
          window.scrollTo({top: 0})
        }}
        toggleAnswer={(a) => setSelectedAnswers((prev) => {
          if (prev.includes(a)) {
            return prev.filter(x => x !== a);
          } else {
            return prev.concat(a);
          }
        })}
        isAnswerSelected={(a) => selectedAnswers.includes(a)}
        isQuestionAnswered={(q) => Object.values(questions[q]).some(a => selectedAnswers.includes(a as never))}
      />
    </div>
  )
}

export default App
