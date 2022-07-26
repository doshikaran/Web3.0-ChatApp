import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const {authenticate, isInitializing} = useMoralis ();

  return (
  <div className="h-screen 
  overflow-y-scroll 
  bg-gradient-to-b from-black to-slate-800 
  overflow-hidden">

<div className=" w-20 h-10">
        {/*login back ground image*/}
        <Image
        src = "https://i.pinimg.com/564x/f4/84/5a/f4845a22b4ce0367eda386e6d010a543.jpg"
        layout="fill"
        />
      </div>

      <div className="
      flex flex-col 
      absolute 
      z-50 
      h-4/6 w-full 
      items-center justify-center">
        {/*login button*/}
        <button 
        onClick={authenticate}
        className="bg-slate-200 
        border rounded-full 
        p-2.5 
        font-semibold animate-pulse">
            LOGIN TO THE METAVERSE
        </button>
      </div>

      

  </div>
  )
}

export default Login;
