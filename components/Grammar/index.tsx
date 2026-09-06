import React from 'react'
import gn1 from "../../resources/json/grammar/n1.json"
import gn2 from "../../resources/json/grammar/n2.json"
import gn3 from "../../resources/json/grammar/n3.json"
import gn4 from "../../resources/json/grammar/n4.json"
import gn5 from "../../resources/json/grammar/n5.json"

const index = () => {
  const grammar = {
    n1: gn1,
    n2: gn2,
    n3: gn3,
    n4: gn4,
    n5: gn5
  }

  return (
    <div>
      Grammar

    </div>
  )
}

export default index