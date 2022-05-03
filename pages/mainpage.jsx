import React from 'react'
import Header from './header' 

function mainpage() {
  return (
    <main>
    <Header/>
    <div id="container" className="flex flex-wrap mt-9 justify-center h-full border-2 border-black">
      
      <div id="percentile-rank-marks" className="flex w-7/12 pt-3 pb-3 pl-12 pr-12 h-1/4 justify-between items-center border-2 border-black ">
        
        <div id="percentile-rank" className="flex justify-center w-6/12 pl-2 pr-2 ml-6 mr-3 rounded-2xl items-center pt-4 pb-4 h-full bg-gradient-to-r from-teal-400 to-emerald-400 drop-shadow-xl">
          <div id="perentile-data" className="flex flex-col h-40 w-11/12 text-lg  rounded-2xl pt-3 pb-3 pl-2 pr-2 justify-center text-center font-nunito text-white bg-gradient-to-r from-teal-500 to-emerald-500 shadow-xl">
              <div id="student-data" className="h-16">Total students appeared in Test - xyz </div> 
              <div id="percentile"><b>Percentile:</b> 0000  </div>
              <div id="rank"><b>Rank:</b> 0000</div>
          </div>
        </div>

        <div id="percentile-rank" className="flex justify-center w-6/12 ml-3 mr-6 rounded-2xl items-center pt-4 pb-4 h-full bg-gradient-to-r from-emerald-400 to-teal-400 drop-shadow-xl">
          <div id="perentile-data" className="flex flex-col h-40 w-10/12 text-lg  rounded-2xl pt-3 pb-3 justify-center text-center font-nunito text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-xl">
            <div id="heading" className=" h-12 text-3xl font-nunito font-extrabold "><b>Marks</b></div> 
            <div id="subject-1" ><b>Subject 1:</b> 000  </div>
            <div id="subject-2"><b>Subject 2:</b> 000</div>
            <div id="subject-3"><b>Subject 3:</b> 000</div>
          </div>
        </div>

      </div>

      <div id="total-marks-analysis" className="flex w-7/12 pt-3 pb-3 pl-12 pr-12 h-1/4 justify-between items-center border-2 border-black ">
        
        <div id="marks-container" className="flex justify-center w-6/12 pl-2 pr-2 ml-6 mr-3 rounded-2xl items-center pt-4 pb-4 h-full bg-gradient-to-r from-sky-500 to-sky-300">
          <div id="marks-upon-total" className="flex flex-col h-40 w-11/12 text-lg  rounded-2xl pt-3 pb-3 pl-2 pr-2 justify-center text-center font-nunito text-white bg-gradient-to-r from-sky-600 to-sky-400 drop-shadow">
              <div id="marks" className="pb-2">Marks </div> 
              <div id="line" className="border-t-4 border-white border-solid w-2/6 ml-20 pb-2 rounded-t-md rounded-b-3xl"></div>
              <div id="total"><b>Total</b></div>
          </div>
        </div>

        <div id="weak-subs" className="flex justify-center w-6/12 ml-3 mr-6 rounded-2xl items-center pt-4 pb-4 h-full  bg-gradient-to-r from-sky-300 to-sky-500">
          <div id="subs-container" className="flex flex-col h-40 w-10/12 text-lg  rounded-2xl pt-3 pb-3 justify-center text-center text-white bg-gradient-to-r from-sky-400 to-sky-600  drop-shadow">
            
            <div id="subs-heading" className="h-16 text-xl pl-6 pr-6 font-extrabold"><b>Top Weak Subjects</b></div>
            <div id="subject-1" >Subject 1</div>
            <div id="subject-2">Subject 2</div>
            <div id="subject-3">Subject 3</div>
          </div>
        </div>

      </div>

      <div id="graph-analysis-points" className="flex w-7/12 pt-3 pb-3 pl-12 pr-12 h-1/4 justify-between items-center border-2 border-black ">
        <div id="graph-container1" className="flex justify-center w-full ml-3 mr-6 rounded-2xl items-center pt-4 pb-4 h-full  bg-gradient-to-r from-violet-600 to-violet-500">
          <div id="graph-points" className="flex flex-col h-40 w-11/12 text-lg  rounded-2xl pt-3 pb-3 justify-center text-center text-white bg-gradient-to-r from-violet-800 to-violet-600  drop-shadow">

          </div>
        </div>
      </div>
      
      <div id="graph-analysis-bar" className="flex w-7/12 pt-3 pb-3 pl-12 pr-12 h-1/4 justify-between items-center border-2 border-black ">
        <div id="graph-container2" className="flex justify-center w-full ml-3 mr-6 rounded-2xl items-center pt-4 pb-4 h-full  bg-gradient-to-r from-fuchsia-600 to-fuchsia-400">
          <div id="graph-bar" className="flex flex-col h-40 w-11/12 text-lg  rounded-2xl pt-3 pb-3 justify-center text-center text-white bg-gradient-to-r from-violet-800 to-violet-600   drop-shadow">
            
          </div>
        </div>
      </div>

    </div>
    </main>
  )
}

export default mainpage