import { FormEvent , KeyboardEvent} from 'react';
import { Header } from '../components/Header';
import { Tweet } from '../components/Tweet';
import { Separator } from '../Separator';
import { useState } from 'react';

import './Timeline.css';


export function Timeline(): JSX.Element {
  const [newTweet, setNewTweet] = useState("")
  const [tweets , setTweets]= useState([
    'Meu primeiro tweet',
    'Esta ficando show',
    'Esta ficando bonito',
    'Deu certo!'
])

  function createNewTweet(event: FormEvent){
    event.preventDefault()

    setTweets([ newTweet,... tweets])//Colocar em ordem os tweets
    setNewTweet('') //Limpar ,para um novo tweet ser add

  }
  function handleHotKeySubmit(event: KeyboardEvent){
    if( event.key === 'Enter' && event.ctrlKey || event.metaKey){
      setTweets([ newTweet,... tweets])//Colocar em ordem os tweets
      setNewTweet('') //Limpar ,para um novo tweet ser add
    }
      }
  return(
    <main className='timeline'>
         <Header title="Home" />

          <form onSubmit={createNewTweet} className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/LeidyOlinto.png" alt="Leidy Olinto" />
              <textarea id='tweet' 
              placeholder="What's happening?"
              onKeyDown={handleHotKeySubmit}
              value={newTweet}
              onChange={(event) => {
                setNewTweet(event.target.value)
              }}
               />
            </label>

            <button type='submit' >Tweet</button>
          </form>

          <Separator />

          {
            tweets.map(tweet =>{
              return <Tweet key={tweet} content={tweet}/>
            })
          }

        </main>
  )
}