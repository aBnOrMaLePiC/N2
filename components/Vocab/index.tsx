import React, { FC } from "react"

import vn1 from "../../resources/json/vocab/n1.json"
import vn2 from "../../resources/json/vocab/n2.json"
import vn3 from "../../resources/json/vocab/n3.json"
import vn4 from "../../resources/json/vocab/n4.json"
import vn5 from "../../resources/json/vocab/n5.json"

type Example = {
  ja: string
  en: string
}

type VocabType = {
  word: string
  reading: string
  meanings: string[]
  level: string
  examples: Example[]
}

const Vocab: FC = () => {
  const vocab: VocabType[] = [
    ...(vn5 as VocabType[]),
    ...(vn4 as VocabType[]),
    ...(vn3 as VocabType[]),
    ...(vn2 as VocabType[]),
    ...(vn1 as VocabType[]),
  ]

  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-2">
        {vocab.map((item, index) => (
          <details
            key={`${item.word}-${item.reading}-${index}`}
            className="rounded-lg bg-bgray-800"
          >
            <summary className="cursor-pointer list-none p-4">
              <div className="flex items-center gap-4">
                {/* Word */}
                <div className="w-32 shrink-0 text-2xl font-bold">
                  {item.word}
                </div>

                {/* Reading */}
                <div className="w-36 shrink-0 text-gray-400">
                  {item.reading}
                </div>

                {/* Meaning */}
                <div className="flex-1 text-gray-200">
                  {item.meanings.join(", ")}
                </div>

                {/* Level */}
                <div className="w-12 shrink-0 text-center text-xs font-bold text-gray-400">
                  {item.level}
                </div>

                {/* Expand indicator */}
                <div className="text-gray-500">
                  {item.examples?.length > 0 && "＋"}
                </div>
              </div>
            </summary>

            {/* Examples */}
            {item.examples?.length > 0 && (
              <div className="border-t border-gray-700 px-4 pb-4 pt-3">
                <div className="flex flex-col gap-3">
                  {item.examples.map((example, exampleIndex) => (
                    <div
                      key={exampleIndex}
                      className="rounded bg-bgray-900 p-3"
                    >
                      <div className="text-base">
                        {example.ja}
                      </div>

                      <div className="mt-1 text-sm text-gray-400">
                        {example.en}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </details>
        ))}
      </div>
    </div>
  )
}

export default Vocab