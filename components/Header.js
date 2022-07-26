import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "../components/Avatar";
import ChangeUsername from "../components/ChangeUsername"

function Header() {
  const {user} = useMoralis();

  return (
    <div className=" 
    sticky 
    top-0 
    p-5 
    z-50 
    shadow-2xl 
    rounded-lg">
      <div className="
      grid grid-cols-5 
      lg:grid-cols-6 
      item-end 
      lg:items-center">

        <div className="
        relative 
        h-24 w-24 
        mx-auto 
        hidden lg:inline-grid">
          <Image 
          layout="fill" 
          objectFit="cover"
          className="rounded-full"
          src="https://i.pinimg.com/564x/f4/84/5a/f4845a22b4ce0367eda386e6d010a543.jpg"/>
        </div>

        <div className="text-left lg:text-center col-span-4">
            <div className="relative h-48 w-48 
            lg:mx-auto 
            border-white 
            border-4 
            rounded-full">
              <Avatar logoutOnPress/>
            </div>

            <h1 className="
            text-white 
            text-xl">WELCOME TO METAVERSE</h1>
            <h2 className="
            text-2xl 
            font-semibold 
            text-white 
            truncate">
              {user.getUsername()}
            </h2>
            <ChangeUsername/>
        </div>

      </div>
    </div>
  )
}

export default Header;
