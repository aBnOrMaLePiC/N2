import { FC } from "react"
import kn1 from "../../resources/json/kanji/n1.json"
import kn2 from "../../resources/json/kanji/n2.json"
import kn3 from "../../resources/json/kanji/n3.json"
import kn4 from "../../resources/json/kanji/n4.json"
import kn5 from "../../resources/json/kanji/n5.json"

type Kanji = {
  character: string
  level: string
  strokes: number
  grade: number
  freq: number
  onyomi: string[]
  kunyomi: string[]
  meanings: string[]
}

const Kanji: FC = () => {
  const kanji: Kanji[] = [
    ...(kn5 as Kanji[]),
    ...(kn4 as Kanji[]),
    ...(kn3 as Kanji[]),
    ...(kn2 as Kanji[]),
    ...(kn1 as Kanji[]),
  ]

  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1 gap-2">
        {kanji.map((item, index) => (
          <div
            key={`${item.character}-${index}`}
            className="flex items-center gap-4 rounded-lg bg-bgray-800 p-3"
          >
            {/* Kanji */}
            <div className="w-16 text-center text-5xl">
              {item.character}
            </div>

            {/* Level */}
            <div className="w-12 text-sm font-bold">
              {item.level}
            </div>

            {/* Readings */}
            <div className="flex-1">
              <div className="text-sm">
                <span className="text-gray-400">On: </span>
                {item.onyomi.join("、")}
              </div>

              <div className="text-sm">
                <span className="text-gray-400">Kun: </span>
                {item.kunyomi.join("、")}
              </div>
            </div>

            {/* Meaning */}
            <div className="w-1/3 text-sm text-gray-300">
              {item.meanings.join(", ")}
            </div>

            {/* Strokes */}
            <div className="w-16 text-center text-xs text-gray-400">
              {item.strokes} strokes
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Kanji