import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { petService } from "../../services/pet.service";
import { ISinglePet } from "../../types/pets";

function UpdatePet() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "This is a test",
      species: "Alien",
      breed: "Definitely alien",
      color: "Puke green",
      gender: "All of them",
      dateOfBirth: new Date(),
    },
  });
  const [pet, setPet] = useState<ISinglePet>();
  const { petId } = useParams();

  useEffect(() => {
    if (!pet && petId) {
      petService.getSinglePet(petId).then((pet) => {
        setPet(pet);
      });
    }
  }, [pet]);

  async function onSubmitPet(data: any) {
    try {
      data.id = pet?.id;
      await petService.updatePet(data);
      debugger;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
      <blockquote className="text-2xl font-medium text-center">
        <p className="text-lg font-semibold">
          Animalack | <span className="text-pink-500">Update {pet?.name}</span>
        </p>
      </blockquote>
      <div className="text-primary m-6">
        <div className="flex items-center mt-3 justify-center">
          <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
            Update information
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmitPet)}>
          <label className="text-left">Name:</label>
          <input
            {...register("name", { required: true })}
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          />
          <label className="text-left">Species:</label>
          <input
            {...register("species", { required: true })}
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          />
          <label className="text-left">Breed:</label>
          <input
            {...register("breed", { required: false })}
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          />
          <label className="text-left">Color:</label>
          <input
            {...register("color", { required: true })}
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          />
          <label className="text-left">Gender:</label>
          <input
            {...register("gender", { required: false })}
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          />
          <label className="text-left">Born:</label>
          <input
            {...register("dateOfBirth", { required: false })}
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          />
          <div className="flex items-center mt-3 justify-center">
            <button
              className={
                "bg-pink-700 hover:bg-pink-500 py-2 px-4 text-md text-white rounded border border-pink focus:outline-none focus:border-black"
              }
              value="Login"
            >
              Update Pet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdatePet;
