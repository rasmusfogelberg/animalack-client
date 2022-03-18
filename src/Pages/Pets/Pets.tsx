import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { userService } from "../../services/user.service";
import Pet from "../../components/Pet/Pet";
import { IPet } from "../../types/pets";

function Pets() {
  const [pets, setPets] = useState<IPet[]>();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!pets) {
      userService.getUserPets(user.id).then((user) => {
        setPets(user?.pets);
      });
    }
  }, [pets]);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-xl font-bold leading-snub tracking tight mb-4 mt-10">
          My Pets
        </h1>

        <div className="relative">
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none text-black">
            {pets &&
              pets.length > 0 &&
              pets.map((pet: IPet) => <Pet key={pet.id} pet={pet} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pets;
