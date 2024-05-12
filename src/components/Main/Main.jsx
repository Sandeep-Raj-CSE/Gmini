import React, { useContext } from 'react'
import './Main.css'
import {assets} from "../../assets/assets"
import { Context } from '../../Logic/Logic'

const Main = () => {

    const {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showres,
        setshowres,
        loading,
        resdata,
        input,
        setInput,
        


    } = useContext(Context)





  return (
    <div className='main'>
        <div className='nav'>
            <p>Gmini</p>
            <img src="https://p.naukimg.com/jphotoV1/l444:LukcMTq/3godErCyVQgEbpkyw3Ujb8w6zyYE1zCtAaFiL4K+XD8ET4TW?v=BJP" alt="" />


        </div>
        <div className='main-container'>


{ !showres ? 
<>
<div className="greet">
                <p><span>Hello, Sandy</span></p>
                <p>How was your Day?</p>
            </div>

            <div className="cards">
                <div className="card">
                    <p>Leadership is about understanding what you can do well and what your team can do well. - MS Dhoni </p>
                    <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                    <p>Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill </p>
                    <img src={assets.bulb_icon} alt="" />
                </div>


                <div className="card">
                   <p> Love is composed of a single soul inhabiting two bodies. - Aristotle </p>
                    <img src={assets.message_icon} alt="" />
                </div>


                <div className="card">
                    <p>Tu chinta mat kar yrr mai tere saath at any cost and any time - LOVE </p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>




</>
:
<div className='result'> 

  <div className='result-title'> 
  <img src="https://p.naukimg.com/jphotoV1/l444:LukcMTq/3godErCyVQgEbpkyw3Ujb8w6zyYE1zCtAaFiL4K+XD8ET4TW?v=BJP" alt="" />
  <p>{recentPrompt}</p>

  </div>

  <div className="result-data">
    <img src={assets.gemini_icon} alt="" />
    {
        loading ?
        <>
        <div className='loader'>
            <hr />
            <hr />
            <hr />

        </div>
        </>
        :
        <p dangerouslySetInnerHTML={{__html:resdata}}></p>

    }
   
  </div>



</div>
}




          
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter the prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                      {input ? <img onClick={()=>onSent()}  src={assets.send_icon} alt="" /> : null}  
                    </div>
                </div>

                <p className='bottom-info'>Gemini may display inaccurate info, including about people, so double-check its responses.</p>

                
            </div>

        </div>
      
    </div>
  )
}

export default Main
