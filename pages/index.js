import Head from 'next/head'
import Login from "../components/Login"
import Header from "../components/Header"
import Messages from "../components/Messages"
import { useMoralis } from 'react-moralis';

export default function Home() {
  const {isAuthenticated} = useMoralis ();

  if(!isAuthenticated) return <Login/>

  return (
    <div className="
    h-screen 
    overflow-y-scroll 
    bg-gradient-to-b from-black to-slate-800 
    overflow-hidden">
      <Head>
        <title>Metaverse-App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
        <div className='
        max-w-screen-2xl 
        mx-auto'>
          <Header/>
          <Messages/>
          {/*footer*/}
        </div>
      

      
    </div>
  )
}
