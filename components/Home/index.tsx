import HeadTitle from "@/capsules/HeadTitle"
import { FC, useState } from 'react'
import Header from "./Header"
import Vocab from "../Vocab"
import Kanji from "../Kanji"
import Grammar from "../Grammar"

export const enum menuType {
  kanji = "kanji",
  vocab = "vocab",
  grammar = "grammar"
}

const Home: FC = () => {
  const [menu, setMenu] = useState<menuType>(menuType.kanji)

  return (
    <div className="bg-bgray-900 text-white text-base min-h-screen overflow-auto">
      {/* Tab title */}
      <HeadTitle>
        N2
      </HeadTitle>

      <Header menu={menu} setMenu={setMenu} />

      <div>
        {menu === menuType.kanji && (
          <div className="w-full">
            <Kanji />
          </div>
        )}
        {menu === menuType.vocab && (
          <div className="w-full">
            <Vocab />
          </div>
        )}
        {menu === menuType.grammar && (
          <div className="w-full">
            <Grammar />
          </div>
        )}
      </div>

    </div>
  )
}

export default Home