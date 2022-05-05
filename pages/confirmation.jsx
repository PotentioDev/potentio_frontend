
export default function Home() {
    return (
      <main>
        <div id="container" className="flex justify-center w-full h-full  bg-[#F8FAFA] ">
          <section className="flex flex-col w-2/3 justify-items-center bg-white ">
            <div className="flex flex-col self-center mt-40">
                <div
                  id="Potentio-logo"
                  className="flex font-comfortaa bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-5xl ml-16 mb-10 "
                >
              Potentio
                </div>
                <div className="flex w-96 ml-1 mb-3">
                    The following window shows a declaration that no plagiarism will be done and that the test will be given with complete honesty.<br/> Please enter your name and click submit to confirm.
                </div>
                <input
                  type="Name"
                  className="flex mb-5 pl-2 pr-4 mr-1 rounded-lg w-80 placeholder-grey text-lg text  hover:shadow-lg shadow-inner  focus:outline-none  active:shadow-lg  "
                  placeholder="Name"
                />
                <div className="flex w-96 ml-1 -mb-4 ">
                    The following window shows a declaration that no plagiarism will be done and that the test will be given with complete honesty.<br/> Please enter your name and click submit to confirm.
                </div>
                <ul class="grid grid-cols-3 gap-x-5 ml-24 m-10 max-w-md mx-auto">
                    <li class="relative">
                        <input class="sr-only peer" type="radio" value="yes" name="answer" id="answer_yes"/>
                        <label class="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent w-20" for="answer_yes">Yes</label>

                        <div class="absolute hidden w-6 h-5 peer-checked:block top-5 right-3">
                        👍
                        </div>
                    </li>
                    <li class="relative">
                        <input class="sr-only peer" type="radio" value="no" name="answer" id="answer_no"/>
                        <label class="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent w-20" for="answer_no">No</label>

                        <div class="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                        👎
                        </div>
                    </li>

                    
                    </ul>
                
                <button
                  id="Save_and_next"
                  className="bg-blue-600 pt-1.5 pb-2 h-10 w-28 pl-1.5 ml-32 mb-20 pr-1.5 text-center text-base tracking-wide rounded-xl cursor-pointer inline-block leading-tight shadow-md hover:shadow-md hover:shadow-gray-400 focus:ring-4 focus:shadow-lg focus:outline-none focus:ring-blue-700 active:bg-green-700 transition duration-150 ease-in-out mx-20"
                  type="button"
                >
                  <p className="font-nunito font-bold text-white inline-block">
                    Start
                  </p>
                </button>
            </div>
          </section>
         
        </div>
      </main>
    );
  }
  