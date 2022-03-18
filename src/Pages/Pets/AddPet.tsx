import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../providers/AuthProvider";
import { petService } from "../../services/pet.service";

function AddPet() {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  async function onSubmitPet(data: any) {
    try {
      data.users = [user.id];
      await petService.addPet(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
      <blockquote className="text-2xl font-medium text-center">
        <p className="text-lg font-semibold">
          Animalack | <span className="text-pink-500">Add a pet</span>
        </p>
      </blockquote>

      <div className="text-primary m-6">
        <div className="flex items-center mt-3 justify-center">
          <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
            Add a new pet
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
              Add Pet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPet;
