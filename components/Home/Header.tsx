import { FC } from 'react'
import { menuType } from "."

type propType = {
  menu: menuType
  setMenu: (menu: menuType) => void
}

const Header: FC<propType> = ({ menu, setMenu }) => {
  return (
    <div className="w-full">

      {/* Menu */}
      <div className="w-full h-12 flex items-center justify-center gap-4">
        <div
          className={`w-4/12 h-full bg-green-500 flex items-center justify-center cursor-pointer ${menu === menuType.kanji ? "border border-green-500 !bg-white text-green-500 font-bold" : ""}`}
          onClick={() => setMenu(menuType.kanji)}
        >
          Kanji
        </div>
        <div
          className={`w-4/12 h-full bg-blue-500 flex items-center justify-center cursor-pointer ${menu === menuType.vocab ? "border border-blue-500 !bg-white text-blue-500 font-bold" : ""}`}
          onClick={() => setMenu(menuType.vocab)}
        >
          Vocab
        </div>
        <div
          className={`w-4/12 h-full bg-purple-500 flex items-center justify-center cursor-pointer ${menu === menuType.grammar ? "border border-purple-500 !bg-white text-purple-500 font-bold" : ""}`}
          onClick={() => setMenu(menuType.grammar)}
        >
          Grammar
        </div>
      </div>
    </div>
  )
}

export default Header