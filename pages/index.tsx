import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from "../components/Login"
import Header from "../components/Header"
import Messages from "../components/Messages"
import { useMoralis } from "react-moralis";


const Home: NextPage = () => {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
     
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages /> 
      </div>
     
    </div>
  )
}

export default Home
