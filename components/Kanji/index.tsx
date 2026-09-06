import { FC } from "react"

import kn1 from "../../resources/json/kanji/n1.json"
import kn2 from "../../resources/json/kanji/n2.json"
import kn3 from "../../resources/json/kanji/n3.json"
import kn4 from "../../resources/json/kanji/n4.json"
import kn5 from "../../resources/json/kanji/n5.json"

import vn1 from "../../resources/json/vocab/n1.json"
import vn2 from "../../resources/json/vocab/n2.json"
import vn3 from "../../resources/json/vocab/n3.json"
import vn4 from "../../resources/json/vocab/n4.json"
import vn5 from "../../resources/json/vocab/n5.json"

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

type ExampleType = {
  ja: string
  en: string
}

type VocabType = {
  word: string
  reading: string
  meanings: string[]
  level: string
  examples: ExampleType[]
}

const Kanji: FC = () => {
  const kanji: KanjiType[] = [
    ...(kn5 as KanjiType[]),
    ...(kn4 as KanjiType[]),
    ...(kn3 as KanjiType[]),
    ...(kn2 as KanjiType[]),
    ...(kn1 as KanjiType[]),
  ]

  const vocab: VocabType[] = [
    ...(vn5 as VocabType[]),
    ...(vn4 as VocabType[]),
    ...(vn3 as VocabType[]),
    ...(vn2 as VocabType[]),
    ...(vn1 as VocabType[]),
  ]

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
                        {matchedWords.slice(1).map((word) => (
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