import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { animalImage } from "../../helpers/animalImage";

import { userService } from "../../services/user.service";
import { IPet } from "../../types/pets";

interface PetProps {
  pet: IPet;
}

const Pet: React.FC<PetProps> = ({ pet }) => {
  const {
    id: petId,
    name,
    species,
    breed,
    color,
    gender,
    dateOfBirth,
  }: IPet = pet;

  return (
    <>
      {pet && (
        <Link to={`/pets/${petId}`}>
          <figure className="relative max-w-xs ">
            <img
              alt={`Showing photo of pet named ${name} that is a ${species}`}
              className="rounded-lg shadow-xl hover:shadow-2xl max-w-xs max-h-80"
              src={animalImage(species)}
            />
            <figcaption className="absolute text-lg -mt-16 text-pink-400 font-bold px-8 ">
              <>
                <h4>{name}</h4>
              </>
            </figcaption>
          </figure>
        </Link>
      )}
    </>
  );
};

export default Pet;
/*  */
