import React, { createContext, useState } from "react";
import runChat from "../config/gemini";


export const Context = createContext()



const ContextProvider= (props) => {

    const [input,setInput] = useState("")

    const [recentPrompt,setRecentPrompt] = useState("")

    const [prevPrompt, setPrevPrompt] =useState([])

    const [showres, setshowres]=useState(false)

    const [loading,setloading]=useState(false)

    const [resdata, setresData]=useState("") 


    const delayPara = (index,nextWord) => {
        setTimeout(function (){
            setresData(prev=>prev+nextWord)
        },75*index)

    }


    const newchat = () => {
        setloading(false)
        setshowres(false)
    }

    const onSent = async (prompt) =>{
        setresData("")
        setloading(true)
        setshowres(true)
        let response;
        if(prompt !==undefined){
            response=await runChat(prompt)
            setRecentPrompt(prompt)
        }else{
            setPrevPrompt(prev=>[...prev,input])
            setRecentPrompt(input)
            response=await runChat(input)
        }
       
       let responsearray=response.split("**")
       let newarray="";
       for(let i=0; i<responsearray.length;i++)
       {
          if(i === 0 || i%2 !==1){
            newarray+=responsearray[i];


           }else{
            newarray += "<b>" + responsearray[i] + "</b>"
           }
       }

       let newarray2=newarray.split("*").join("</br>")

       let newarray3=newarray2.split(" ");

       for(let i=0; i<newarray3.length;i++){
        const nextWord=newarray3[i];
        delayPara(i,nextWord+" ")
       }

      // setresData(newarray2)

       setloading(false)

       setInput("")

    }

   // onSent("what is React")



    const contextValue = {

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
        newchat



        
    }


    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider