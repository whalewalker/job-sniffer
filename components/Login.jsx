"use client";
import React from "react";
import InputComponent from "./InputComponent";
import Button from "./Button";
import { inputValidators } from "@/utils/formValidation";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { notifyError, notifySuccess } from "@/lib/notifications/notifySuccess";

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginUserHandler = async (data) => {
    try {
      const apiRes = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: data.email, password: data.password }),
      });

      const getResp = await apiRes.json();
      console.log(getResp, "apiRes");

      if (getResp.admin) {
        router.replace("/admin");
      } else {
        router.replace("/dashboard");
      }
    } catch (error) {
      notifyError("Login Failed");
    }
  };

  return (
    <div className="font-nunito w-full">
      <form onSubmit={handleSubmit(loginUserHandler)} noValidate>
        <InputComponent
          label="Email"
          type="email"
          placeholder="ejim@gmail.com"
          register={register}
          error={errors}
          disabled={false}
          validation={inputValidators.email}
          name="email"
        />
        <InputComponent
          label="Password"
          type="password"
          placeholder="******"
          register={register}
          error={errors}
          disabled={false}
          validation={inputValidators.password}
          name="password"
        />
        <Button
          text="Login"
          type={"submit"}
          styles="bg-[#5c7cfa] text-color-white w-full text-center py-[1rem] rounded-[.5rem] text-[1.7rem] font-medium mt-[2rem]"
        />
      </form>
      <div className="w-full my-[1.5rem] flex items-center">
        <div className="h-[.1rem] bg-color-grey-1 flex-1"></div>
        <p className="mx-[1rem]">Or</p>
        <div className="h-[.1rem] bg-color-grey-1 flex-1"></div>
      </div>
      <div className="flex  w-full items-center border px-[1.5rem] py-[.5rem] rounded-[.5rem] border-color-grey-1 cursor-pointer hover:border-[#5c7cfa] transition-all duration-100 ease-in">
        <FcGoogle className="w-[2.2rem] h-[2.2rem] " />
        <p className="mx-auto font-medium">Continue with Google</p>
      </div>
    </div>
  );
};

export default Login;
