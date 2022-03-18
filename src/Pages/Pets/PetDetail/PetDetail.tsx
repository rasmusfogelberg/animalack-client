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

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-xl font-bold leading-snub tracking tight mb-4 mt-10">
          Here's the pet
        </h1>

        <div className="relative">
          <h3>Pet Id: {petId}</h3>

          <Link to="/pets">Back to Pets</Link>
        </div>
      </div>
    </section>
  );
}

export default PetDetail;
