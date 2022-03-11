import * as React from "react";
import { useForm } from "react-hook-form";

import { authService } from "../../services/auth.service";

type LoginFormData = {
  username: string;
  password: string;
};

function Login() {
  // TODO add errors from formState
  const { register, handleSubmit, setValue } = useForm<LoginFormData>();

  function onSubmit(data: any) {
    authService.login(data.username, data.password)
      .then(() => {
        debugger;
      })
      .catch(error => {
        debugger;
      });
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>
        <label htmlFor="username">Username</label>
        <input {...register("username", { required: true })} />

        <label htmlFor="password">Password</label>
        <input {...register('password', { required: true })} type="password" />

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
