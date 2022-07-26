import { useMoralis } from "react-moralis";

function ChangeUsername() {
    const {setUserData, isUserUpdating, useError, user} = useMoralis();

    const setUsername = () => {
        const username = prompt(`ENTER YOUR NEW USERNAME (current : ${user.getUsername()})`)
        if(!username)
    return;

    setUserData({
        username,
    })
    };


  return(
    <div className="
    text-sm 
    absolute
    top-5 right-10">
        <button disabled = {isUserUpdating}
        onClick={setUsername}
        className="
        text-white 
        hover:text-gray-500">
            CHANGE YOUR USERNAME
        </button>
    </div>
  )
}

export default ChangeUsername;
