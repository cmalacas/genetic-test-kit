import React from 'react'
import { LoadQuestion } from './Question1'

function Question5({questions, audio, play}) {
  return (
    <div>
      {
        questions.map((question, index) => {

          return <LoadQuestion key={ index } question={question} index={ index } play={ play }
          audio={ audio } />

        })
      }
    </div>
  )
}

export default Question5