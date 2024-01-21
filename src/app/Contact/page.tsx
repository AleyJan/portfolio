import { Mandali } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <main >
        <div className='grid  max-w-full max-h-full  md:h-full md:w-full md:pr-20 bg-gray-900'>
                    <div className='text-white font-bold text-2xl p-10'>
                    Pleasure !  to hear from YOU
                <div className='text-gray-500 text-1xl p-10'>
                Have any queries, suggestion, or any compliments you can give us 
                a call, or send your message by filling a form....
                THANKS !
                </div>
                    </div>
            <div className='grid grid-cols-1 md:flex justify-center'>
                    <div className='flex space-x-5 pl-10 md:pr-40 items-center '>
                <span>
                <a className="text-blue-400 hover:text-blue-600" aria-label="Visit TrendyMinds LinkedIn" href="www.linkedin.com/in/ali-jan-23a6b8280" target="_blank">
                    <svg className='h-8 inline-block'
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
            <path fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
            </path>
        </svg>
    </a>
                </span>
                <span>
                <a className="text-red-600 hover:text-red-800" aria-label="Visit TrendyMinds YouTube" href="" target="_blank"><svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-8">
            <path fill="currentColor"
                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
            </path>
        </svg>
    </a>
                </span>
                    </div> 
                    <div className='p-8 w-10 '>
                <form action="/Contact">
                    <div className='p-1 text-gray-700'>
                    Name: <input className='bg-transparent bg-clip-content border-2 p-1 rounded-md' type="text" placeholder='Imran khan'/>
                    </div>
                    <div className='p-1 text-gray-700'>
                    Email: <input className='bg-transparent bg-clip-content border-2 px-3 rounded-md' type="text" placeholder='abc@something.com ' />
                    </div>
                    <div className='p-1 text-gray-700'>
                    Message: <br /> <textarea className='bg-transparent bg-clip-content border-2 p-1 rounded-md' name="mymsg" id="1" placeholder='Your precious words...' cols={30} rows={10}></textarea>
                    </div>
                    <div >
                        <input className='border-2 text-gray-500 p-2 rounded-md hover:bg-gray-600 hover:text-gray-900' type="submit" value="Submit" />
                    </div>
                </form>
                    </div>
            </div> 
        </div>
    </main>
  )
}

export default Contact