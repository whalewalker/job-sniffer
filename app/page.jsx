"use client";
import Login from "@/components/Login";
import Register from "@/components/Register";
import { useState } from "react";
import { signIn } from 'next-auth/react';

export default function Home() {
  const [authScreen, setAuthScreen] = useState(true);

  const toggleAuthScreens = () => {
    setAuthScreen((prevState) => !prevState);
  };

  return (
    <main className="bg-color-white flex w-full h-[100vh]">
      <div className="bg-color-black-1 w-1/2"></div>
      <div className="w-1/2 px-[7rem] flex flex-col items-center justify-center">
        <h1 className="mb-[5rem] font-medium text-[3rem]">Job Sniffer</h1>
        {authScreen ? <Register /> : <Login />}

        <div className="mt-[2rem]">
          <p>
            {authScreen ? "Already registered" : "Haven't registered"}?{" "}
            <span
              className="text-[#5c7cfa] cursor-pointer"
              onClick={toggleAuthScreens}
            >
              {authScreen ? "Login" : "Register"}
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
