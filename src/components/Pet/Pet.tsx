import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { userService } from "../../services/user.service";
import { IPet } from "../../types/pets";

interface PetProps {
  pet: IPet;
}

const Pet: React.FC<PetProps> = ({ pet }) => {
  const { id: petId, name, species, breed, color, gender, born }: IPet = pet;

  return (
    <>
      {!pet && <p>Loading...</p>}
      {pet && (
        <Link to={`/pets/${petId}`}>
          <figure className="relative max-w-xs ">
            <img
              alt={`Showing photo of pet named ${name} that is a ${species}`} 
              className="rounded-lg shadow-xl hover:shadow-2xl "
              src="https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
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
