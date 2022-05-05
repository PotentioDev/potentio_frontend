import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import {Profiles} from "../data"
function Leaderboard() {
  const [data, setData] = useState({
    profiles: Profiles,
  });
  useEffect(() => {
    if (localStorage.getItem("result")) {
      let result = JSON.parse(localStorage.getItem("result"));
      result['user'] = true;
      setData({
        ...data,
        profiles: [...data.profiles, result],
      });
    }
  }, [])
  console.log(data)

  // Sort profiles by score
  const sortedProfiles = data.profiles.sort((a, b) => {
    return b.total - a.total;

  }
  );
  let me = null;
  for (let i = 0; i < sortedProfiles.length; i++)
    if (sortedProfiles[i].user) me = i;
  function generateLeaderboard() {
    const leaderboard = [];
    for (let i = 0; i < data.profiles.length; i++) {
      if (data.profiles[i].user)
        continue
      leaderboard.push(
                  <div
          id="rank-1"
          className="flex w-full h-20 pt-3 pb-3 pl-12 pr-12 justify-between items-center"
        >
                    {i + 1}
          <div
            id="rank-container1"
            className="flex w-full flex-around ml-3 mr-6 items-center pt-4 pb-4 h-full  bg-gradient-to-tl from-blue-500 to-blue-400 shadow rounded-2xl"
          >
            <div
              id="name"
              className="flex text-white pl-24 pr-12 text-lg font tracking-wider font-semibold font-nunito"
            >
              {sortedProfiles[i].name}
            </div>
            <div className="flex-col text-white pl-12 pr-12  font-nunito">
              <p className=" text-sm flex">Total : </p>{" "}
              <p className="flex text-base font-semibold">{sortedProfiles[i].total}</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Physics: </p>{" "}
              <p className="flex text-base font-semibold">{sortedProfiles[i].Physics}</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Chemistry: </p>{" "}
              <p className="flex text-base font-semibold">{sortedProfiles[i].Chemistry}</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Maths: </p>{" "}
              <p className="flex text-base font-semibold">{sortedProfiles[i].Maths}</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Percentile: </p>{" "}
              <p className="flex text-base font-semibold tracking-wider">
                {sortedProfiles[i].total*100/45}
              </p>
            </div>
          </div>
        </div>
      )
    }

    return leaderboard;

  }
  return (
    <main>
      <Header />
      <div
        id="upper-section"
        className="flex justify-around h-1/3 w-full pt-20 "
      >
        <div id="rank-3" className="flex flex-col">
          <div id="photo" className="flex">
            <img
              className=" mt-16 ml-96 w-32 h-32 shadow-xl rounded-full"
              src="https://i.imgur.com/XOAuRCQ.png"
            />
          </div>
          <div id="name" className="flex flex-col ">
            <p className=" flex pl-14 ml-80 font-nunito text-xl font-extrabold text-center text-yellow-400">
              3<sup className="mt-4">rd</sup>
            </p>
            <p className=" flex -mt-4 pl-4  ml-96 font-nunito text-xl font-extrabold leading-9 text-center text-gray-800">
              {sortedProfiles[2].name}
            </p>
            <p className=" pl-1 flex ml-96 font-nunito text-xl font-extrabold leading-9 text-center text-gray-800">
              Marks: {sortedProfiles[2].total}
            </p>
          </div>
        </div>
        <div id="rank-1" className="flex flex-col">
          <img
            className=" -mt-4 w-44 h-44 shadow-xl rounded-full"
            src="https://i.imgur.com/3JjvsmF.png"
          />
          <p className="flex font-nunito text-2xl font-extrabold text-center text-green-500">
            1<sup className="mt-4">st</sup>
          </p>
          <p className=" -mt-4 ml-3 flex font-nunito text-2xl font-extrabold leading-9 text-center text-gray-800">
            {sortedProfiles[0].name}
          </p>
          <p className="  flex ml-6 -mr-96 font-nunito text-2xl font-extrabold leading-9 text-center text-gray-800">
            Marks: {sortedProfiles[0].total}
          </p>
        </div>
        <div id="rank-1" className="flex flex-col">
          <img
            className=" mt-16 mr-96 w-32 h-32 rounded-full shadow-xl"
            src="https://i.imgur.com/QGkVJZn.png"
          />
          <p className=" flex -ml-3 font-nunito text-xl font-extrabold text-center text-blue-500">
            2<sup className="mt-4">nd</sup>
          </p>
          <p className=" -mt-4 flex pl-1 font-nunito text-xl font-extrabold leading-9 text-center text-gray-800">
            {sortedProfiles[1].name}
          </p>
          <p className="  flex font-nunito ml-2 text-xl font-extrabold leading-9 text-center text-gray-800">
            Marks: {sortedProfiles[1].total}
          </p>
        </div>
      </div>
      <div id="rank-list" className=" h-2/3 w-full ">
        {me!==null&&(<div
            id="curr-user-rank"
            className="flex mb-12 mt-12 w-full h-20 pt-3 pb-3 pl-12 pr-12 justify-between items-center"
        >
          {me + 1}
          <div
              id="curr-user-rank-container"
              className="flex w-full flex-around ml-3 mr-6 items-center pt-4 pb-4 h-full  bg-gradient-to-tl  from-green-700 to-green-300 shadow rounded-2xl"
          >
            <div
                id="name"
                className="flex text-white pl-24 pr-12 text-lg font tracking-wider font-semibold font-nunito"
            >
              {sortedProfiles[me].name}
            </div>
            <div className="flex-col text-white pl-12 pr-12  font-nunito">
              <p className=" text-sm flex">Total : </p>{" "}
              <p className="flex text-base font-semibold">{sortedProfiles[me].total}</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Physics: </p>{" "}
              <p className="flex text-base font-semibold">{sortedProfiles[me].Physics}</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Chemistry: </p>{" "}
              <p className="flex text-base font-semibold">{sortedProfiles[me].Chemistry}</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Maths: </p>{" "}
              <p className="flex text-base font-semibold">{sortedProfiles[me].Maths}</p>
            </div>
            <div className="flex-col text-white pl-12 pr-12 font-nunito">
              <p className=" text-sm flex">Percentile: </p>{" "}
              <p className="flex text-base font-semibold tracking-wider">
                {sortedProfiles[me].total*100/45}
              </p>
            </div>
          </div>
        </div>)
          }
        {generateLeaderboard()}
      </div>
    </main>
  );
}

export default Leaderboard;
