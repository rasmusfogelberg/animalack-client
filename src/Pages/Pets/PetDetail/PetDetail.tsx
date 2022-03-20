import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { petService } from "../../../services/pet.service";
import { ISinglePet } from "../../../types/pets";
import { toast} from "react-hot-toast";
import { animalImage } from "../../../helpers/animalImage";

function PetDetail() {
  const [pet, setPet] = useState<ISinglePet>();
  const { petId } = useParams();
  const born = new Date(pet?.dateOfBirth as Date).toLocaleDateString();
  const gender = pet?.gender && parseInt(pet?.gender) > 1 ? "Female" : "Male";
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
        <div className="flex flex-wrap justify-between">
        <ul className="text-lg">
          <li className="my-1 font-bold ">Species: <span className="font-medium">{pet?.species}</span></li>
          <li className="my-1 font-bold">Breed: <span className="font-medium">{pet?.breed || "N/A"}</span></li>
          <li className="my-1 font-bold">Color: <span className="font-medium">{pet?.color}</span></li>
          <li className="my-1 font-bold">Gender: <span className="font-medium">{gender}</span></li>
          <li className="my-1 font-bold">Born: <span className="font-medium">{born}</span></li>
          <li className="my-1 font-bold">Owner: <span className="font-medium">{pet?.users[0].firstName}</span></li>
        </ul>
        <img
              alt={`Showing photo of pet named ${pet?.name} that is a ${pet?.species}`}
              className="rounded-lg shadow-xl max-w-xs max-h-80"
              src={animalImage(pet?.species as string)}
            />
            </div>
        <div className="relative flex flex-wrap items-center justify-between h-16 md:h-20">
          <div className="btn bg-indigo-500 text-white m-3 ml-0">
            <Link to={`/pets/${petId}/update`}>Update {pet?.name}</Link>
          </div>
          <div className="btn bg-teal-500 m-3 ml-0">
            <Link to="/pets">Back to Pets</Link>
          </div>
          <div>
            <button className="btn bg-red-500 text-white m-3 ml-0" onClick={onDelete}>
              Delete!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PetDetail;
