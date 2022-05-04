import React from "react";
import Header from "../components/Header";

function mainpage() {
  return (
    <main>
      <Header />
      <div
        id="upper-section"
        className="flex justify-around h-1/3 w-full py-20 "
      >
        <div id="rank-3" className="flex flex-col">
          <div id="photo" className="flex">
            <img
              className=" mt-16 ml-96 w-32 h-32 shadow-xl rounded-full"
              src="https://via.placeholder.com/170x170"
            />
          </div>
          <div id="name" className="flex flex-col ">
            <p className=" flex pl-14 ml-80 font-nunito text-xl font-extrabold text-center text-yellow-400">
              3<sup className="mt-4">rd</sup>
            </p>
            <p className=" flex -mt-4 pl-4  ml-96 font-nunito text-xl font-extrabold leading-9 text-center text-gray-800">
              John Doe
            </p>
            <p className=" pl-1 flex ml-96 font-nunito text-xl font-extrabold leading-9 text-center text-gray-800">
              Marks: 300
            </p>
          </div>
        </div>
        <div id="rank-1" className="flex flex-col">
          <img
            className="  w-44 h-44 shadow-xl rounded-full"
            src="https://via.placeholder.com/170x170"
          />
          <p className="flex font-nunito text-2xl font-extrabold text-center text-green-500">
            1<sup className="mt-4">st</sup>
          </p>
          <p className=" -mt-4 ml-3 flex font-nunito text-2xl font-extrabold leading-9 text-center text-gray-800">
            Anshul Bhatia
          </p>
          <p className="  flex ml-6 -mr-96 font-nunito text-2xl font-extrabold leading-9 text-center text-gray-800">
            Marks: 300
          </p>
        </div>
        <div id="rank-1" className="flex flex-col">
          <img
            className=" mt-16 mr-96 w-32 h-32 rounded-full shadow-xl"
            src="https://via.placeholder.com/170x170"
          />
          <p className=" flex -ml-3 font-nunito text-xl font-extrabold text-center text-blue-500">
            2<sup className="mt-4">nd</sup>
          </p>
          <p className=" -mt-4 flex pl-1 font-nunito text-xl font-extrabold leading-9 text-center text-gray-800">
            Faizan Haider
          </p>
          <p className="  flex font-nunito ml-2 text-xl font-extrabold leading-9 text-center text-gray-800">
            Marks: 300
          </p>
        </div>
      </div>
      <div id="rank-list" className=" h-2/3 w-full ">
        <div
          id="curr-user-rank"
          className="flex mb-12 mt-12 w-full h-20 pt-3 pb-3 pl-12 pr-12 justify-between items-center"
        >
          <div
            id="curr-user-rank-container"
            className="flex w-full flex-around ml-3 mr-6 items-center pt-4 pb-4 h-full  bg-gradient-to-tl  from-green-700 to-green-300 shadow rounded-2xl"
          >
            <div
              id="name"
              className="flex text-white pl-24 pr-12 text-lg font tracking-wider font-semibold font-nunito"
            >
              Mukesh Bhatia
            </div>
            <div className="flex-col text-white pl-12 pr-12  font-nunito">
              <p className=" text-sm flex">Total : </p>{" "}
              <p className="flex text-base font-semibold">207</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Physics: </p>{" "}
              <p className="flex text-base font-semibold">69</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Chemistry: </p>{" "}
              <p className="flex text-base font-semibold">69</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Maths: </p>{" "}
              <p className="flex text-base font-semibold">69</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Percentile: </p>{" "}
              <p className="flex text-base font-semibold tracking-wider">
                99.420
              </p>
            </div>
          </div>
        </div>
        <div
          id="rank-1"
          className="flex w-full h-20 pt-3 pb-3 pl-12 pr-12 justify-between items-center"
        >
          <div
            id="rank-container1"
            className="flex w-full flex-around ml-3 mr-6 items-center pt-4 pb-4 h-full  bg-gradient-to-tl from-blue-500 to-blue-400 shadow rounded-2xl"
          >
            <div
              id="name"
              className="flex text-white pl-24 pr-12 text-lg font tracking-wider font-semibold font-nunito"
            >
              Mukesh Bhatia
            </div>
            <div className="flex-col text-white pl-12 pr-12  font-nunito">
              <p className=" text-sm flex">Total : </p>{" "}
              <p className="flex text-base font-semibold">207</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Physics: </p>{" "}
              <p className="flex text-base font-semibold">69</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Chemistry: </p>{" "}
              <p className="flex text-base font-semibold">69</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Maths: </p>{" "}
              <p className="flex text-base font-semibold">69</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Percentile: </p>{" "}
              <p className="flex text-base font-semibold tracking-wider">
                99.420
              </p>
            </div>
          </div>
        </div>
        <div
          id="rank-2"
          className="flex w-full h-20 my-4 pt-3 pb-3 pl-12 pr-12 justify-between items-center"
        >
          <div
            id="rank-container2"
            className="flex w-full flex-around ml-3 mr-6 items-center pt-4 pb-4 h-full  bg-gradient-to-tl from-blue-500 to-blue-400 shadow rounded-2xl"
          >
            <div
              id="name"
              className="flex text-white pl-24 pr-12 text-lg font tracking-wider font-semibold font-nunito"
            >
              Mukesh Bhatia
            </div>
            <div className="flex-col text-white pl-12 pr-12  font-nunito">
              <p className=" text-sm flex">Total : </p>{" "}
              <p className="flex text-base font-semibold">207</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Physics: </p>{" "}
              <p className="flex text-base font-semibold">69</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Chemistry: </p>{" "}
              <p className="flex text-base font-semibold">69</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Maths: </p>{" "}
              <p className="flex text-base font-semibold">69</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Percentile: </p>{" "}
              <p className="flex text-base font-semibold tracking-wider">
                99.420
              </p>
            </div>
          </div>
        </div>
        <div
          id="rank-3"
          className="flex w-full h-20 my-4 pt-3 pb-3 pl-12 pr-12 justify-between items-center"
        >
          <div
            id="rank-container3"
            className="flex w-full flex-around ml-3 mr-6 items-center pt-4 pb-4 h-full  bg-gradient-to-tl from-blue-500 to-blue-400 shadow rounded-2xl"
          >
            <div
              id="name"
              className="flex text-white pl-24 pr-12 text-lg font tracking-wider font-semibold font-nunito"
            >
              Mukesh Bhatia
            </div>
            <div className="flex-col text-white pl-12 pr-12  font-nunito">
              <p className=" text-sm flex">Total : </p>{" "}
              <p className="flex text-base font-semibold">207</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Physics: </p>{" "}
              <p className="flex text-base font-semibold">69</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Chemistry: </p>{" "}
              <p className="flex text-base font-semibold">69</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Maths: </p>{" "}
              <p className="flex text-base font-semibold">69</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Percentile: </p>{" "}
              <p className="flex text-base font-semibold tracking-wider">
                99.420
              </p>
            </div>
          </div>
        </div>
        <div
          id="rank-4"
          className="flex w-full h-20 my-4 pt-3 pb-3 pl-12 pr-12 justify-between items-center"
        >
          <div
            id="rank-container4"
            className="flex w-full flex-around ml-3 mr-6 items-center pt-4 pb-4 h-full  bg-gradient-to-tl from-blue-500 to-blue-400 shadow rounded-2xl"
          >
            <div
              id="name"
              className="flex text-white pl-24 pr-12 text-lg font tracking-wider font-semibold font-nunito"
            >
              Mukesh Bhatia
            </div>
            <div className="flex-col text-white pl-12 pr-12  font-nunito">
              <p className=" text-sm flex">Total : </p>{" "}
              <p className="flex text-base font-semibold">207</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Physics: </p>{" "}
              <p className="flex text-base font-semibold">69</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Chemistry: </p>{" "}
              <p className="flex text-base font-semibold">69</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Maths: </p>{" "}
              <p className="flex text-base font-semibold">69</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Percentile: </p>{" "}
              <p className="flex text-base font-semibold tracking-wider">
                99.420
              </p>
            </div>
          </div>
        </div>
        <div
          id="rank-5"
          className="flex w-full h-20 my-4 pt-3 pb-3 pl-12 pr-12 justify-between items-center"
        >
          <div
            id="rank-container5"
            className="flex w-full flex-around ml-3 mr-6 items-center pt-4 pb-4 h-full  bg-gradient-to-tl from-blue-500 to-blue-400 shadow rounded-2xl"
          >
            <div
              id="name"
              className="flex text-white pl-24 pr-12 text-lg font tracking-wider font-semibold font-nunito"
            >
              Mukesh Bhatia
            </div>
            <div className="flex-col text-white pl-12 pr-12  font-nunito">
              <p className=" text-sm flex">Total : </p>{" "}
              <p className="flex text-base font-semibold">207</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Physics: </p>{" "}
              <p className="flex text-base font-semibold">69</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Chemistry: </p>{" "}
              <p className="flex text-base font-semibold">69</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Maths: </p>{" "}
              <p className="flex text-base font-semibold">69</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Percentile: </p>{" "}
              <p className="flex text-base font-semibold tracking-wider">
                99.420
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default mainpage;
