import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './header'
export default function Home() {
  return (
    <main>
      <Header/>
      <div id="container" className="flex flex-col mt-9 justify-center w-full h-full pb-6 divide-y ">
        <section id="top portion" className="flex flex-row h-1/3 w-full  pb-6 ">
          <div className="flex flex-col w-1/3 h-full  pl-40 py-40 ">
                <p class="flex flex-row w-full text-6xl font-comfortaa text-gray-700">Compete Zone</p>
                <div className="flex flex-row">
                  <p class="text-xl font-regular text-red-500 pr-2">Unlock</p>
                  <p class="text-xl font-regular">your potential</p>
                </div>    
          </div>
          <div className="flex flex-col  w-2/3 h-full ">
              <div className="relative cardY h-[22rem] w-[32rem]  ml-80 mt-20">
                <div className="absolute left-10 bottom-10">
                  <div className="relative justify-center cardY h-[18rem] w-[28rem] ">
                    <img className="absolute centre top-[-50px]" src="run.png"></img>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section id="bottom portion" className="flex justify-center flex-row h-2/3 w-full ">
          <div>
            <p className=" flex justify-start font-comfortaa text-2xl text-gray-700 pl-20 pb-5"> Short Test</p>
            <div className="flex justify-center flex-row">
              <div className="mx-[3em] cardB "></div>
              <div className="mx-[3em] cardPk "></div>
              <div className="mx-[3em] cardPl "></div>
            </div>
            <p className=" flex justify-start font-comfortaa text-2xl text-gray-700 pl-20 pb-5 mt-20"> Custom Test</p>
            <div className="flex justify-center flex-row">
              <div className="mx-[4em] cardG "></div>
              <div className="mx-[4em] cardR "></div>
            </div>
            <p className=" flex justify-start font-comfortaa text-2xl text-gray-700 pl-20 pb-5 mt-20"> Long Test</p>
            <div className="flex justify-center flex-row">
              <div className="mx-[3em] cardB "></div>
              <div className="mx-[3em] cardPk "></div>
              <div className="mx-[3em] cardPl "></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
