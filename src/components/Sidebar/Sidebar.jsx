import React, { useContext, useState } from 'react'

import './sidebar.css'

import { assets } from '../../assets/assets'
import { Context } from '../../Logic/Logic';

const Sidebar = () => {

    const [extend, setExtend]=useState(false);

    const {
        prevPrompt,
       
        onSent,
        setRecentPrompt,
        newchat
       
        
        
    } = useContext(Context)


    const loadPrompt = async (prompt) =>{
        setRecentPrompt(prompt)
       await onSent(prompt)
    }








  return (
    <div className='sidebar'>

        <div className='top'>

            {/* side bar link */}

            <img onClick={()=>setExtend(prev=>!prev)}   src={assets.menu_icon} className='menu'   alt="" />

            <div onClick={()=>newchat()} className='new-chat'>
                <img src="data:image/png;base64,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" alt="" />
               {extend ? <p>New Chat</p> : null} 

            </div>


            {extend ?
            <div className='recent'>
            <p className='recent-title'>Recent chat</p>

            {prevPrompt.map((item,index)=> {

                return (
                    <div key={index} onClick={()=>loadPrompt(item)} className='recent-entry'>
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0,12)}...</p>
    
                </div>

                )

            })}








          
        </div> : null

            
        
        
        }



            


        </div>

        <div className='bottom'>

            <div className='bottom-item recent-entry'>
                <img src="data:image/png;base64,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" alt=""  />
              {extend ?  <p>Help</p> : null} 

            </div>

            <div className='bottom-item recent-entry'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr90n6tuEjJ5-oktu1SZppkioue4FKVjSL5g&usqp=CAU" alt=""  />
                {extend ?  <p>Activity</p> : null}  

            </div>

            <div className='bottom-item recent-entry'>
                <img src="data:image/png;base64,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" alt=""  />
                {extend ?   <p>Setting</p> : null}

            </div>

        </div>


      
    </div>
  )
}

export default Sidebar
