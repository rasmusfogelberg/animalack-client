import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { petService } from "../../../services/pet.service";
import { ISinglePet } from "../../../types/pets";
import { toast} from "react-hot-toast";

function PetDetail() {
  const [pet, setPet] = useState<ISinglePet>();
  const { petId } = useParams();
  const born = new Date(pet?.dateOfBirth as Date).toLocaleDateString();
  const navigate = useNavigate();
  useEffect(() => {
    if (!pet && petId) {
      petService.getSinglePet(petId).then((pet) => {
        setPet(pet);
      });
    }
  }, [pet]);
  
  async function onDelete() {
    try {
      petId && (await petService.deletePet(petId));
      toast.success("Pet successfully deleted!")
      navigate("/pets")
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
          <li>Born: {born}</li>
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
