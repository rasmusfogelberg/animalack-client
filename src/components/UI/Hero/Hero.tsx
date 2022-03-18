import React from "react";
import { Link } from "react-router-dom";
import Dog from "./doggo.jpg";

function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
              Every pet is{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                special
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8">
                With{" "}
                <span className="font-bold text-indigo-500">Animalack</span> you
                can keep track of every important event and activity for all
                your pets.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <Link
                  to="/register"
                  className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                >
                  Register account for free
                </Link>
                <Link
                  to="/about"
                  className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="relative flex justify-center mb-8">
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto"
                  src={Dog}
                  width="768"
                  height="432"
                  alt="Dog in unicron outfit"
                />
              </div>
              <button
                className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                aria-controls="modal"
              >
                <svg
                  className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
