import {PageProps} from "../types.ts";

export const Page01 = (props: PageProps) => {

  return <div className={"flex flex-col"}>

    <div className={"bg-green-400"}>
      Welcher digitale Charakter bist du?
    </div>

    <button onClick={() => props.nextPage()}>
      Next
    </button>
  </div>
}
