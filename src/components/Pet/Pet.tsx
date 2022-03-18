import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { userService } from "../../services/user.service";
import { IPet } from "../../types/pets";

import "./pet.scss";

interface PetProps {
  pet: IPet;
}

const Pet: React.FC<PetProps> = ({ pet }) => {
  const { id: petId, name, species, breed, color, gender, born }: IPet = pet;

  return (
    <>
      <Link className="petItemContent" to={`/pets/${petId}`}>
        <>
          <div>Name: {name}</div>
          <div>Species: {species}</div>
          <div>Breed: {breed}</div>
          <div>Color: {color}</div>
          <div>Gender: {gender > 1 ? "Female" : "Male"}</div>
          <div>Born: {born}</div>
        </>
      </Link>
    </>
  );
};

export default Pet;
