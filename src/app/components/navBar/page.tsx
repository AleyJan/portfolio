
import { SheetDemo } from '@/app/sheet'
import Image from 'next/image'
import Link from 'next/link'




const Navbar = () => {
  return (
    <div className='flex flex-row text-black font-bold justify-between items-center p-1 md:p-3 w-full h-full bg-gradient-to-r from-slate-700 to-blue-950'>
      <div>
        <Link href={"/"}>
        <Image  src="/horse.png" alt="image" width={50} height={50} className='relative pl-3 hover:border-r-2 hover:border-slate-500 '/>
        </Link>
        
      </div> 
      <div> 
        <ul className='hidden md:flex space-x-6 '>
         <div className='hover:border-b-2 hover:border-b-slate-500'><Link href="/">Home</Link></div>   
          <div className='hover:border-b-2 hover:border-b-slate-500'><Link href={"/project"}>Projects</Link></div>  
          <div className='hover:border-b-2 hover:border-b-slate-500'><Link href={"/aboutMe"}>About Me</Link></div>  
           <div className=' hover:border-b-2 hover:border-b-slate-500'><Link href={"/Contact"}>Contact</Link></div> 
        </ul>
      </div>
      <div className='block md:hidden'>
      <SheetDemo/>
      </div>  
    </div>
    
  
  )}

export default Navbar