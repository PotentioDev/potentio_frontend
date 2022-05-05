import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
export default function ComingSoon() {
  return (
    <main>
      <Header />
      <div id="container" className="flex justify-center w-full h-full  ">
        <section className="flex flex-col w-2/3 ">
          <div className="flex flex-col self-center mt-40">
            <div id="Potentio-logo" className="flex flex-col font-comfortaa">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-5xl ml-12">
                Coming Soon
              </div>{" "}
              <div className=" mt-3 text-md text-grey-700 pb-60">
                We are working hard to get this page ready for you
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
