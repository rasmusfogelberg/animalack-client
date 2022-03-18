import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../providers/AuthProvider";
import { petService } from "../../../services/pet.service";
import { ISinglePet } from "../../../types/pets";

function PetDetail() {
  const { petId } = useParams();
  const [pet, setPet] = useState<ISinglePet>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!pet && petId) {
      petService.getSinglePet(petId).then((pet) => {
        setPet(pet);
      });
    }
  }, [pet]);

  return (
    <div className="petDetail">
      <h2>Pet Details</h2>
      <div>
        <p>
          <code>{JSON.stringify(pet)}</code>
        </p>
      </div>
    </div>
  );
}

export default PetDetail;
