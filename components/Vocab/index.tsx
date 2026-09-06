import React from 'react'
import vn1 from "../../resources/json/vocab/n1.json"
import vn2 from "../../resources/json/vocab/n2.json"
import vn3 from "../../resources/json/vocab/n3.json"
import vn4 from "../../resources/json/vocab/n4.json"
import vn5 from "../../resources/json/vocab/n5.json"

const index = () => {
  const vocab = {
    n1: vn1,
    n2: vn2,
    n3: vn3,
    n4: vn4,
    n5: vn5,
  }

  return (
    <div>
      Vocab

    </div>
  )
}

export default index