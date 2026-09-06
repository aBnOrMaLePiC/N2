import React, { FC } from "react"

import gn1 from "../../resources/json/grammar/n1.json"
import gn2 from "../../resources/json/grammar/n2.json"
import gn3 from "../../resources/json/grammar/n3.json"
import gn4 from "../../resources/json/grammar/n4.json"
import gn5 from "../../resources/json/grammar/n5.json"

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

const Grammar: FC = () => {
  const grammar: GrammarType[] = [
    ...(gn5 as GrammarType[]),
    ...(gn4 as GrammarType[]),
    ...(gn3 as GrammarType[]),
    ...(gn2 as GrammarType[]),
    ...(gn1 as GrammarType[]),
  ]

  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-2">
        {grammar.map((item, index) => (
          <details
            key={`${item.pattern}-${index}`}
            className="rounded-lg bg-bgray-800"
          >
            <summary className="cursor-pointer list-none p-4">
              <div className="flex items-center gap-4">
                {/* Pattern */}
                <div className="w-40 shrink-0 text-lg font-bold">
                  {item.pattern}
                </div>

                {/* Meaning */}
                <div className="flex-1 text-gray-200">
                  {item.meaning}
                </div>

                {/* Level */}
                <div className="w-12 shrink-0 text-center text-xs font-bold text-gray-400">
                  {item.level}
                </div>

                {/* Expand indicator */}
                <div className="text-gray-500">
                  {item.examples?.length ? "＋" : ""}
                </div>
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