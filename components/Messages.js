import { useRef } from 'react';
import {ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis';
import SendMessage from '../components/SendMessage'
import Message from '../components/Message'

const MINS_DURATION = 45;
function Messages() {
    const endOfMessagesRef = useRef(null);
    const {data, loading, error} = useMoralisQuery(
      "Messages",
     ( query )=> query.ascending("createdAt").
     greaterThan('createdAt', 
      new Date(Date.now() - 1000 * 60 * MINS_DURATION),
      [],
      {
        live: true,
      }
      )
    )
     

  return(
    <div className=" pb-56">
        <div className=' mx-5'>
            <ByMoralis variant='light'
            style={{
                marginLeft:'auto',
                marginRight:'auto'
            }}/>
        </div>

        <div className=' 
        space-y-10 
        p-4 
        text-white'>
             {data.map(message => (
               <Message key = {message.id} message = {message}/>
             ))}
        </div>

        <div className=' 
        flex 
        justify-center'>
             <SendMessage endOfMessagesRef ={endOfMessagesRef}/> 
        </div>

        <div ref={endOfMessagesRef}>

        </div>
    </div >
  ) 
}

export default Messages;
