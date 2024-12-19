import React, {useEffect} from 'react'

import { LoadQuestion } from './Question1';
const Question2 = ({questions, play, audio}) =>{  


  return (
    <div>

      {

        questions.map(( question, index ) => {

          return <LoadQuestion key={ index } question={ question } index={ index + 1 } play={ play } audio={ audio } />

        })

      }

    </div>
  )
}

export default Question2