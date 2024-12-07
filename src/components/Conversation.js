import React, { Component } from 'react'

import { agentImg, csr, profile } from '../assets/images';

import { notification } from '../assets/sound';

import Question1 from './modules/Question1';
import Question2 from './modules/Question2';
import Question3 from './modules/Question3';
import Question4 from './modules/Question4';
class Load extends Component {

  constructor( props ) {

    super( props);

    this.state = {
      show: 1
    }

    this.play = this.play.bind(this);
    
  }

  play() {

    new Audio( notification ).play();

  }

  componentDidMount() {

   setTimeout(() => { this.setState( { show: 2 } )}, this.props.index * this.props.delay) ;    

  }



  render() {

    return (

      <div>

      { this.state.show === 1 ?

          <div className="chat-bubble p-4 bg-gray-200 rounded-md mt-2 ml-3">
            <div className="typing p-4  flex">
              <div className="dot bg-gray-500 h-[10px] w-[10px] rounded-full ml-0"></div>
              <div className="dot bg-gray-500 h-[10px] w-[10px] rounded-full ml-4"></div>
              <div className="dot bg-gray-500 h-[10px] w-[10px] rounded-full ml-4 mr-4"></div>
            </div>
          </div>

      : this.state.show === 2 ?
      
        <>
          { this.props.chat }
          { this.play }
         
        </> 

        : '' }
      

      </div>

    )
  }
}

class  Conversation  extends Component {

  constructor(props) {

    super(  props )

    this.state = {

      q1: '',
      q2: '',
      q3: '',
      q4: '',

      messages: ['Hi 👋'],

    }

    this.setAnswer1 = this.setAnswer1.bind(this);
    this.setAnswer2 = this.setAnswer2.bind(this);
    this.setAnswer3 = this.setAnswer3.bind(this);
    this.setAnswer4 = this.setAnswer4.bind(this);    

  }



  

  

  setAnswer4( answer ) {

    this.setState({ q4: answer });

  }

  setAnswer3( answer ) {

    this.setState({ q3: answer });

  }

  setAnswer2( answer ) {

    this.setState({ q2: answer });

  }

  setAnswer1() {

    this.setState({ q1: 'Yes' });

  }

  


  render() {   

    return (
      <div>

        <div>

            <Question1 agent={ this.props.agent } />
            

          

          

        </div>



        { 
          this.state.q2 === '64-70' || this.state.q2 === '71-84' || this.state.q2 === '85-100' ?

            <div>

              <div className="flex mt-2">

                <img className="w-8 h8 rounded-full agent-hidden" src={ csr } alt="Avatar" />

                <Load 
                  chat={<p className="ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">Are you receiving Medicare?</p> }

                  delay={ 3000 } />

            </div>

              { this.state.q3 === '' ?


                <div className="flex items-end">

                  <img className="w-8 h8 rounded-full" src={ agentImg } alt="Avatar" />                 



                </div>

                : 

                  <div className="mt-2 flex items-start justify-end">                
                    <div className="ml-3 bg-blue-500 text-white p-3 rounded-lg shadow-sm">
                      { this.state.q3 }
                    </div>

                    <img className="w-8 h-8 rounded-full ml-3" src={ profile } alt="profile" />

                  </div>
                
                }

            </div>

        : '' }

        {

            this.state.q3 === 'Yes' || this.state.q3 === 'Unsure' ?

            <div className="mt-2">

              <div className="flex items-end w-5/6">

                {
                  this.state.q4 === '' ?

                    <img className="w-8 h8 rounded-full agent-hidden" src={ csr } alt="Avatar" />

                  :

                    <img className="w-8 h8 rounded-full" src={ agentImg } alt="Avatar" />

                }

                <Load 
                  chat={<p className="ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">In addition to your medicare, do you also have a Humana, Cigna or Aetna Plan ?</p>} 
                  delay={ 3000 }
                />

              </div>

              { this.state.q4 === '' ?

                <div className="flex items-end">

                  <img className="w-8 h8 rounded-full" src={ agentImg } alt="Avatar" />

                  <Load 

                    chat={

                        <div>

                          <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">
                            <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => this.setAnswer4('No I do not have Plan')}>No I do not have Plan</button>
                          </p>

                          <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">
                            <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => this.setAnswer4('Yes I have Cigna Plan')}>Yes I have Cigna Plan</button>
                          </p>

                          <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">
                            <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => this.setAnswer4('Yes I have Aetna Plan')}>Yes I have Aetna Plan</button>
                          </p>

                          <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">
                            <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => this.setAnswer4('Yes I have Humana Plan')}>Yes I have Humana Plan</button>
                          </p>

                        </div>

                    } 

                    delay={ 3000 }
                    
                  />

                </div>

                : 

                <div className="mt-2 flex items-start justify-end">                
                  <div className="ml-3 bg-blue-500 text-white p-3 rounded-lg shadow-sm">
                    { this.state.q4 }
                  </div>

                  <img className="w-8 h-8 rounded-full ml-3" src={ profile } alt="profile" />

                </div>
                
                }

            </div>

              : this.state.q3 === 'No' ?

              <Load

                chat={
                    <div>

                      <div className="flex items-end w-56">

                        <img className="w-8 h8 rounded-full" src={ agentImg } alt="Avatar" />

                        <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm">🙇‍♀️ Sorry, it seems like you don't qualify for this offer 😕</p> 
                          
                        

                      </div>

                      <div className="pt-2">

                        <div className="flex py-5 items-center">

                          <div className="flex-grow border-t border-gray-200"></div>

                          <span className="flex-shrink mx-4 text-gray-300 text-xs">Chat Closed</span>

                          <div className="flex-grow border-t border-gray-200"></div>

                        </div>

                      </div>

                    </div>

                }

                delay={ 3000 } />

            : '' }
        {

          this.state.q4 === 'No I do not have Plan'?

            <div className="flex items-end mt-2 w-5/6">

                <img className="w-8 h8 rounded-full" src={ agentImg } alt="Avatar" />

                <div>

                  <Load chat={<p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">🎉 Congratulations!  🎁 </p> } delay={ 2000 } />

                  <Load chat={ <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">You're pre-qualified to receive a No Cost DNA Genetic Test Kit! Confirm your shipping info over the phone to receive your test.</p> } delay={ 2500 } />

                  <Load chat={ <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">Tap the button below to CALL NOW to finalize your order. It only takes 2 minutes.</p> } delay={ 3000 } />

                  <Load chat={ <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">
                  
                  <button className="text-white font-bold bg-blue-500 rounded-md py-3 px-12">+1 888-965-0711</button></p>

                  } delay={ 3500 } />

                </div>

            </div>


          : 

          this.state.q4 === 'Yes I have Humana Plan' || this.state.q4 === 'Yes I have Cigna Plan' || this.state.q4 === 'Yes I have Aetna Plan' ?
          
          <div>

              <div className="flex items-end">

                <img className="w-8 h8 rounded-full" src={ agentImg } alt="Avatar" />

                <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">🙇‍♀️ Sorry, it seems like you don't qualify for this offer 😕</p>

              </div>

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

        

      </div>
  )
}

}


class Load extends Component {

  constructor( props ) {

    super( props );

    this.state = {

      loading: 1

    }

  }

  render() {

    const chat = this.props.chat;

    return (

      <div>

        { this.state.loading === 1 ?

            <div className="chat-bubble">
            <div className="typing">
              <div className="dot bg-gray-500"></div>
              <div className="dot bg-gray-500"></div>
              <div className="dot bg-gray-500"></div>
            </div>
            </div>

        
        
        : this.chat
      
        }

        {/* setTimeout({

          this.setState({ loading: 0 })

        }, 3000); */}

      </div>

    )

  }


}


export default Conversation