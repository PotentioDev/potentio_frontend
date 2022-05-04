import Header from "../components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div
        id="container"
        className="flex flex-col mt-9 jutify-around w-full h-full pb-6 divide-y "
      >
        <section
          id="top portion"
          className="flex flex-row justify-around  h-1/3 w-full  pb-6 ml-20 "
        >
          <div className="flex flex-wrap justify-start w-1/2 h-full py-40">
            <div className="flex ml-20 text-6xl w-3/5 font-nunitoEB text-gray-700">
              Compete
            </div>
            <div className="flex ml-20 text-6xl w-3/5 font-nunitoEB text-gray-700">
              Zone
            </div>
            <div className="flex">
              <p className="text-xl font-regular text-red-500 ml-20 pr-2">
                Unlock
              </p>
              <p className="text-xl font-regular">your potential</p>
            </div>
          </div>
          <div className="flex justify-start w-1/2 mr-20 h-full ">
            <div className="relative cardY h-[22rem] w-[32rem] mt-20">
              <div className="absolute left-10 bottom-10">
                <div className="justify-center cardY h-[18rem] w-[28rem] ">
                  <img
                    className="absolute centre top-[-50px]"
                    src="run.png"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="bottom portion"
          className="flex justify-center flex-row h-2/3 w-full "
        >
          <div>
            <p className=" flex justify-start font-nunitoEB text-2xl text-gray-700 pl-20 pb-5">
              {" "}
              Short Test
            </p>
            <div className="flex justify-center flex-row">
              <div className="mx-[3em] cardB transition duration-500 hover:scale-110 relative">
                <img className="absolute right-0 bottom-0 "src="shield.png"></img>
                <div className="absolute top-20 left-3">
                  <p className="font-nunitoEB text-2xl text-white text-right ">5 Minute</p>
                  <p className="font-nunitoEB text-2xl text-white text-right ">Duel</p>
                </div>
                
              </div>
              <div className="mx-[3em] cardPk transition duration-500 hover:scale-110 relative ">
                <img className="absolute right-0 bottom-0 "src="eliminated.png"></img>
                <div className="absolute top-20 left-3">
                  <p className="font-nunitoEB text-2xl text-white text-right ">Timed</p>
                  <p className="font-nunitoEB text-2xl text-white text-right ">Test</p>
                </div>
              </div>
              <div className="mx-[3em] cardPl transition duration-500 hover:scale-110  relative">
                <img className="absolute right-0 bottom-0 "src="triangle.png"></img>
                <div className="absolute top-20 left-3">
                  <p className="font-nunitoEB text-2xl text-white text-right ">Elimination</p>
                  <p className="font-nunitoEB text-2xl text-white text-right ">Test</p>
                </div>
              </div>
            </div>
            <p className=" flex justify-start font-nunitoEB text-2xl text-gray-700 pl-20 pb-5 mt-20">
              {" "}
              Custom Test
            </p>
            <div className="flex justify-center flex-row">
              <div className="mx-[4em] cardG transition duration-500 hover:scale-110 relative">
                <img className="absolute left-10 bottom-0 "src="rings.png"></img>
                <div className="absolute top-20 left-10">
                  <p className="font-nunitoEB text-2xl text-white text-right ">Personalised</p>
                  <p className="font-nunitoEB text-2xl text-white text-right ">Test</p>
                </div>
              </div>
              <div className="mx-[4em] cardR transition duration-500 hover:scale-110 relative">
                <img className="absolute left-10 bottom-0 "src="bromine.png"></img>
                <div className="absolute top-20 left-10">
                  <p className="font-nunitoEB text-2xl text-white text-right ">Custom</p>
                  <p className="font-nunitoEB text-2xl text-white text-right ">Test</p>
                </div>
              </div>
            </div>
            <p className=" flex justify-start font-nunitoEB text-2xl text-gray-700 pl-20 pb-5 mt-20">
              {" "}
              Long Test
            </p>
            <div className="flex justify-center flex-row">
              <div className="mx-[3em] cardB transition duration-500 hover:scale-110 relative">
                <img className="absolute right-0 bottom-0 "src="shield.png"></img>
                <div className="absolute top-20 left-3">
                  <p className="font-nunitoEB text-2xl text-white text-right ">5 Minute</p>
                  <p className="font-nunitoEB text-2xl text-white text-right ">Duel</p>
                </div>
                
              </div>
              <div className="mx-[3em] cardPk transition duration-500 hover:scale-110 relative ">
                <img className="absolute right-0 bottom-0 "src="eliminated.png"></img>
                <div className="absolute top-20 left-3">
                  <p className="font-nunitoEB text-2xl text-white text-right ">Timed</p>
                  <p className="font-nunitoEB text-2xl text-white text-right ">Test</p>
                </div>
              </div>
              <div className="mx-[3em] cardPl transition duration-500 hover:scale-110 relative">
                <img className="absolute right-0 bottom-0 "src="triangle.png"></img>
                <div className="absolute top-20 left-3">
                  <p className="font-nunitoEB text-2xl text-white text-right ">Elimination</p>
                  <p className="font-nunitoEB text-2xl text-white text-right ">Test</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
