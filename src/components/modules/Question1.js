import React, {useState, useEffect, useMemo} from 'react'
import { agentImg, profile } from '../../assets/images'
import { notification } from '../../assets/sound';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';

const  Question1 = ({agent}) => {

  const [answer1, setAnswer1] = useState('');

  const [play, setPlay] = useState(false);

  const audio = useMemo(() => new Audio( notification ) , [] )  

  const _questions = [
      {
        text: 'Hi 👋', 
        delay: 1000,
        wait: 1000
      },
      {
        text: `I'm ${ agent } from DNA Life.`,
        delay: 1000,
        wait: 2000,
      }, 
      {
        text: 'Want to find out if you qualify for a No Cost DNA Genetic Test Kit? Tap Yes!  😊 ',
        delay: 1000,
        wait: 4000
      },      
      {
        text: <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={ () => { setAnswer1('Yes'); setPlay( true )} }>Yes</button>,
        delay: 1000,
        wait: 5000
      }
  ];

  const _questions2 = [
    {
      text: 'Okay, let me ask you a couple questions.', 
      delay: 500,
      wait: 2000
    },
    {
      text: 'What is your age range?', 
      delay: 2000,
      wait: 4000
    },
    {
      text: <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => setAnswer2('64-70')}>64-70</button>, 
      delay: 2000,
      wait: 6000
    },
    {
      text: <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => setAnswer2('71-84')}>71-84</button>, 
      delay: 2000,
      wait: 8000
    },
    {
      text: <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => setAnswer2('85-100')}>85-100</button>,
      delay: 2000,
      wait: 10000
    }
  ];

  const _questions3 = [
    {
      text: 'Are you receiving Medicare?', 
      delay: 1000,
      wait: 2000
    },
    {
      text: <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => setAnswer3('Yes')}>Yes</button>, 
      delay: 1000,
      wait: 4000
    },
    {
      text: <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => setAnswer3('No')}>No</button>, 
      delay: 1000,
      wait: 6000
    },
    {
      text: <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => setAnswer3('Unsure')}>Unsure</button>,
      delay: 1000,
      wait: 8000
    }
  ];

  const _questions4 = [
    {
      text:'In addition to your medicare, do you also have a Humana, Cigna or Aetna Plan ?', 
      delay: 1000,
      wait: 2000,
    },
    {
      text: <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => setAnswer4('No I do not have Plan')}>No I do not have Plan</button>, 
      delay: 1000,
      wait: 4000
    },
    {
      text: <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => setAnswer4('Yes I have Cigna Plan')}>Yes I have Cigna Plan</button>, 
      delay: 1000,
      wait: 6000
    },
    {
      text: <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => setAnswer4('Yes I have Aetna Plan')}>Yes I have Aetna Plan</button>, 
      delay: 1000,
      wait: 8000
    },
    {
      text: <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => setAnswer4('Yes I have Humana Plan')}>Yes I have Humana Plan</button>,
      delay: 1000,
      wait: 10000
    }
  ];

  const questions5 = [
    {
      text:'🎉 Congratulations!  🎁 ', 
      delay: 0,
      wait: 1000
    },
    {
      text: "You're pre-qualified to receive a No Cost DNA Genetic Test Kit! Confirm your shipping info over the phone to receive your test.", 
      delay: 2000,
      wait: 3000
    },
    {
      text:'Tap the button below to CALL NOW to finalize your order. It only takes 2 minutes.', 
      delay: 2000,
      wait: 5000
    },
    {
      text: <a href="tel:+18889650711" className="text-white font-bold bg-blue-500 rounded-md py-3 px-12">+1 888-965-0711</a>,
      delay: 2000,
      wait: 7000
    } 
  ];

  const sorry = [{ text: "🙇‍♀️ Sorry, it seems like you don't qualify for this offer 😕", delay: 0}];

  const [questions, setQuestions] = useState(_questions);

  const [answer2, setAnswer2] = useState('')

  const [questions2, setQuestions2] = useState(_questions2);

  const [answer3, setAnswer3] = useState('');

  const [questions3, setQuestions3] = useState(_questions3);

  const [answer4, setAnswer4] = useState('');

  const [questions4, setQuestions4] = useState(_questions4);  

  useEffect(() => {

    if (answer1 === 'Yes') {
      
      setQuestions([
        {
          text: 'Hi 👋', 
          delay: 0,
        },
        {
          text: `I'm ${ agent } from DNA Life.`,
          delay: 1
        }, 
        {
          text: 'Want to find out if you qualify for a No Cost DNA Genetic Test Kit? Tap Yes!  😊 ',
          delay: 2
        },      
      ]);

    }
  }, [answer1, agent])

  useEffect(() => {

    if (answer2 === '64-70' || answer2 === '71-84' || answer2 === '85-100') {

      setQuestions2([
        {
          text: 'Okay, let me ask you a couple questions.', 
          delay: 0
        },
        {
          text: 'What is your age range?', 
          delay: 1
        }
    ]);

    }
  }, [answer2])

  useEffect(() => {

    if (answer3 === 'Yes' || answer3 === 'No' || answer3 === 'Unsure') {

      setQuestions3([{ text: 'Are you receiving Medicare?', delay: 0 }]);
    
    }

    if (answer3 === 'No') {

      setAnswer4('xxxx');

    }

  }, [answer3, setAnswer4]);

  useEffect(() => {

    if (answer4 === 'No I do not have Plan' || answer4 === 'Yes I have Cigna Plan' || answer4 === 'Yes I have Aetna Plan' || answer4 === 'Yes I have Humana Plan') {

      setQuestions4([{ text: 'In addition to your medicare, do you also have a Humana, Cigna or Aetna Plan ?', delay: 0}]);

    }    

  }, [answer4])

  return (
    <div>
      <div className="flex">
        <div className="flex items-end">

          {

            
            ( answer1 === '' || answer2 === '' || answer3 === '' || answer4 === '') ?

              <img className="w-8 h-8 rounded-full" src={ agentImg } alt="Avatar" />

            : ''
          
          }

        </div>
        <div>

            {

              questions.map( (question, x) => {

                return <LoadQuestion key={x} play={ play } question={ question } index={x + 1} audio={ audio }  />;

              })

            }

            {

              answer1 === 'Yes' ?

              <div className="flex items-start justify-end mt-2 ">

                <div className="ml-3 bg-blue-500 text-white p-3 rounded-lg shadow-sm w-fit">{ answer1 }</div>

                <img className="w-8 h-8 rounded-full ml-3" src={ profile } alt="profile" />

              </div>

              : ''

            }

            {

              answer1 === 'Yes'?

                <Question2 
                  questions={ questions2 }
                  setAnswer2={ setAnswer2 }
                />
              

              : ''

            }

            {

              (answer2 === '64-70' || answer2 === '71-84' || answer2 === '85-100') ?

              <div className="flex items-start justify-end mt-2 ">

                <div className="ml-3 bg-blue-500 text-white p-3 rounded-lg shadow-sm w-fit">{ answer2 }</div>

                <img className="w-8 h-8 rounded-full ml-3" src={ profile } alt="profile" />

              </div>


              : 

              ''
            }

            {

              (answer2 === '64-70' || answer2 === '71-84' || answer2 === '85-100') ?

                <Question3 
                  questions={ questions3 }
                />

               : '' 

            }

            {

              (answer3 === 'Yes' || answer3 === 'No' || answer3 === 'Unsure') ? 

                <div className="flex items-start justify-end mt-2 ">

                  <div className="ml-3 bg-blue-500 text-white p-3 rounded-lg shadow-sm w-fit">{ answer3 }</div>

                  <img className="w-8 h-8 rounded-full ml-3" src={ profile } alt="profile" />

                </div>

              : '' 

            }

            {
              (answer3 === 'Yes' ||  answer3 === 'Unsure') ? 

                <Question4 
                  questions={ questions4 }
                />

                : 

                ''
            }

            {

              (answer3 === 'No') ?

                <div>
                  <Question4 questions={ sorry } />

                  <div className="pt-2">

                    <div className="flex py-5 items-center">

                      <div className="flex-grow border-t border-gray-200"></div>

                      <span className="flex-shrink mx-4 text-gray-300 text-xs">Chat Closed</span>

                      <div className="flex-grow border-t border-gray-200"></div>

                    </div>

                  </div>
                </div>

                : ''

            }

            {

              (answer4 === 'No I do not have Plan' || answer4 === 'Yes I have Cigna Plan' || answer4 === 'Yes I have Aetna Plan' || answer4 === 'Yes I have Aetna Plan') ? 

                <div className="mt-2 flex items-start justify-end">                
                  <div className="ml-3 bg-blue-500 text-white p-3 rounded-lg shadow-sm">
                      { answer4 }
                  </div>

                  <img className="w-8 h-8 rounded-full ml-3" src={ profile } alt="profile" />

                </div>

              : ''

            }

            {
              (answer4 === 'No I do not have Plan') ?

                <Question5 
                  questions={ questions5 }
                />

              : 

              (answer4 === 'Yes I have Cigna Plan' || answer4 === 'Yes I have Aetna Plan' || answer4 === 'Yes I have Aetna Plan') ?

                <div>

                  <Question5 
                    questions={ sorry }
                  />

                  <div className="pt-2">

                    <div className="flex py-5 items-center">

                      <div className="flex-grow border-t border-gray-200"></div>

                      <span className="flex-shrink mx-4 text-gray-300 text-xs">Chat Closed</span>

                      <div className="flex-grow border-t border-gray-200"></div>

                    </div>

                  </div>

                </div>

              :

              ''

            }

            

        </div>
      </div>
    </div>
  )
}

export const LoadQuestion = ({question, play, audio}) => {

  const [loading, setLoading] = useState(0);

  useEffect(() => {

    setTimeout(() => { setLoading(1) }, question.wait);

  })

  return (

    <div>

    {
      loading === 0 ?        

        ''

      : 

      <Loaded question={ question } play={ play } audio={ audio } />

    }

    </div>

  )

}

const Loaded = ({question, play, audio}) => {

  const [loaded, setLoaded] = useState(0);  

  useEffect(() => {

    setTimeout(() => { setLoaded(1);  }, question.delay);        

  }, [setLoaded, question]);

  useEffect(() => {

    if (play) {
      audio.play();
    }

  })

  return (

    <div>

      {

        loaded === 0 ?

           <div className="chat-bubble p-4 bg-gray-200 rounded-md mt-2 ml-3">
            <div className="typing p-4  flex">
              <div className="dot bg-gray-500 h-[10px] w-[10px] rounded-full ml-0"></div>
              <div className="dot bg-gray-500 h-[10px] w-[10px] rounded-full ml-4"></div>
              <div className="dot bg-gray-500 h-[10px] w-[10px] rounded-full ml-4 mr-4"></div>
            </div>
          </div>

        :

        <div className="w-5/6">
          <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">
            { question.text }          
          </p>
          <div>{ play }</div>
        </div>

      }

    </div>

  )

}

export default Question1