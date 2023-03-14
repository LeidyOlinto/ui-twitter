import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Tweet } from "../components/Tweet";
import { Separator } from "../Separator";

import './Status.css';


export function Status(){
  const [newAnswer, setNewAnswer] = useState("")
const [answer , setAnswer]= useState([
  'Concordo com voçê',
  'Olha,faz sentido!',
  'Parabéns pelo progresso.'
])

  function createNewAnswer(event: FormEvent){
    event.preventDefault()

    setAnswer([ newAnswer,... answer])//Colocar em ordem os tweets
    setNewAnswer('') //Limpar ,para um novo tweet ser add

  }
  function handleHotKeySubmit(event: KeyboardEvent){
    if( event.key === 'Enter' && event.ctrlKey || event.metaKey){
      setAnswer([ newAnswer,... answer])//Colocar em ordem os tweets
      setNewAnswer('') //Limpar ,para um novo tweet ser add
  }
  }

return(
  <main className='status'>
  <Header title="tweet" />

  <Tweet content="Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. 
    Tempore optio ducimus illum rerum consequuntur 
    neque ut nostrum quam magni iusto sunt, 
    perspiciatis nulla ipsam qui 
    eos non, eligendi corrupti nisi?" />

    <Separator />

   <form onSubmit={createNewAnswer} className="answer-tweet-form">
     <label htmlFor="tweet">
       <img src="https://github.com/LeidyOlinto.png" alt="Leidy Olinto" />
       <textarea 
        id='tweet'
        placeholder='Tweet your answer'
        value={newAnswer}
        onKeyDown={handleHotKeySubmit}
        onChange={(event) => {
          setNewAnswer(event.target.value)
        }}
         />
     </label>

     <button 
     type='submit' >
       <PaperPlaneRight />
     <span> Answer</span>
      </button>
   </form>

   {
     answer.map(answer =>{
       return <Tweet key={answer} content={answer}/>
     })
   }

 </main>
)
}