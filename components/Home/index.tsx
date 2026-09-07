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
  const [level, setLevel] = useState<boolean[]>([true, true, true, true, false]) // [N5, N4, N3, N2, N1]

  return (
    <div className="relative pt-36 bg-bgray-900 text-white text-base min-h-screen overflow-auto">
      {/* Tab title */}
      <HeadTitle>
        N2
      </HeadTitle>

      <Header
        menu={menu}
        setMenu={setMenu}
        level={level}
        setLevel={setLevel}
      />

      <div>
        {menu === menuType.kanji && (
          <div className="w-full">
            <Kanji level={level} />
          </div>
        )}
        {menu === menuType.vocab && (
          <div className="w-full">
            <Vocab level={level} />
          </div>
        )}
        {menu === menuType.grammar && (
          <div className="w-full">
            <Grammar level={level} />
          </div>
        )}
      </div>

    </div>
  )
}

export default Home