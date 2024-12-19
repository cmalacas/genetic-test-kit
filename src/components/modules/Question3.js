import React from 'react'

import { LoadQuestion } from './Question1'

function Question3({questions, play, audio}) {
  return (
    <div>
      {

        questions.map(( question, index ) => {

          return <LoadQuestion key={ index } question={ question } index={ index + 1 }play={ play }
          audio={ audio } />

        })

      }
    </div>
  )
}

export default Question3