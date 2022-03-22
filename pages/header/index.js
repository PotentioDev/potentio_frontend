import React from 'react'

export default function Header() {
  return (
    <nav id="navigation-bar" className="flex mt-11 left-10 w-11/12 h-16 shadow-2xl rounded-full justify-start items-center">
      <div id="Potentio-logo" className="flex font-comfortaa bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-2xl m-8">Potentio</div>
      <ul id="Otions" className="flex space-x-12 list-none">
        {[
          ['Compete'],
          ['Membership'],
          ['Gym'],
          ['Dashboard'],
        ].map(([title])=>(
          <li className="font-nunito  text-xs">{title}</li>
        ))
        }
        {/* <li className="">Compete</li>
        <li >Membership</li>
        <li>Gym</li>
        <li>Dashboard</li> */}
      </ul>
    </nav>
  )
}