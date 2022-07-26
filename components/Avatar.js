import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar(
    {username, logoutOnPress}
) {
    const {user, logout} = useMoralis();
  return(

  <Image
  className="
  rounded-full 
  cursor-pointer 
  bg-black 
  hover:opacity-75"
  src={`https://avatars.dicebear.com/api/adventurer/KD/${
      username || user.get("username")}.svg`}
        onClick={() => logoutOnPress && logout() }
        layout="fill"  
  />
  )
}

export default Avatar;
