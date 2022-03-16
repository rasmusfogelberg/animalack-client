import * as React from "react";
import { useForm } from "react-hook-form";
import { useLocation, Location, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

import { authService } from "../../services/auth.service";

type LoginFormData = {
  username: string;
  password: string;
};

function Login() {
  const location: any = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();

  // TODO add errors from formState
  const { register, handleSubmit, setValue } = useForm<LoginFormData>();

  let from: any = location.state?.from?.pathname || "/";

  function onSubmit(data: any) {
    auth
      .login(data.username, data.password, () => {
        // redirect user back to the path they came from, otherwise send them to "/"
        navigate(from, { replace: true });
      });
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>
        <label htmlFor="username">Username</label>
        <input {...register("username", { required: true })} />

        <label htmlFor="password">Password</label>
        <input {...register("password", { required: true })} type="password" />

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
