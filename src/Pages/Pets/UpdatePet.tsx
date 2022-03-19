import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { petService } from "../../services/pet.service";
import { ISinglePet } from "../../types/pets";
import toast from "react-hot-toast";

function UpdatePet() {
  const navigate = useNavigate();
  const [pet, setPet] = useState<ISinglePet>();
  const { petId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!pet && petId && loading) {
      petService.getSinglePet(petId).then((pet) => {
        setPet(pet);
        setLoading(false);
      });
    }
  }, [pet]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: pet?.name,
      species: pet?.species,
      breed: pet?.breed,
      color: pet?.color,
      gender: pet?.gender,
      dateOfBirth: pet?.dateOfBirth,
    },
  });

  async function onSubmitPet(data: any) {
    try {
      data.id = pet?.id;
      await petService.updatePet(data);
      navigate("/pets");
      toast.success("Pet successfully updated!")
    } catch (error) {
      console.error(error);
    }
    navigate("/pets");
  }

  return (
    <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
      {loading && <p>Loading...</p>}
      {!loading && pet && 
      <>
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
          <label className="text-left">Name: </label>
          {errors.name && (
            <span
              className="border-red-400 text-red-700 font-bold text-right"
              role="alert"
            >
              {errors.name.message}
            </span>
          )}
          <input
            {...register("name", { required: "This field is required" })}
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 ${
              errors.name &&
              "focus:border-red-400 focus:ring-red-400 border-red-400"
            }`}
          />
          <label className="text-left">Species: </label>
          {errors.species && (
            <span
              className="border-red-400 text-red-700 font-bold"
              role="alert"
            >
              {errors.species.message}
            </span>
          )}
          <input
            {...register("species", { required: "This field is required" })}
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 ${
              errors.species &&
              "focus:border-red-400 focus:ring-red-400 border-red-400"
            }`}
          />
          <label className="text-left">Breed: </label>
          <input
            {...register("breed", { required: false })}
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          />
          <label className="text-left">Color: </label>
          {errors.color && (
            <span
              className="border-red-400 text-red-700 font-bold"
              role="alert"
            >
              {errors.color.message}
            </span>
          )}
          <input
            {...register("color", { required: "This field is required" })}
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 ${
              errors.color &&
              "focus:border-red-400 focus:ring-red-400 border-red-400"
            }`}
          />
          <label className="text-left">Gender: </label>
          <select
            {...register("gender", { required: false })}
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          >
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
          <label className="text-left">Born: </label>
          {errors.dateOfBirth && (
            <span
              className="border-red-400 text-red-700 font-bold"
              role="alert"
            >
              {errors.dateOfBirth.message}
            </span>
          )}{" "}
          <input
            type="date"
            {...register("dateOfBirth", {
              required: "Date can't be in the future",
            })}
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 ${
              errors.dateOfBirth &&
              "focus:border-red-400 focus:ring-red-400 border-red-400"
            }`}
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
      </>}
    </div>
  );
}

export default UpdatePet;
