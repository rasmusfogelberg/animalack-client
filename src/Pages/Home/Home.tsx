import React from "react";
import Hero from "../../components/UI/Hero/Hero";
import Section from "../../components/UI/Section/Section";

import Bunny from "./bunny.jpg";

function Home() {
  const classes = `mt-20 flex flex-wrap items-center`;

  return (
    <>
      <Hero />
      <Section
        title="This is the title of the section"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus possimus molestias nemo animi, facilis ab officiis fuga dolore ex asperiores suscipit. Vel pariatur eaque distinctio ratione amet rerum, aspernatur illo!"
      >
        <div className={classes}>
          <div className="w-full sm:w-1/2 text-center sm:px-6">
            <h3 className="text-3xl text-gray-900 font-semibold">Title</h3>
            <div className="mt-6 text-xl leading-9">Description</div>
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
