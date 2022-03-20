import React from "react";
import Hero from "../../components/UI/Hero/Hero";
import Section from "../../components/UI/Section/Section";

import Avatar from "./avatar.jpg";

function About() {
  const classes = `mt-20 flex flex-wrap items-center`;

  return (
    <div className="mt-10">
      <Section
        title="About Animalack"
        description="Animalacks aim is to help pet owners to more easily keep track of their pets. 
        The information about their pets habits could prove very useful in visits to a veterinarian. 
        To know when and how often certain activities take place it can help to map behaviors and 
        where to change them. Or if you notice that you walk your dog way less than thought. 
        Animalack will help you to improve the life for your pet!"
      >
        <div className={classes}>
          <div className="w-full sm:w-1/2 text-center sm:px-6">
            <h3 className="text-3xl text-gray-900 font-semibold">
              The founder of Animalack
            </h3>
            <div className="mt-6 text-xl leading-9">
              Hello there! My name is Rasmus and I made this site.
            </div>
          </div>

          <div className="w-full sm:w-1/2 p-6">
            <img src={Avatar} alt="Alt text here" />
          </div>
          <div>
            The idea for Animalack started when I noticed my cat wouldn't always
            eat her meals. I spent a lot of time tracking her eating habits and
            how much she ate. It was after a visit to the veterinarian that it
            was discovered that she has FORL (feline odontoclastic resorption
            lesion). Some of her front lower teeth were loose and caused her
            pain. Thanks to the help of the veterinarian she got her bad teeth
            removed and after a few weeks of medication she is back to her old
            self. During her recovery period she had to take medicine and an app
            like Animalack would have made it much easier to keep track of when
            and how much she was supposed to have. And that is when I started to
            think of Animalack. There are still many features that needs to be
            added. But Rome wasn’t built in one day!
          </div>
        </div>
      </Section>
    </div>
  );
}

export default About;
