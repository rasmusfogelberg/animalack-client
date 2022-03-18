import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../providers/AuthProvider";
import { petService } from "../../../services/pet.service";
import { ISinglePet } from "../../../types/pets";

function PetDetail() {
  const [pet, setPet] = useState<ISinglePet>();
  const auth = useAuth();
  const navigate = useNavigate();
  const { petId } = useParams();

  useEffect(() => {
    if (!pet && petId) {
      petService.getSinglePet(petId).then((pet) => {
        setPet(pet);
      });
    }
  }, [pet]);

  async function onDelete() {
    try {
      petId && await petService.deletePet(petId);
      debugger;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-xl font-bold leading-snub tracking tight mb-4 mt-10">
          {pet?.name}
        </h1>
        <ul>
          <li>Species: {pet?.species}</li>
          <li>Breed: {pet?.breed}</li>
          <li>Color: {pet?.color}</li>
          <li>Gender: {pet?.gender}</li>
          <li>Born: {pet?.dateOfBirth}</li>
          <li>Owner: {pet?.users[0].firstName}</li>
        </ul>
        <div className="relative">
          <div>
            <Link to={`/pets/${petId}/update`}>Update {pet?.name}</Link>
          </div>
          <div>
            <Link to="/pets">Back to Pets</Link>
          </div>
          <div>
            <button className="btn bg-red-500 text-white" onClick={onDelete}>
              Delete!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PetDetail;
