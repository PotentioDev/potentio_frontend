import axios from "axios";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import BarGraph from "../components/BarGraph";
import Header from "../components/Header";

function Mainpage() {
  const [data, setData] = useState({
    profiles: [],
  });
  useEffect(() => {
    axios.get("https://potentio-backend.herokuapp.com/api/results/get").then(
      (res) => {
        const toFill = [];
        res.data.forEach((profile) => {
          toFill.push({
            name: profile.name,
            Physics: profile.physics_marks,
            Chemistry: profile.chemistry_marks,
            Maths: profile.maths_marks,
            total: profile.maths_marks + profile.chemistry_marks + profile.physics_marks,
          });
        });
            if (localStorage.getItem("result")) {
      let result = JSON.parse(localStorage.getItem("result"));
      result["user"] = true;
      setData({
        ...data,
        profiles: [...data.profiles, ...toFill, result],
      });
    } else {
        setData({profiles: [...data.profiles, ...toFill]});
      }}
    )
  }, []);
  console.log(data);

  // Sort profiles by score
  let sortedProfiles = [];
  if (data.profiles !== undefined) {
    sortedProfiles = data.profiles.sort((a, b) => {
      return b.total - a.total;
    });
  }
  let me = null;
  for (let i = 0; i < sortedProfiles.length; i++)
    if (sortedProfiles[i].user) me = i;


  // useEffect(() => {
  //   console.log(JSON.parse(localStorage.getItem("result")));
  //   setData(JSON.parse(localStorage.getItem("result")));
  // }, []);

  console.log(data);
  if (me===null)
    return <div>Loading...</div>

  const subjectSort = [["Physics", sortedProfiles[me].Physics],
    ["Chemistry", sortedProfiles[me].Chemistry],
    ["Maths", sortedProfiles[me].Maths],];
  const sortedSubj = subjectSort.sort((a, b) => {
    return -1* (b[1] - a[1]);
  }).slice(0, 2);
  return (
    <main>
      <Header />
      <div id="container" className="flex flex-wrap mt-9 justify-center h-full">
        <div
          id="nav-buttons"
          className="flex w-7/12 pt-3 pb-3 pl-12 pr-12 h-1/4 justify-between items-center   select-none"
        >
          <Link href="/" passHref>
            <div
              id="back-to-home"
              className="bg-gradient-to-r from-purple-500 to-purple-800 hover:from-purple-500 hover:to-purple-500 active:from-purple-500 active:to-purple-800 w-1/3 h-12 ml-16 mr-16 rounded-2xl cursor-pointer pt-1.5 pb-2 pl-1.5 pr-1.5 text-center text-base tracking-wide inline-block leading-tight shadow-md hover:shadow-md hover:shadow-gray-400 hover:bg-red-800 active focus:ring-4 focus:shadow-lg focus:outline-none focus:ring-violet-400 transition duration-180 ease-in-out "
              type="button"
            >
              <p
                className="font-sans font-bold text-white inline-block"
                href="/competeZone"
              >
                Back to Home
              </p>
            </div>
          </Link>

          <Link href="/leaderboard" passHref>
            <button
              id="back-to-home"
              className="bg-gradient-to-r from-purple-500 to-purple-800 hover:from-purple-500 hover:to-purple-500 active:from-purple-500 active:to-purple-800 w-1/3 h-12 ml-16 mr-16 rounded-2xl cursor-pointer pt-1.5 pb-2 pl-1.5 pr-1.5 text-center text-base tracking-wide inline-block leading-tight shadow-md hover:shadow-md hover:shadow-gray-400 hover:bg-red-800 active focus:ring-4 focus:shadow-lg focus:outline-none focus:ring-violet-400 transition duration-180 ease-in-out "
              type="button"
            >
              <p className="font-sans font-bold text-white inline-block">
                Leaderboard
              </p>
            </button>
          </Link>
        </div>

        <div
          id="percentile-rank-marks"
          className="flex w-7/12 pt-3 pb-3 pl-12 pr-12 h-1/4 justify-between items-center   "
        >
          <div
            id="percentile-rank"
            className="flex justify-center w-6/12 pl-2 pr-2 ml-6 mr-3 rounded-2xl items-center pt-4 pb-4 h-full bg-gradient-to-r from-teal-400 to-emerald-400 drop-shadow-xl"
          >
            <div
              id="perentile-data"
              className="flex flex-col h-40 w-11/12 text-lg  rounded-2xl pt-3 pb-3 pl-2 pr-2 justify-center text-center font-nunito text-white bg-gradient-to-r from-teal-500 to-emerald-500 shadow-xl"
            >
              <div id="student-data" className="h-16">
                Total students appeared in Test: {sortedProfiles.length}
              </div>
              <div id="percentile">
                <b>Percentile:</b> {(sortedProfiles[me].total*100/45).toFixed(2)}{" "}
              </div>
              <div id="marks">
                <b>Marks:</b> {sortedProfiles[me].total}
              </div>
              <div id="rank">
                <b>Rank:</b> {me + 1}
              </div>
            </div>
          </div>

          <div
            id="percentile-rank"
            className="flex justify-center w-6/12 ml-3 mr-6 rounded-2xl items-center pt-4 pb-4 h-full bg-gradient-to-r from-emerald-400 to-teal-400 drop-shadow-xl"
          >
            <div
              id="perentile-data"
              className="flex flex-col h-40 w-10/12 text-lg  rounded-2xl pt-3 pb-3 justify-center text-center font-nunito text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-xl"
            >
              <div
                id="heading"
                className=" h-12 text-3xl font-nunito font-extrabold "
              >
                <b>Marks</b>
              </div>
              <div id="subject-1">
                <b>Physics:</b> {sortedProfiles[me].Physics}
              </div>
              <div id="subject-2">
                <b>Chemistry:</b>
                {sortedProfiles[me].Chemistry}
              </div>
              <div id="subject-3">
                <b>Maths:</b> {sortedProfiles[me].Maths}
              </div>

            </div>
          </div>
        </div>

        <div
          id="total-marks-analysis"
          className="flex w-7/12 pt-3 pb-3 pl-12 pr-12 h-1/5 justify-between items-center   "
        >
          <div
            id="marks-container"
            className="flex justify-center w-6/12 pl-2 pr-2 ml-6 mr-3 rounded-2xl items-center pt-4 pb-4 h-full bg-gradient-to-r from-sky-500 to-sky-300"
          >
            <div
              id="marks-upon-total"
              className="flex flex-col h-40 w-11/12 text-lg  rounded-2xl pt-3 pb-3 pl-2 pr-2 justify-center text-center font-nunito text-white bg-gradient-to-r from-sky-600 to-sky-400 drop-shadow"
            >
              <div id="marks" className="pb-2">
                Marks: {sortedProfiles[me].total}
              </div>
              <div
                id="line"
                className="border-t-4 border-white border-solid w-2/6 ml-24 pb-2 rounded-t-md rounded-b-3xl"
              ></div>
              <div id="total">
                <b>Total: 45</b>
              </div>
            </div>
          </div>

          <div
            id="weak-subs"
            className="flex justify-center w-6/12 ml-3 mr-6 rounded-2xl items-center pt-4 pb-4 h-full  bg-gradient-to-r from-sky-300 to-sky-500"
          >
            <div
              id="subs-container"
              className="flex flex-col h-40 w-10/12 text-lg  rounded-2xl pt-3 pb-3 justify-center text-center text-white bg-gradient-to-r from-sky-400 to-sky-600  drop-shadow"
            >
              <div
                id="subs-heading"
                className="h-16 text-xl pl-6 pr-6 font-extrabold"
              >
                <b>Subjects to be improved upon</b>
              </div>
              {sortedSubj.map((sub, index) => {
                    return <div id="subject-1" key={sub[0]}>{sub[0]}</div>
                  })}
            </div>
          </div>
        </div>

        {/* <div
          id="graph-analysis-points"
          className="flex w-7/12 pt-3 pb-3 pl-12 pr-12 h-1/4 justify-between items-center   "
        >
          <div
            id="graph-container1"
            className="flex justify-center w-full ml-3 mr-6 rounded-2xl items-center pt-4 pb-4 h-full  bg-gradient-to-r from-violet-600 to-violet-500"
          >
            <div
              id="graph-points"
              className="flex flex-col h-40 w-11/12 text-lg  rounded-2xl pt-3 pb-3 justify-center text-center text-white bg-gradient-to-r from-violet-800 to-violet-600  drop-shadow"
            ></div>
          </div>
        </div> */}

        {/* <div
            id="graph-analysis-bar"
            className="flex w-7/12 pt-3 pb-3 pl-12 pr-12 h-1/4 justify-between items-center   "
          >
            <div
              id="graph-container2"
              className="flex justify-center w-full ml-3 mr-6 rounded-2xl items-center pt-4 pb-4 h-full  bg-gradient-to-r from-fuchsia-600 to-fuchsia-400"
            >
              <div
                id="graph-bar"
                className="flex flex-col h-40 w-11/12 text-lg  rounded-2xl pt-3 pb-3 justify-center text-center text-white bg-gradient-to-r from-violet-800 to-violet-600   drop-shadow"
              ></div>
            </div>
          </div> */}
      </div>
      <div className="flex">
        <div className="m-auto mt-16">
                    <BarGraph
                p={sortedProfiles[me].Physics}
                c={sortedProfiles[me].Chemistry}
                m={sortedProfiles[me].Maths}
                /></div></div>
    </main>
  );
}

export default Mainpage;
