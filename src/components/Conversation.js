import React, { Component } from 'react'

import { agentImg, csr, profile } from '../assets/images';

import { notification } from '../assets/sound';



class  Conversation  extends Component {

  constructor(props) {

    super(  props )

    this.state = {

      q1: '',
      q2: '',
      q3: '',
      q4: ''

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

    const agent = this.props.agent;
  
    return (
      <div>

        <div className="flex w-5/6">

            <div>
              
            </div>

            <audio src={ notification } />

            <img className="w-8 h8 rounded-full agent-hidden" src={ csr } alt="Avatar" />
        
            {/* <Load 
              chat={<p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">Hi 👋</p>} 
    /> */}

        </div>

        <div className="flex">

          <img className="w-8 h8 rounded-full agent-hidden" src={ csr } alt="Avatar" />

          <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">I'm { agent } from DNA Life.</p>

        </div>

        <div className="flex flex-start items-end w-5/6">

          { this.state.q1 === '' ?

              <img className="w-8 h8 rounded-full agent-hidden" src={ csr } alt="Avatar" />     

              : 

              <img className="w-8 h-8 rounded-full" src={ agentImg } alt="Avatar" />

          }

          <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">Want to find out if you qualify for a No Cost DNA Genetic Test Kit? Tap Yes!  😊 </p>

        </div>

        { this.state.q1 === '' ?

        <div className="flex items-end">

          <img className="w-8 h-8 rounded-full" src={ agentImg } alt="Avatar" />

          <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">
            <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={ this.setAnswer1 }>Yes</button>
          </p>

        </div>

        : '' }

        { this.state.q1 === 'Yes' ?

          <div className="flex items-start justify-end mt-2 ">

            <div className="ml-3 bg-blue-500 text-white p-3 rounded-lg shadow-sm w-fit">{ this.state.q1}</div>

            <img className="w-8 h-8 rounded-full ml-3" src={ profile } alt="profile" />

          </div>
      
        : ''}

        {
          this.state.q1 === 'Yes' ?

            <div>

              <div className="flex">

                <img className="w-8 h8 rounded-full agent-hidden" src={ csr } alt="Avatar" />

                <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">Okay, let me ask you a couple questions.</p>

              </div>

              <div className="flex items-end">

                {
                  this.state.q2 === '' ?

                  <img className="w-8 h8 rounded-full agent-hidden" src={ csr } alt="Avatar" />

                : 

                  <img className="w-8 h-8 rounded-full" src={ agentImg } alt="Avatar" />

                }

                <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">What is your age range?</p>

              </div>

              { this.state.q2 === '' ?

                <div className="flex items-end">

                    <img className="w-8 h-8 rounded-full" src={ agentImg } alt="Avatar" />

                    <div>                    

                        <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">
                          <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => this.setAnswer2('64-70')}>64-70</button>
                        </p>

                        <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">
                          <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => this.setAnswer2('71-84')}>71-84</button>
                        </p>

                        <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">
                          <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => this.setAnswer2('85-100')}>85-100</button>
                        </p>

                    </div>

                  </div>

                  : 

                  <div className="flex items-start justify-end mt-2">
                  
                    <div className="ml-3 bg-blue-500 text-white p-3 rounded-lg shadow-sm">
                      { this.state.q2 }
                    </div>

                    <img className="w-8 h-8 rounded-full ml-3" src={ profile } alt="profile" />

                  </div>
                  
                  }

            </div>

            : ''

        }

        { 
          this.state.q2 === '64-70' || this.state.q2 === '71-84' || this.state.q2 === '85-100' ?

            <div>

              <div className="flex mt-2">

                <img className="w-8 h8 rounded-full agent-hidden" src={ csr } alt="Avatar" />

                <p className="ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">Are you receiving Medicare?</p>

            </div>

              { this.state.q3 === '' ?


                <div className="flex items-end">

                  <img className="w-8 h8 rounded-full" src={ agentImg } alt="Avatar" />

                  <div>

                    <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">
                      <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => this.setAnswer3('Yes')}>Yes</button>
                    </p>

                    <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">
                      <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => this.setAnswer3('No')}>No</button>
                    </p>

                    <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">
                      <button className="text-white font-bold bg-blue-500 rounded-full py-3 px-12" onClick={() => this.setAnswer3('Unsure')}>Unsure</button>
                    </p>

                  </div>

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

                <p className="ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">In addition to your medicare, do you also have a Humana, Cigna or Aetna Plan ?</p>

              </div>

              { this.state.q4 === '' ?

                <div className="flex items-end">

                  <img className="w-8 h8 rounded-full" src={ agentImg } alt="Avatar" />

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

            : '' }
        {

          this.state.q4 === 'No I do not have Plan'?

            <div className="flex items-end mt-2 w-5/6">

                <img className="w-8 h8 rounded-full" src={ agentImg } alt="Avatar" />

                <div>

                  <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">🎉 Congratulations!  🎁 </p>

                  <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">You're pre-qualified to receive a No Cost DNA Genetic Test Kit! Confirm your shipping info over the phone to receive your test.</p>

                  <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">Tap the button below to CALL NOW to finalize your order. It only takes 2 minutes.</p>

                  <p className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadown-sm w-fit">
                  
                  <button className="text-white font-bold bg-blue-500 rounded-md py-3 px-12">+1 888-965-0711</button></p>

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