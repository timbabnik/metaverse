import Image from "next/image"
import { useMoralis } from "react-moralis";

function Login() {

    const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
        <h1>hahfasdfasdfa</h1>
        <div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-4">
            <div className="p-20 rounded-full flex flex-col items-center bg-gradient-to-b from-black">
                <h1 className="text-white text-7xl font-light ">Join the <span className="font-bold text-fuchsia-300">METAVERSE</span> chat</h1>
                
                <button onClick={authenticate} className="bg-blue-500 rounded-lg p-5 font-bold animate-pulse text-white h-50 w-2/7 mt-10 px-20">Login to the chat</button>
            </div>
            
        </div>

        <div className="w-full h-screen">
            <Image 
                src="https://links.papareact.com/55n"
                layout="fill"
                objectFit="cover"
            />
        </div>
    </div>
  )
}

export default Login