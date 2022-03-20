import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/UI/Hero/Hero";
import Section from "../../components/UI/Section/Section";

import Bunny from "./bunny.jpg";

function Home() {
  const classes = `mt-20 flex flex-wrap items-center`;

  return (
    <>
      <Hero />
      <Section
        title="Alfa version is up and running (locally)"
        description={`The road is still long and we have far to go. But one step at the time. 
        The wise man, Dalinar Kholin, from the fantasy novel “Stormlight Archives” by Brandon Sanderson said 
        “That the most important step a person can take is always the next one”. 
        The road ahead is somewhat known and has some unknown factors. But as long as we always 
        takes the next step Animlack will become a reality in time.`}
      >
        <div className={classes}>
          <div className="w-full sm:w-1/2 text-center sm:px-6">
            <h3 className="text-3xl text-gray-900 font-semibold">
              Read more about Animalack
            </h3>
            <div className="mt-6 text-xl leading-9">
              There is not much content on animalack yet. But if you are
              interested about us follow the link below
            </div>
            <div className="btn bg-indigo-500 text-white m-3 ml-0">
            <Link to={`/about`}>About us</Link>
          </div>
          </div>

          <div className="w-full sm:w-1/2 p-6">
            <img src={Bunny} alt="Alt text here" />
          </div>
        </div>
      </Section>
    </>
  );
}

export default Home;
