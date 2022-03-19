import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { userService } from "../../services/user.service";

function Register() {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data: any) {
    try {
      await userService.registerUser(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
      <blockquote className="text-2xl font-medium text-center">
        <p className="text-lg font-semibold">
          Animalack | <span className="text-pink-500">Registration</span>
        </p>
      </blockquote>

      <div className="text-primary m-6">
        <div className="flex items-center mt-3 justify-center">
          <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
            Register an account
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="text-left">Firstname:</label>
          <input
            {...register("firstname", { required: true })}
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          />
          <label className="text-left">Lastname:</label>
          <input
            {...register("lastname", { required: true })}
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          />
          <label className="text-left">Email:</label>
          <input
            {...register("username", { required: true })}
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          />
          <label>Password:</label>
          <input
            {...register("password", { required: true })}
            type="password"
            className={
              "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
            }
          />
          <label>Confirm Password:</label>
          <input
            {...register("confirmPassword", { required: true })}
            type="password"
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
              Register
            </button>
          </div>
        </form>
        <div className="flex items-center mt-3 justify-center">
          <NavLink
            to="/login"
            className={
              "justify-center text-pink-500 hover:text-pink-900 hover:underline"
            }
          >
            Already have an account? Click here to log in!
          </NavLink>
        </div>
        <div className="flex items-center mt-8 justify-center">
          <NavLink
            to="/"
            className={
              "justify-center text-center hover:text-gray-700 text-gray-400 hover:underline"
            }
          >
            {`Click here to go back to the landing page.`}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Register;
