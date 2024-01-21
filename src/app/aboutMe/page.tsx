import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AboutMe = () => {
  return (
    <main >
        
        <div className="fixed k snap-start  justify-center h-screen w-screen bg-cover bg-center items-center" style={{backgroundImage:"url(/bg-3.jpg )"}} >   
            <div className=' grid-cols-1 h-[50]'>
                <div className=' md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-black items-start text-center font-bold'>
                    What They Say... 
                </div>
                <div className='md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-l from-pink-200 to-black'>
                    About Me
                </div>
                <div className='flex  items-center md:h-[1000] md:w-[1000px]'>
                    <div className=''>
                        <Image  src="/banner_bg.png.png" alt='image' width={1000} height={1000} />
                    </div>
        
                    <div>
                        <h1 className='hidden sm:block text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-800 to-cyan-600'>
                            I'M  ALI JAN 
                        </h1>
                        <p className='col-start-2 col-end-3 row-start-2 row-end-3 text-white'> 
                            "Passionate web developer dedicated to turning ideas into interactive realities.
                             With a blend of creativity and precision, I bring innovation to code, creating seamless 
                             and visually stunning websites that leave a lasting impression."
                        </p>
                    </div>
                </div>
                <div className='flex justify-center sm:pt-2 mt-3 '>
                    <Link href={"/Contact"}>
                    <button  className='max-w-[120px] font-bold rounded-lg p-1 md:p-2 text-cyan-500 hover:bg-pink-700 hover:text-cyan-900 hover:border-gray-600 border-solid border-2 border-pink-800'>
                        Have a Talk !
                    </button>
                    </Link>
                </div>
            </div>
        </div>
        <div className=' w-full h-full bg-cover text-white font-bold bg-center justify-center' >
            <div className='text-white'>
                What They Say...
            </div>
            <div>About Me</div>
            <div></div>
            <div></div>
            <div></div>

        </div>
       
    </main>
  )
}

export default AboutMe