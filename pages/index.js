import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
export default function Home() {
  return (
    <main>
      <div id="container" className="flex justify-center w-full h-screen bg-[#F8FAFA] ">
        <section className="flex flex-col w-2/3 bg-white ">
          <div className="flex flex-col self-center mt-40">
              <div
                id="Potentio-logo"
                className="flex font-comfortaa bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-5xl ml-10 mb-10 "
              >
            Potentio
              </div>
              <input
                type="Name"
                className="flex pl-2 pr-4 mr-1 rounded-lg w-80 placeholder-grey text-7xs text  hover:shadow-lg shadow-inner  focus:outline-none  active:shadow-lg mb-10 "
                placeholder="Name"
              />
              <input
                type="Email"
                className="flex pl-2 pr-4 mr-1 rounded-lg w-80 placeholder-grey text-7xs text  hover:shadow-lg shadow-inner  focus:outline-none  active:shadow-lg mb-10"
                placeholder="Email"
              />
              <input
                type="Phone"
                className="flex pl-2 pr-4 mr-1 rounded-lg w-80 placeholder-grey text-7xs text  hover:shadow-lg shadow-inner focus:outline-none   active:shadow-lg mb-10"
                placeholder="Phone"
              />
              <button
                id="Save_and_next"
                className="bg-blue-600 pt-1.5 pb-2 h-10 w-28 pl-1.5 pr-1.5 text-center text-base tracking-wide rounded-xl cursor-pointer inline-block leading-tight shadow-md hover:shadow-md hover:shadow-gray-400 focus:ring-4 focus:shadow-lg focus:outline-none focus:ring-blue-700 active:bg-green-700 transition duration-150 ease-in-out mx-20"
                type="button"
              >
                <p className="font-nunito font-bold text-white inline-block">
                  Start
                </p>
              </button>
          </div>
        </section>
        <section className="flex flex-col w-1/3 h-full mt-40 ">
          <img src="login.png"></img>
        </section>
      </div>
    </main>
  );
}
