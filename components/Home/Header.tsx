import { FC } from 'react'
import { menuType } from "."

type propType = {
  menu: menuType
  setMenu: (menu: menuType) => void
  level: boolean[]
  setLevel: (level: boolean[]) => void
}

const Header: FC<propType> = ({ menu, setMenu, level, setLevel }) => {
  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newLevel = [...level]
    newLevel[index] = e.target.checked
    console.log(newLevel)
    setLevel(newLevel)
  }

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 bg-gray-800 p-4">
      {/* Menu */}
      <div className="w-full h-12 flex items-center justify-center gap-4">
        <div
          className={`w-4/12 h-full flex items-center justify-center cursor-pointer font-bold ${menu === menuType.kanji ? "border border-white !bg-white text-gray-800" : "bg-bgray-700 text-gray-400"}`}
          onClick={() => setMenu(menuType.kanji)}
        >
          Kanji
        </div>
        <div
          className={`w-4/12 h-full flex items-center justify-center cursor-pointer font-bold ${menu === menuType.vocab ? "border border-white !bg-white text-gray-800" : "bg-bgray-700 text-gray-400"}`}
          onClick={() => setMenu(menuType.vocab)}
        >
          Vocab
        </div>
        <div
          className={`w-4/12 h-full flex items-center justify-center cursor-pointer font-bold ${menu === menuType.grammar ? "border border-white !bg-white text-gray-800" : "bg-bgray-700 text-gray-400"}`}
          onClick={() => setMenu(menuType.grammar)}
        >
          Grammar
        </div>
      </div>

      {/* Level */}
      <div className="w-full h-12 mt-4 flex items-center justify-center gap-4">
        {level.map((item, index) => (
          <div
            className="cursor-pointer"
            key={index}
          >
            <input
              className="sr-only"
              id={`level-${index}`}
              type="checkbox"
              checked={item}
              onChange={(e) => onCheckboxChange(e, index)}
            />
            <label
              htmlFor={`level-${index}`}
              className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg border ${item ? "bg-white text-gray-800" : "bg-bgray-700 text-gray-400"} text-lg font-bold`}
            >
              {`N${5 - index}`}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Header