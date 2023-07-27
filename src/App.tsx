import {ReactNode, useState} from 'react'
import {Profile} from "./pages/Profile.tsx";
import {Page01} from "./pages/Page01.tsx";
import {Character} from "./pages/Character.tsx";
import {PageProps} from "./types.ts";

const pages: ((prop: PageProps) => ReactNode)[] = [
  Profile,
  Page01,
  Character,
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const Page = pages[currentPage];

  return (
    <div className={"max-w-3xl min-h-screen m-auto flex flex-col items-stretch [&>*]:w-full"}>
      <Page changeScore={(delta) => console.log(delta)}
            changeProfile={(profile) => console.log(profile)}
            nextPage={() => setCurrentPage(currentPage + 1)}
      />
    </div>
  )
}

export default App
