import React from 'react'
import Image from 'next/image'


const Project = () => {
  return (
    <main className=' flex fixed justify-center space-x-4  w-full h-full bg-slate-400 font-roboto'>
    <div className='group relative flex flex-col object-cover  bg-blue-950 text-white  w-[250px] h-[300px] justify-center overflow-hidden m-4 border-solid border-4 rounded-lg '>
         <Image className='w-full h-full rounded-lg bg-center' src="/img.jpg" alt="" width={100} height={100} >
         </Image>
      <div className='flex flex-col w-full h-full top-0 inset-0 translate-y-[70%]  absolute bg-[#1f3d4738]  filter backdrop-blur-sm text-white p-3  duration-500 group-hover:translate-y-0 transition-all'>
        <h1 className=' uppercase font-bold text-[25px] mx-[10px]'>NYC</h1>
        <p className=' capitalize font-medium text-[9px] mx-[10px] '>new to city</p>
        <p className='relative m-[10px] pt-4 leading-6 text-[15px]'>This is tour guide, to give info about city and why to book tour with us.</p>
        <button className='uppercase text-[#1f3d47] text-[8px] w-[100px] bg-[#8fabba] p-2 mt-3 ml-2 font-bold border-none rounded-lg'>Book tour</button>
      </div>
    </div>
    <div className='flex relative bg-black text-white w-[250px] h-[300px] items-center justify-center m-4 border-solid border-4 rounded-lg'>
      Project 2
      </div>
    </main>
  )
}

export default Project