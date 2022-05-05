import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useTimer} from "react-timer-hook";
import {All_Questions} from "../data";

export default function MainTestingZone() {
  const [data, setData] = useState({
    currentQuestion: 0,
    questions: All_Questions.sort(() => 0.5 - Math.random()).slice(0, 10),
    filled_responses: Array(10).fill(-1),
    marked_for_review: Array(10).fill(false),
    visited_questions: Array(10).fill(false),
  });
  const time = new Date();
      time.setSeconds(time.getSeconds() + 600);
  useEffect(() => {
    setData({
      ...data,
      visited_questions: data.visited_questions.map((value, index) => {
        if (index === data.currentQuestion) {
          return true;
        }
        return value;
      }),
    })
  }, [data.currentQuestion]);

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ time, onExpire: () => console.warn('onExpire called')});

  function next() {
    setData({
      ...data,
      currentQuestion: (data.currentQuestion + 1)%10,
    }
    );
  }
  console.log(data)

  function back() {
    setData({
      ...data,
      currentQuestion: (data.currentQuestion - 1)%10,
    }
    );
  }

  useEffect(() => {
            const time = new Date();
        time.setSeconds(time.getSeconds() + 600);
        restart(time)
  }, [])

  function generate_question_boxes() {
      const questions = [];
    for (let i = 0; i <= 9; i++) {
      questions.push(<button
          onClick={() => {
            setData({...data,
                          currentQuestion: i,
            });
          }}
        className=" h-12 w-12 shadow-md shad shadow-gray-200 rounded-lg hover:shadow-md hover:shadow-gray-400 focus:ring-2 focus:shadow-lg focus:outline-none focus:ring-blue-700 active:bg-gray-100 transition duration-150 ease-in-out"
        style={{"background-color": data.visited_questions[i]===false?"white":(data.marked_for_review[i]===true?"#7e54bb":(data.filled_responses[i]!==-1?"#34d26a":"#d23434")), "color": data.visited_questions[i]===true?"white":"black"}}>
      <p className="inline-block mt-0.5">{i+1}</p>
    </button>);
    }

    return questions;
}
function generate_options() {
  const options = [];
  for (let i = 0; i < data.questions[data.currentQuestion].Options.length; i++) {
    options.push(
        <div className="text-gray-700 w-44 p-4">
          <input type="radio" value="" name="user-answer"/>
          <span className=" ml-0.5">{data.questions[data.currentQuestion].Options[i]}</span>
        </div>
    )
  }
  return options;
}

  function save() {
    console.log("save called")
  }

  function markForReview() {
    setData({
      ...data,
      marked_for_review: data.marked_for_review.map((value, index) => {
        if (index === data.currentQuestion) {
          return !value;
        }
        return value;
      }),
    });
  }

  return (
    <main>
      <div
        id="container"
        className="flex mt-2 justify-center w-full h-full pb-6 "
      >
        <section id="left-section" className="flex flex-col w-7/12  text-2xl">
          <div
            id="question-container"
            className="flex-col pl-8 mb-5 rounded-3xl shadow-inner shadow-gray-400 h-11/12 font-comfortaa"
          >
            <header
              id="question-number"
              className="border-b-2 border-black w-96 pb-2 mb-6"
            >
              <p className="pt-8">Question {data.currentQuestion + 1}</p>
            </header>

            <div id="question" className="w-auto h-64">
                {data.questions[data.currentQuestion].Question_Text}
              {data.questions[data.currentQuestion].Image?<img src={data.questions[data.currentQuestion].Image}/>:""}
            </div>

            <div className=" mt-1 flex flex-wrap w-8/12 justify-between pb-4 grid grid-cols-2">
              {generate_options()}
            </div>
          </div>
          <div
            id="options"
            className="flex p-8 pl-0 pb-1 pr-3 rounded-3xl shadow-inner shadow-gray-400 select-none"
          >
            <div
              id="left-half"
              className="flex flex-wrap w-5/12 ml-4 mt-3 h-36 justify-between"
            >
              <button
                id="Save_and_next"
                className="bg-green-600 pt-1.5 pb-2 h-10 w-28 pl-1.5 pr-1.5 text-center text-base tracking-wide rounded-xl cursor-pointer inline-block leading-tight shadow-md hover:shadow-md hover:shadow-gray-400 focus:ring-4 focus:shadow-lg focus:outline-none focus:ring-blue-700 active:bg-green-700 transition duration-150 ease-in-out "
                type="button"
                onClick={() => {
                  save();
                  next();
                }}
              >
                <p className="font-sans font-bold text-white inline-block">
                  Save & Next
                </p>
              </button>
              <button
                id="Clear"
                className=" pt-1 pb-2 pl-2.5 pr-2.5 h-10 w-28 text-center tracking-wide text-base rounded-xl cursor-pointer inline-block leading-tight shadow-md hover:shadow-md hover:shadow-gray-400 active:bg-gray-100 focus:ring-2 focus:shadow-lg focus:outline-none focus:ring-blue-700 transition duration-150 ease-in-out"
                type="button"
              >
                <p className=" font-sans font-semibold text-gray-600 inline-block">
                  Clear
                </p>
              </button>
              <button
                id="Back"
                className="pt-1 pb-2 pl-2.5 pr-2.5 h-10 w-28 text-center tracking-wide text-base rounded-xl cursor-pointer inline-block leading-tight shadow-md hover:shadow-md hover:shadow-gray-400 active:bg-gray-100 focus:ring-2 focus:shadow-lg focus:outline-none focus:ring-blue-700 transition duration-150 ease-in-out"
                type="button"
                onClick={back}
              >
                <p className=" font-sans font-semibold text-gray-600 inline-block">
                  &#8810;Back
                </p>
              </button>
              <button
                id="Next"
                className="mb-6 pt-1 pb-2 pl-2.5 pr-2.5 h-10 w-28 text-center tracking-wide text-base rounded-xl cursor-pointer inline-block leading-tight shadow-md hover:shadow-md hover:shadow-gray-400 active:bg-gray-100 focus:ring-2 focus:shadow-lg focus:outline-none focus:ring-blue-700 transition duration-150 ease-in-out"
                type="button"
                onClick={next}
              >
                <p className=" font-sans font-semibold text-gray-600 inline-block">
                  Next&#8811;
                </p>
              </button>
            </div>

            <div
              id="right-half"
              className="flex flex-wrap mt-3 w-10/12 pl-3 justify-around"
            >
              <button
                id="save_and_mark_for_review"
                className=" bg-amber-500 pt-1.5 pb-1.5 h-10 w-52 text-center tracking-wide text-white text-base rounded-xl inline-block leading-tight shadow-md hover:shadow-md hover:shadow-gray-400 focus:ring-4 focus:shadow-lg focus:outline-none focus:ring-blue-700 active:bg-amber-600 transition duration-150 ease-in-out "
                type="button"
                onClick={() => {
                  save();
                  markForReview();
                }}
              >
                <p className="font-sans font-bold text-white inline-block">
                  Save & mark for Review
                </p>
              </button>
              <button
                id="Save_and_next"
                className="mb-5 pt-1 pb-1.5 h-10 w-52 text-center tracking-wide text-base rounded-xl inline-block leading-tight shadow-md hover:shadow-md hover:shadow-gray-400 active:bg-gray-100 focus:ring-2 focus:shadow-lg focus:outline-none focus:ring-blue-700 transition duration-150 ease-in-out"
                type="button"
                onClick={() => {
                  markForReview();
                  next();
                }}
              >
                <p className=" font-sans font-semibold text-gray-600 inline-block">
                  Mark for Review & Next
                </p>
              </button>
              <Link href={"result"} passHref>
                <button
                  id="Save_and_next"
                  className="bg-green-600 ml-72 h-10 mb-11 pt-2 pb-5 pl-2.5 pr-2.5 w-32 text-center tracking-wide text-base rounded-xl inline-block leading-tight shadow-md hover:shadow-md hover:shadow-gray-400 focus:ring-2 focus:shadow-lg focus:outline-none focus:ring-blue-700 active:bg-green-700 transition duration-150 ease-in-out"
                  type="button"
                  onClick={() => {
                    save();
                    next();
                  }}
                >
                  <p className=" font-sans font-bold text-white inline-block">
                    Submit
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section
          id="right-section"
          className="flex flex-wrap justify-center shadow-inner p-4 shadow-gray-400 w-4/12 ml-5 pt-8 rounded-3xl"
        >
          <div id="clock" className="flex justify-around font-sans h-8 w-52">
            <span id="icon" className="flex pr-1 mt-1">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z" />
              </svg>
            </span>
            <span id="hours" className=" text-2xl font-medium">
              {hours}
            </span>
            <span id="hr" className="pt-2">
              hr
            </span>
            <span id="minutes" className="text-2xl font-medium">
              {minutes}
            </span>
            <span id="mins" className="pt-2">
              min
            </span>
            <span id="seconds" className="text-2xl font-medium">
              {seconds}
            </span>
            <span id="secs" className="pt-2">
              sec
            </span>
          </div>

          <div
            id="legend"
            className="flex w-11/12 pt-3 mt-3 mb-4 text-xs flex-wrap align-middle h-52 border-2 border-dashed border-black"
          >
            <div id="done" className="flex h-20 ml-4">
              <div id="done-icon" className="flex h-16 w-20">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#a)">
                    <path
                      d="M11.973 17.49c-.12-3.65 3.022-6.56 6.652-6.161l46.952 5.157a6 6 0 0 1 5.344 5.964v25.657a6 6 0 0 1-4.878 5.894L20.388 62.69c-3.618.689-6.997-2.016-7.118-5.697L11.973 17.49Z"
                      fill="#34D26A"
                    />
                  </g>
                  <path
                    d="M39.683 41c-.48 0-.72-.235-.72-.704 0-.459.24-.688.72-.688h1.952v-7.984l-1.504.96c-.203.128-.395.165-.576.112a.771.771 0 0 1-.4-.336.773.773 0 0 1-.08-.512c.043-.192.165-.352.368-.48l2.208-1.392c.181-.107.352-.192.512-.256.17-.075.33-.112.48-.112a.64.64 0 0 1 .448.16c.128.107.192.272.192.496v9.344h1.792c.49 0 .736.23.736.688 0 .47-.245.704-.736.704h-5.392Z"
                    fill="#fff"
                  />
                  <defs>
                    <filter
                      id="a"
                      x=".971"
                      y=".292"
                      width="88.951"
                      height="81.504"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="4" dy="4" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix values="0 0 0 0 0.858507 0 0 0 0 0.858507 0 0 0 0 0.858507 0 0 0 0.35 0" />
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_977_141"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="2" dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix values="0 0 0 0 0.925174 0 0 0 0 0.925174 0 0 0 0 0.925174 0 0 0 0.25 0" />
                      <feBlend
                        in2="effect1_dropShadow_977_141"
                        result="effect2_dropShadow_977_141"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect2_dropShadow_977_141"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <p className=" font-nunito font-semibold pt-7 -ml-1">Done</p>
            </div>

            <div id="review" className="flex h-20 ml-10">
              <div id="review-icon" className="flex h-20 w-16 ">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#a)">
                    <rect
                      x="11"
                      y="11"
                      width="52"
                      height="52"
                      rx="26"
                      fill="#7E54BB"
                    />
                  </g>
                  <path
                    d="M34.683 41c-.48 0-.72-.235-.72-.704 0-.459.24-.688.72-.688h1.952v-7.984l-1.504.96c-.203.128-.395.165-.576.112a.771.771 0 0 1-.4-.336.773.773 0 0 1-.08-.512c.043-.192.165-.352.368-.48l2.208-1.392c.181-.107.352-.192.512-.256.17-.075.33-.112.48-.112a.64.64 0 0 1 .448.16c.128.107.192.272.192.496v9.344h1.792c.49 0 .736.23.736.688 0 .47-.245.704-.736.704h-5.392Z"
                    fill="#fff"
                  />
                  <defs>
                    <filter
                      id="a"
                      x="0"
                      y="0"
                      width="82"
                      height="82"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="4" dy="4" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix values="0 0 0 0 0.858507 0 0 0 0 0.858507 0 0 0 0 0.858507 0 0 0 0.35 0" />
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_977_147"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="2" dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix values="0 0 0 0 0.925174 0 0 0 0 0.925174 0 0 0 0 0.925174 0 0 0 0.25 0" />
                      <feBlend
                        in2="effect1_dropShadow_977_147"
                        result="effect2_dropShadow_977_147"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect2_dropShadow_977_147"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <p className="flex flex-wrap pl-2 w-24  font-nunito font-semibold pt-5 -ml-1">
                Marked for Review
              </p>
            </div>

            <div id="not-done" className="flex h-20 w-36 ml-4">
              <div id="not-done-icon" className="flex h-20 w-20">
                <svg
                  width="90"
                  height="82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#a)">
                    <path
                      d="M11.973 17.49c-.12-3.65 3.022-6.56 6.652-6.161l46.952 5.157a6 6 0 0 1 5.344 5.964v25.657a6 6 0 0 1-4.878 5.894L20.388 62.69c-3.618.689-6.997-2.016-7.118-5.697L11.973 17.49Z"
                      fill="#D23434"
                    />
                  </g>
                  <path
                    d="M39.683 41c-.48 0-.72-.235-.72-.704 0-.459.24-.688.72-.688h1.952v-7.984l-1.504.96c-.203.128-.395.165-.576.112a.771.771 0 0 1-.4-.336.773.773 0 0 1-.08-.512c.043-.192.165-.352.368-.48l2.208-1.392c.181-.107.352-.192.512-.256.17-.075.33-.112.48-.112a.64.64 0 0 1 .448.16c.128.107.192.272.192.496v9.344h1.792c.49 0 .736.23.736.688 0 .47-.245.704-.736.704h-5.392Z"
                    fill="#fff"
                  />
                  <defs>
                    <filter
                      id="a"
                      x=".971"
                      y=".292"
                      width="88.951"
                      height="81.504"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="4" dy="4" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix values="0 0 0 0 0.858507 0 0 0 0 0.858507 0 0 0 0 0.858507 0 0 0 0.35 0" />
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_977_144"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="2" dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix values="0 0 0 0 0.925174 0 0 0 0 0.925174 0 0 0 0 0.925174 0 0 0 0.25 0" />
                      <feBlend
                        in2="effect1_dropShadow_977_144"
                        result="effect2_dropShadow_977_144"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect2_dropShadow_977_144"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <p className=" w-20 font-nunito font-semibold pt-7 -ml-1">
                Not Done
              </p>
            </div>

            <div id="done-review" className="flex h-20 w-44">
              <div id="done-review-icon" className="flex h-16 w-20">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#a)">
                    <rect
                      x="11.799"
                      y="11"
                      width="52"
                      height="52"
                      rx="26"
                      fill="#7E54BB"
                    />
                  </g>
                  <rect
                    x="44.799"
                    y="42"
                    width="21"
                    height="21"
                    rx="10.5"
                    fill="#34D26A"
                  />
                  <path
                    d="M35.482 42c-.48 0-.72-.235-.72-.704 0-.459.24-.688.72-.688h1.952v-7.984l-1.504.96c-.203.128-.395.165-.576.112a.771.771 0 0 1-.4-.336.773.773 0 0 1-.08-.512c.043-.192.165-.352.368-.48l2.208-1.392c.181-.107.352-.192.512-.256.17-.075.33-.112.48-.112a.64.64 0 0 1 .448.16c.128.107.192.272.192.496v9.344h1.792c.49 0 .736.23.736.688 0 .47-.245.704-.736.704h-5.392Z"
                    fill="#fff"
                  />
                  <defs>
                    <filter
                      id="a"
                      x=".799"
                      y="0"
                      width="82"
                      height="82"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="4" dy="4" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix values="0 0 0 0 0.858507 0 0 0 0 0.858507 0 0 0 0 0.858507 0 0 0 0.35 0" />
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_977_150"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="2" dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix values="0 0 0 0 0.925174 0 0 0 0 0.925174 0 0 0 0 0.925174 0 0 0 0.25 0" />
                      <feBlend
                        in2="effect1_dropShadow_977_150"
                        result="effect2_dropShadow_977_150"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect2_dropShadow_977_150"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <p className="flex flex-wrap w-40 font-nunito font-semibold pt-5 -ml-3">
                Done and Marked for Review
              </p>
            </div>
          </div>

          {/*<div*/}
          {/*  id="subject"*/}
          {/*  className="flex justify-center w-11/12 h-8 mb-4 text-nunito text-gray-700 text-base font-semibold tracking-wide"*/}
          {/*>*/}
          {/*  <button*/}
          {/*    id="physics"*/}
          {/*    className="flex justify-center mr-1.5 w-24 text-center rounded-xl shadow-xl shadow-gray-200 hover:shadow-xl hover:shadow-gray-300 focus:shadow-lg focus:outline-none  focus:bg-green-300 active:bg-green-300 transition duration-150 ease-in-out"*/}
          {/*  >*/}
          {/*    <p className="inline-block mt-0.5">Physics</p>*/}
          {/*  </button>*/}

          {/*  <button*/}
          {/*    id="chemistry"*/}
          {/*    className="flex justify-center mr-1.5 w-24 rounded-xl shadow-xl shadow-gray-200 hover:shadow-xl hover:shadow-gray-300 focus:shadow-lg focus:outline-none  focus:bg-green-300 active:bg-green-300 transition duration-150 ease-in-out"*/}
          {/*  >*/}
          {/*    <p className="inline-block mt-0.5">Chemistry</p>*/}
          {/*  </button>*/}

          {/*  <button*/}
          {/*    id="maths"*/}
          {/*    className="flex justify-center mr-1.5 w-24 rounded-xl shadow-xl shadow-gray-200 hover:shadow-xl hover:shadow-gray-300 focus:shadow-lg focus:outline-none  focus:bg-green-300 active:bg-green-300 transition duration-150 ease-in-out"*/}
          {/*  >*/}
          {/*    <p className="inline-block mt-0.5">Maths</p>*/}
          {/*  </button>*/}
          {/*</div>*/}

          <div
            id="question-number"
            className="font-nunito justify-around flex-wrap flex text-base font-semibold text-center w-96 p-7 pt-0 pb-3"
          >
            <div className="grid grid-cols-5 gap-4">
              {generate_question_boxes()
              }

          </div>
            </div>
        </section>
      </div>
    </main>
  );
}
