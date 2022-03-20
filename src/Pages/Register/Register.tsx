import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { userService } from "../../services/user.service";
import toast from "react-hot-toast";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const navigate = useNavigate();

  async function onSubmit(data: any) {
    try {
      await userService.registerUser(data);
      navigate("/login");
      toast.success("User successfully registered!")
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
          <label className="text-left">Firstname: </label>
          {errors.firstname && (
            <span
              className="border-red-400 text-red-700 font-bold text-right"
              role="alert"
            >
              {errors.firstname.message}
            </span>
          )}
          <input
            {...register("firstname", {
              required: "Required",
              minLength: {
                value: 2,
                message: "Needs to be at least 2 characters",
              },
            })}
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 ${
              errors.firstname &&
              "focus:border-red-400 focus:ring-red-400 border-red-400"
            }`}
          />
          <label className="text-left">Lastname: </label>
          {errors.lastname && (
            <span
              className="border-red-400 text-red-700 font-bold text-right"
              role="alert"
            >
              {errors.lastname.message}
            </span>
          )}
          <input
            {...register("lastname", {
              required: "Required",
              minLength: {
                value: 2,
                message: "Needs to be at least 2 characters",
              },
            })}
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 ${
              errors.lastname &&
              "focus:border-red-400 focus:ring-red-400 border-red-400"
            }`}
          />
          <label className="text-left">Email: </label>
          {errors.username && (
            <span
              className="border-red-400 text-red-700 font-bold text-right"
              role="alert"
            >
              {errors.username.message}
            </span>
          )}
          <input
            {...register("username",  {
              required: "Required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format"
              }})}
            type="email"
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 ${
              errors.username &&
              "focus:border-red-400 focus:ring-red-400 border-red-400"
            }`}
          />
          <label>Password: </label>
          {errors.password && (
            <span
              className="border-red-400 text-red-700 font-bold text-right"
              role="alert"
            >
              {errors.password.message}
            </span>
          )}
          <input
            {...register("password", {
              required: "You must specify a password",
              minLength: {
                value: 6,
                message: "Must have at least 6 characters"
              }
            })}
            type="password"
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 ${
              errors.password &&
              "focus:border-red-400 focus:ring-red-400 border-red-400"
            }`}
          />
          <label>Confirm Password:</label>
          {errors.confirmPassword && (
            <span
              className="border-red-400 text-red-700 font-bold text-right"
              role="alert"
            >
              {errors.confirmPassword.message}
            </span>
          )}
          <input
            {...register("confirmPassword", {
              validate: value =>
                value === password.current || "The passwords do not match"
            })}
            type="password"
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 ${
              errors.confirmPassword &&
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
