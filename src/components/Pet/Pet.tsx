import React from "react";
import { useNavigate } from "react-router-dom";
import { IPet, IUser, userService } from "../../services/user.service";

import "./pet.scss";

interface PetProps {
  pet: IPet;
}

const Pet: React.FC<PetProps> = ({ pet }) => {
  const { id: petId, name, species, breed, color, gender, born } = pet;

  const navigate = useNavigate();

  const handleSelectPet = () => {
    if (!petId) return;
    navigate(`/petDetail/${petId}`);
  };

  return (
    <>
      <div className="petItemContent" onClick={handleSelectPet}>
      <ul>
        <li>Name: {name}</li>
        <li>Species: {species}</li>
        <li>breed: {breed}</li>
        <li>color: {color}</li>
        <li>gender: {gender > 1 ? "Female" : "Male"}</li>
        <li>Born: {born}</li>
      </ul>
      </div>
    </>
  );
};

export default Pet;
