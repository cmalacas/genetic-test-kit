import React from 'react'
import { LoadQuestion } from './Question1'

const Question4 = ({questions, play, audio}) => {

  return (
    <div>
      {
        questions.map((question, index) => {

          return <LoadQuestion key={ index } question={ question } index={ index }play={ play }
          audio={ audio } />

        })
      }
    </div>
  )
}

export default Question4