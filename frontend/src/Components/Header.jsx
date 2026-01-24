import { Link, NavLink } from "react-router-dom"
export default function Header() {
  return (
    <div className='sticky top-0 left-0 w-full bg-gray-800 text-white h-16 px-0 md:px-6 z-50 border-b-2 border-gray-500'>
      <div className='flex justify-between items-ceter max-w-6xl mx-auto p-4'>
        <Link to='/'><h1 className='font-bold text-white text-lg sm:text-left sm:text-sm md:text-2xl'>My Portfolio</h1></Link>
        <ul className='flex gap-2 md:gap-4 items-center '>
          <Link to='/' className=" text-white hover:text-blue-700 text-xs md:text-lg font-bold"><li>Home</li></Link>
          <Link to='/portfolio' className=" text-white  hover:text-blue-700 text-xs md:text-lg font-bold"><li>Portfolio</li></Link>
          
        </ul>
      </div>
    </div>
  )
}
