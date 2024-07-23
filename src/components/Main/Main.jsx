import React, { useContext } from 'react'
import './Main.css'


const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input
    } = useContext(Context)



  return (
    <div className='main'>
        <div className="nav">
            <p>
                Gemini
            </p>
            <img src={assets.user_icon} alt=''/>
        </div>

        <div className="main-container">

           {!showResult
           ?<>

            <div className="greet">
                <p>
                    <span>
                        Hello, Dev
                    </span>
                </p>
                <p>
                    How can i Help you today?
                </p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>
                        Suggest Beautiful Places to see
                    </p>
                    <img src={assets.compass_icon}/>   
                </div>
                <div className="card">
                    <p>
                        Briefly summarize this concept: Urban Planning
                    </p>
                    <img src={assets.bulb_icon} alt='nothing' />   
                </div>
                <div className="card">
                    <p>
                        Brainstorm team bonding activities for our work retreat
                    </p>
                    <img src={assets.message_icon}/>   
                </div>
                <div className="card">
                    <p>
                        Improve the readability of the following code
                    </p>
                    <img src={assets.code_icon}/>   
                </div>
            </div>
           </>
           :<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} />
                    <p>
                        {recentPrompt}
                    </p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon}/>
                    {loading?
                    <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :
                    <p >
                        {resultData}
                    </p>
                    }
                    
                </div>
            </div>
           }

          <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                <div>
                    <img src={assets.gallery_icon}/>
                    <img src={assets.mic_icon}/>
                   {input? <img onClick={() => onSent()} src={assets.send_icon}/>:null}
                </div>
            </div>
            <p className='bottom-info'>
                Gemini may display inaccurate info, including about people, so double-check its authenticity!
            </p>
          </div>
        </div>
    </div>
  )
}
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
export default Main