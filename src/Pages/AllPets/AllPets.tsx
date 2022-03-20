import React, { useEffect, useState } from "react";
import Pet from "../../components/Pet/Pet";
import { petService } from "../../services/pet.service";
import { IPet } from "../../types/pets";

function AllPets() {
  const [pets, setPets] = useState<IPet[]>();

  useEffect(() => {
    if (!pets) {
      petService.getAllPets()
      .then(response => {
        return response;
      }).then(data => {setPets(data);
      })
    }
  }, [pets]);

  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-xl font-bold leading-snub tracking tight mb-4 mt-20">
            All pets on Animalack!
          </h1>
          <div>
            {" "}
            {pets?.length === 0 && (
              <>
                <p>There are no pets on Animalack yet</p>
              </>
            )}
          </div>
          <div className="relative">
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none text-black">
              {pets &&
                pets.length > 0 &&
                pets.map((pet: IPet) => <Pet key={pet.id} pet={pet} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AllPets;
