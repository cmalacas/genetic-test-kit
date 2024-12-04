import React from 'react'
import { LoadQuestion } from './Question1'

function Question5({questions}) {
  return (
    <div>
      {
        questions.map((question, index) => {

          return <LoadQuestion question={question} index={ index } />

        })
      }
    </div>
  )
}

export default Question5