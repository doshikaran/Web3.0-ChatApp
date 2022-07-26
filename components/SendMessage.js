import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({endOfMessagesRef}) {
    const {user, Moralis } = useMoralis();
    const [message, setMessage] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();

        if(!message) return;

        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();

        messages.save({
            message : message,
            username : user.getUsername(),
            ethAddress : user.get('ethAddress'),
        }).then(
            (message) => {
        },
        (error) => {
            console.log(error.message);
        });
        endOfMessagesRef.current.scrollIntoView({behavior : "smooth"});

        setMessage("");
    }

  return(
      <form className=" 
      flex 
      w-11/12
      opacity-80
      fixed bottom-10 
      px-6 py-4 
      max-w-xl 
      shadow-xl 
      rounded-full 
      border-2 
      border-black">
          <input className=" 
          outline-none 
          flex-grow 
          h-10 
          pr-5 pl-5
          bg-transparent 
          text-white 
          placeholder-white
          "
          type='text'
          value={message}
          onChange={ (e) => setMessage(e.target.value)}
          placeholder={`Enter a message ${user.getUsername()}`}/>

          <button 
          type="submit"
          onClick={sendMessage}
          className=" font-semibold text-gray-500">
              SEND
          </button>
      </form>
  )
}

export default SendMessage;
