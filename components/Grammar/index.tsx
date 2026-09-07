import React, { FC } from "react"

import vn1 from "../../resources/grammar/n1.json"
import vn2 from "../../resources/grammar/n2.json"
import vn3 from "../../resources/grammar/n3.json"
import vn4 from "../../resources/grammar/n4.json"
import vn5 from "../../resources/grammar/n5.json"

type Example = {
  ja: string
  en: string
}

type GrammarType = {
  pattern: string
  level: string
  meaning: string
  formation: string
  examples?: Example[]
  tags?: string[]
}

type propType = {
  level: boolean[]
}

const Grammar: FC<propType> = ({ level }) => {
  const grammar = [
    ...(level[0] ? vn5 : []),
    ...(level[1] ? vn4 : []),
    ...(level[2] ? vn3 : []),
    ...(level[3] ? vn2 : []),
    ...(level[4] ? vn1 : []),
  ] as GrammarType[]

  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-2">
        {grammar.map((item, index) => (
          <details
            key={`${item.pattern}-${index}`}
            className="rounded-lg bg-bgray-800"
          >
            <summary className="cursor-pointer list-none p-4">
              <div className="flex items-center">
                <div className="w-full flex flex-col">
                  {/* Pattern */}
                  <div className="w-full shrink-0 text-lg font-bold">
                    {item.pattern}
                  </div>

                  {/* Meaning */}
                  <div className="text-gray-200">
                    {item.meaning}
                  </div>

                  {/* Level */}
                  <div className="text-xs font-bold text-gray-400">
                    {item.level}
                  </div>
                </div>

                {/* Expand indicator */}
                {item.examples?.length && (
                  <div className="text-gray-500">
                    ＋
                  </div>
                )}
              </div>
            </summary>

            {/* Details */}
            <div className="border-t border-gray-700 px-4 pb-4 pt-3">
              {/* Formation */}
              <div className="mb-4">
                <div className="mb-1 text-sm font-bold text-gray-400">
                  Formation
                </div>

                <div className="rounded bg-bgray-900 p-3">
                  {item.formation}
                </div>
              </div>

              {/* Tags */}
              {item.tags?.length ? (
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-700 px-3 py-1 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              {/* Examples */}
              {item.examples?.length ? (
                <div>
                  <div className="mb-2 text-sm font-bold text-gray-400">
                    Examples
                  </div>

                  <div className="flex flex-col gap-2">
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
              ) : null}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}

export default Grammar