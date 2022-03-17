import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { ISinglePet, petService } from "../../services/pet.service";

function PetDetail() {
  const [pet, setPet] = useState<ISinglePet>();
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!pet) {
      petService.getSinglePet(auth.user.pet.id).then((pet) => {
        setPet(pet);
      });
    }
  }, [pet]);

  return (
    <div className="petDetail">
        <h2>Pet Details</h2>
        
    </div>
  );
}

export default PetDetail;