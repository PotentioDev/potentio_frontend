import React from 'react'

export default function Header() {
  return (
    <nav id="navigation-bar" className="flex mt-11 mx-12 w-9/10 h-16 shadow-2xl rounded-full justify-center items-center">
      <div id="Potentio-logo" className="flex font-comfortaa bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-2xl m-4">Potentio</div>
      <ul id="Otions" className="flex space-x-12 list-none mx-4">
        {[
          ['Compete'],
          ['Membership'],
          ['Gym'],
          ['Dashboard'],
        ].map(([title])=>(
          <li className="font-nunito text-xs">{title}</li>
        ))
        }
        {/* <li className="">Compete</li>
        <li >Membership</li>
        <li>Gym</li>
        <li>Dashboard</li> */}
      </ul>
      <div id="search-bar" className="flex mx-4">
      <input type="search" className="flex pl-5 pr-4 rounded-l-full w-80 placeholder-cyan-500 text-xs text shadow-md hover:shadow-lg  focus:outline-none focus:shadow-inner focus:ring-0  active:shadow-lg transition duration-150 ease-in-out" placeholder="Search"/>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7  w-9 pl-1 btn inline-block leading-tight uppercase rounded shadow-md fill-cyan-500 hover:shadow-lg active:bg-gradient-to-r from-cyan-500 to-blue-500 active:fill-white transition duration-150 ease-in-out items-center" type="button" id="button-addon2" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2 8a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 2 8z" clipRule="evenodd"/>
      </svg>
        </div>
        <div id="personal-info" className="flex mx-4 text-nunito text-right">
          <div className="mt-5">
            <p id="city-tier-info" className="text-xs text-slate-500 ">TIER S</p>
            <p id="name" className="text-cyan-500">Mohit Gupta</p>
          </div> 
          <div id="proficiency">
          <svg className="w-20 h-20">
        <circle
          className="text-gray-300"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r="20"
          cx="40"
          cy="40"
        />
        <circle
          className="text-sky-500"
          strokeWidth="5"
          strokeDasharray="circumference"
          strokeDashoffset="circumference - percent / 100 * circumference"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="20"
          cx="40"
          cy="40"
        />
      </svg>

      <span className=" text-lg text-blue-700" x-text="50"></span>
            </div>   
        </div>
    </nav>
    
  )
  
}