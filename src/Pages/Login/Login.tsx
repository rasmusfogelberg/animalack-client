import * as React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

type LoginFormData = {
  username: string;
  password: string;
};

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { state }: any = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  async function onSubmit(data: LoginFormData) {
    try {
      debugger;
      await login(data.username, data.password, () => {
        navigate(state?.path || "/");
      });
    } catch (error: any) {
      console.log(error.response.data);
    }
  }

  return (
    <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
      <blockquote className="text-2xl font-medium text-center">
        <p className="text-lg font-semibold">
          Animalack | <span className="text-indigo-500">Login</span>
        </p>
      </blockquote>

      <div className="text-primary m-6">
        <div className="flex items-center mt-3 justify-center">
          <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
            Login to your account
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="text-left">Username: </label>
          {errors.username && (
            <span
              className="border-red-400 text-red-700 font-bold text-right"
              role="alert"
            >
              {errors.username.message}
            </span>
          )}
          <input
            {...register("username", {
              required: "Required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Does not match email format"
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
            {...register("password", { required: "Password is required" })}
            type="password"
            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 ${
              errors.password &&
              "focus:border-red-400 focus:ring-red-400 border-red-400"
            }`}
          />
          <div className="flex items-center mt-3 justify-center">
            <button
              className={
                "bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
              }
              value="Login"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex items-center mt-3 justify-center">
          <NavLink
            to="/register"
            className={
              "justify-center text-center hover:text-blue-900 text-blue-500 hover:underline"
            }
          >
            {`Need an account?`}
            <br />
            {`Click here to register for free`}
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

export default Login;
