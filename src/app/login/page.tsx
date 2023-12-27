"use client";
import PrimaryButton from "@/components/PrimaryButton";
import { login } from "@/lib/actions";
import { UserContext } from "@/providers/UserProvider";
import { Face } from "@mui/icons-material";
import React, { useContext, useRef, useState } from "react";

const defaultUser = {
  name: "Terry Medhurst",
  username: "atuny0",
  password: "9uQFF1Lh",
};

const Login = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const submit = useRef<HTMLFormElement>(null);
  const [err, setErr] = useState("");
  const userService = useContext(UserContext);

  const fillForm = () => {
    if (usernameRef.current && passwordRef.current) {
      usernameRef.current.value = defaultUser.username;
      passwordRef.current.value = defaultUser.password;
      submit.current?.requestSubmit();
    }
  };

  const handleSubmit = async (e: FormData) => {
    const res = await login(e);
    if ("error" in res) {
      console.log(res.error);
      return setErr("Wrong Credentials");
    }
    userService?.login(res);
  };

  return (
    <div className="mx-auto max-w-7xl px-2 py-2 flex flex-col gap-3 justify-center items-center w-full h-full min-h-80">
      <h1 className="text-2xl font-semibold">Welcome to Dummy Products </h1>
      <p className="text-lg self-start">Login to get started</p>
      <div className="flex justify-center items-center max-h-svh ">
        <form
          action={handleSubmit}
          className="flex flex-col gap-2 justify-center items-center"
          ref={submit}
        >
          <button
            type="button"
            className="text-blue-500 flex gap-2 justify-center items-center text-lg"
            onClick={fillForm}
          >
            Login as <Face /> {defaultUser.name} {"->"}
          </button>
          <span className="text-lg font-semibold">OR</span>
          <label
            htmlFor="username"
            className="text-lg font-semibold self-start"
          >
            Username
          </label>
          <input
            type="username"
            id="username"
            name="username"
            placeholder="username"
            autoComplete="username"
            className="border-b border-gray-500 p-2 outline-none focus-within:border-b-2"
            required
            ref={usernameRef}
          />
          <label
            htmlFor="password"
            className="text-lg font-semibold self-start"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password..."
            autoComplete="password"
            className="border-b border-gray-500 p-2 outline-none focus-within:border-b-2"
            required
            ref={passwordRef}
          />

          <PrimaryButton title="Login" />
        </form>
      </div>
      <p className="text-red-400">{err}</p>
    </div>
  );
};

export default Login;
