import React from 'react'
import { LoadQuestion } from './Question1'

const Question4 = ({questions}) => {

  return (
    <div>
      {
        questions.map((question, index) => {

          console.log('question', question);

          return <LoadQuestion question={ question } index={ index } />

        })
      }
    </div>
  )
}

export default Question4