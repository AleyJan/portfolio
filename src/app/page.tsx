import  Link from "next/link"
import { FaLongArrowAltRight } from "react-icons/fa";


export default function Home(){
  
return(
    <main className="w-full h-full bg-center fixed md:flex ">
     
      
      <div className="flex items-center  h-screen w-screen bg-cover bg-center" style={{backgroundImage:"url(/main-bg.webp )"}}>
          <div className="pl-10 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[700px] ">
          
              <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 left-10 w-20 h-40 bg-purple-500 rounded-full filter blur-2xl  animate-pulse"></div>
                  <div className="absolute -bottom-100 left-15 w-30 h-40 bg-orange-800 rounded-full filter blur-3xl animate-pulse"></div>
                  <div className="absolute -bottom-100 left-40 w-10 h-40 bg-blue-500 rounded-full filter blur-2xl animate-pulse"></div>

              </div>
            <div className="flex flex-wrap items-center justify-start">
            <h1 className="md:text-[30px] text-white  font-semibold ">
              Make Anything Possible with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
                WEB DEVELOPMENT
              </span>
            </h1>
            <p className="text-gray-400 ">
            "Elevating ideas into immersive online experiences through innovative web development."
            </p>
              </div>

            <div className=" md:flex-row md:flex gap-5">
              <Link href={"/aboutMe"} className="hidden md:block rounded-[20px] bg-blue-500 hover:bg-blue-400 px-1 py-1 md:px-3 md:py-2 md:text-lg text-white max-w-[100px] md:max-w-[200px]"> 
                About Me
              </Link>
              <Link href={"/project"} className="hidden md:block rounded-[20px] bg-blue-500 hover:bg-blue-400 md:px-3 md:py-2 text-lg text-white max-w-[200px]">
                Project
              </Link>
              <Link href={"/Contact"} className="hidden md:block rounded-[20px] bg-blue-500 hover:bg-blue-400 md:px-3 md:py-2 text-lg text-white max-w-[200px]">
              Contact
              </Link>
              <div>
              <Link href={"/aboutMe"}  className="flex justify-center items-center md:hidden md:text-[12px] text-[13px] rounded-[10px] bg-blue-500 hover:bg-blue-400 py-1 md:px-3 md:py-2 text-white max-w-[80px]">
                About Me  <span className="mt-[4px]"> <FaLongArrowAltRight/></span>
              </Link>
              </div>

            </div>

          </div>
      </div>

       
        
      </main>
  )
  }