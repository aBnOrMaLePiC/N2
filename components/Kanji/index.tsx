import { FC } from "react"

import kn1 from "../../resources/kanji/n1.json"
import kn2 from "../../resources/kanji/n2.json"
import kn3 from "../../resources/kanji/n3.json"
import kn4 from "../../resources/kanji/n4.json"
import kn5 from "../../resources/kanji/n5.json"

import vn1 from "../../resources/vocab/n1.json"
import vn2 from "../../resources/vocab/n2.json"
import vn3 from "../../resources/vocab/n3.json"
import vn4 from "../../resources/vocab/n4.json"
import vn5 from "../../resources/vocab/n5.json"
import { VocabType } from "../Vocab"

type KanjiType = {
  character: string
  level: string
  strokes: number
  grade: number
  freq: number
  onyomi: string[]
  kunyomi: string[]
  meanings: string[]
}

type propType = {
  level: boolean[]
}

const Kanji: FC<propType> = ({ level }) => {
  const kanji = [
    ...(level[0] ? kn5 : []),
    ...(level[1] ? kn4 : []),
    ...(level[2] ? kn3 : []),
    ...(level[3] ? kn2 : []),
    ...(level[4] ? kn1 : []),
  ] as KanjiType[]

  const vocab = [...vn5, ...vn4, ...vn3, ...vn2, ...vn1] as VocabType[]

  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-4">
        {kanji.map((item) => {
          const matchedWords = vocab.filter((word) =>
            word.word.includes(item.character)
          )

          return (
            <div
              key={item.character}
              className="rounded-lg bg-bgray-800 p-4"
            >
              {/* Kanji information */}
              <div className="flex items-start gap-4">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-bgray-900 text-5xl">
                  {item.character}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bold">
                      {item.level}
                    </span>

                    <span className="text-sm text-gray-400">
                      {item.strokes} strokes
                    </span>

                    <span className="text-sm text-gray-400">
                      Grade {item.grade}
                    </span>
                  </div>

                  <div className="mt-2">
                    <span className="text-gray-400">
                      On:
                    </span>{" "}
                    {item.onyomi.join("、")}
                  </div>

                  <div className="mt-1">
                    <span className="text-gray-400">
                      Kun:
                    </span>{" "}
                    {item.kunyomi.join("、")}
                  </div>

                  <div className="mt-1 text-gray-300">
                    {item.meanings.join(", ")}
                  </div>
                </div>
              </div>

              {/* Matching vocabulary */}
              {matchedWords.length > 0 && (
                <div className="mt-4 border-t border-gray-700 pt-4">
                  <details>
                    <summary className="cursor-pointer list-none">
                      <div className="flex items-center gap-3">
                        {/* Always visible first word */}
                        <div className="rounded bg-bgray-900 px-3 py-2">
                          <span className="font-bold">
                            {matchedWords[0].word}
                          </span>

                          <span className="ml-2 text-sm text-gray-400">
                            {matchedWords[0].reading}
                          </span>

                          <span className="ml-2 text-sm text-gray-300">
                            — {matchedWords[0].meanings.join(", ")}
                          </span>
                        </div>

                        {/* Expand button */}
                        {matchedWords.length > 1 && (
                          <span className="rounded bg-gray-700 px-3 py-2 text-sm text-gray-300">
                            + {matchedWords.length - 1} more
                          </span>
                        )}
                      </div>
                    </summary>

                    {/* Remaining words */}
                    {matchedWords.length > 1 && (
                      <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                        {matchedWords.map((word) => (
                          <div
                            key={`${word.word}-${word.reading}`}
                            className="rounded bg-bgray-900 p-3"
                          >
                            <div className="text-lg font-bold">
                              {word.word}
                            </div>

                            <div className="text-sm text-gray-400">
                              {word.reading}
                            </div>

                            <div className="mt-1 text-sm">
                              {word.meanings.join(", ")}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </details>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Kanji