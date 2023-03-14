import { ArrowsClockwise, ChatCircle, Heart} from 'phosphor-react';
import { Link } from 'react-router-dom';
import './Tweet.css';

interface TweetProps{
  content: string
}
// const tweetStyles = {
//   borderRadius:8
// }
export function Tweet(props:TweetProps){
  console.log()
  return (
    <Link to="/status" className='tweet'>
     <img src="https://github.com/LeidyOlinto.png" alt="Leidy Olinto" />
     <div className="tweet-content">
      <div className='tweet-content-header'>
        <strong>Leidy OLinto</strong>
        <span>@Leidyolinto</span>
      </div>
      <p>{props.content}</p>
      
        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle />
            10
          </button>
          <button type='button'>
            <ArrowsClockwise />
            25
          </button>
          <button type='button'>
            <Heart />
            50
          </button>
        </div>
     </div>
    </Link>
   
  )
}