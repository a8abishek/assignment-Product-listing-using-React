import React from 'react'

function Navbar({ search, setSearch, cartCount }) {  
  return (
    <div className='flex justify-between py-5 shadow px-10 items-center bg-[#09193b] text-white flex-wrap'>
      {/*brand*/}
      <div>
        <h1 className='font-bold text-xl sm:text-[12px]'>A8V shop</h1>
      </div>
      {/* search input & Navbar*/}
      <div className='flex gap-x-20'>
         {/*input*/}
         <div>
          <input type="text"  placeholder='🔍   Search products...' value={search}  onChange={(item) => setSearch(item.target.value)} className='border border-white w-[500px] py-1 pl-5 rounded-xl text-white'  />
         </div>
         {/* Navbar*/}
         <div className='flex gap-x-20 '>
          <ul className='flex gap-x-10 items-center'>
            {/* lang */}
            <li className='flex items-center cursor-pointer'>En</li>
            {/* bell */}
            <li className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg></li>
            {/* Cart with COUNT */}
            <li className='cursor-pointer flex items-center gap-1 relative'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <span className='absolute -right-3.5 -top-3.5'>({cartCount})</span>
            </li>
          </ul>
          <button className='bg-[#3c97d6] px-5 text-white rounded-2xl cursor-pointer'> Login </button>
         </div>
      </div>
    </div>
  )
}

export default Navbar;
