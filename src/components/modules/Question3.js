import React from 'react'

import { LoadQuestion } from './Question1'

function Question3({questions}) {
  return (
    <div>
      {

        questions.map(( question, index ) => {

          return <LoadQuestion question={ question } index={ index + 1 } />

        })

      }
    </div>
  )
}

export default Question3