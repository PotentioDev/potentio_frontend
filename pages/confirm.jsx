import React from "react";
import Link from "next/link";

export default function Confirm() {
  const [name, setName] = React.useState("");
  const [confirmed, setConfirmed] = React.useState(false);

  // define a const function called checkngo
  const checkngo = () => {
    if (name.toLowerCase() === "yes i confirm") {
      if (confirmed) {
        window.location.href = "/testingZone";
      }
    } else {
      alert("Please confirm that you are ready to go");
    }
  };
  console.log(name, confirmed);

  return (
    <main>
      <div
        id="container"
        className="flex justify-center w-full h-full  bg-[#F8FAFA] "
      >
        <section className="flex flex-col w-2/3 justify-items-center bg-white ">
          <div className="flex flex-col self-center mt-20 justify-center">
            <div
              id="Potentio-logo"
              className="flex font-comfortaa bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-6xl ml-16 mb-10 "
            >
              Potentio
            </div>
            <div className="flex w-96 ml-1 mb-3 text-center">
              The following window shows a declaration that no plagiarism will
              be done and that the test will be given with complete honesty.
              <br /> <br /> Please enter &quot;Yes I confirm&quot; and click
              submit to confirm.
            </div>
            <input
              type="text"
              className="flex mb-5 pl-2 pr-4 mr-1 rounded-lg w-80 placeholder-grey text-lg text  hover:shadow-lg shadow-inner  focus:outline-none  active:shadow-lg  "
              placeholder="Confirmation"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <div className="text-center">
              I hereby accept that the information given by me
              <br />
              is true to my uttermost knowledge and belief.
            </div>
            <ul className="grid grid-cols-3 gap-x-5 ml-24 m-10 max-w-md mx-auto">
              <li className="relative">
                <input
                  className="sr-only peer"
                  type="radio"
                  value="yes"
                  name="answer"
                  id="answer_yes"
                  onChange={() => setConfirmed(true)}
                />
                <label
                  className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent w-20"
                  htmlFor="answer_yes"
                >
                  Yes
                </label>

                <div className="absolute hidden w-6 h-5 peer-checked:block top-5 right-3">
                  👍
                </div>
              </li>
              <li className="relative">
                <input
                  className="sr-only peer"
                  type="radio"
                  value="no"
                  name="answer"
                  id="answer_no"
                  onChange={() => setConfirmed(false)}
                />
                <label
                  className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent w-20"
                  htmlFor="answer_no"
                >
                  No
                </label>

                <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                  👎
                </div>
              </li>
            </ul>

            <button
              id="Save_and_next"
              className="bg-blue-600 pt-1.5 pb-2 h-10 w-28 pl-1.5 ml-32 mb-20 pr-1.5 text-center text-base tracking-wide rounded-xl cursor-pointer inline-block leading-tight shadow-md hover:shadow-md hover:shadow-gray-400 focus:ring-4 focus:shadow-lg focus:outline-none focus:ring-blue-700 active:bg-green-700 transition duration-150 ease-in-out mx-20"
              type="button"
              onClick={(e) => {
                checkngo();
              }}
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
