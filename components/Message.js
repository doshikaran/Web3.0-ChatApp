import {useMoralis} from 'react-moralis'
import Avatar from './Avatar';
import TimeAgo from 'timeago-react'


function Message({message}) {
    const {user} = useMoralis();

    const isUserMessage = message.get('ethAddress') === user.get('ethAddress');
  return(
      <div className={`
      flex 
      items-end 
      space-x-2 
      relative ${
          isUserMessage && "justify-end"
      }`}>

          <div className={`
          relative 
          h-8 
          w-8 ${
              isUserMessage && "order-last ml-4"
          }`}>
            <Avatar username={message.get("username")}/>
          </div>

          <div className={`flex space-x-4 p-3 rounded-full ${
              isUserMessage ? 'rounded-br-none bg-gray-900  ' :
              'rounded-bl-none'
          }`}>
          <p>
             {message.get("message")}
          </p>
          </div>

          <TimeAgo
          className={`text-[8px] italic ${
              isUserMessage && 'order-first pr-1'
          }`}
          datetime={message.createdAt}
          />
          
          <p className={`absolute -bottom-5 text-xs ${
              isUserMessage ? 'text-red-200' : 'text-white'
          }`}>
              {message.get("username")}
          </p>
      </div>
  )
}

export default Message;
