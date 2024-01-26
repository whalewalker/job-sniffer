"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputComponent = ({
  label,
  placeholder,
  type,
  register,
  error,
  name,
  validation,
  disabled,
}) => {
  const [visible, setVisible] = useState(false);

  const displayPassword = () => {
    setVisible(!visible);
  };

  const getErrorClass = () => {
    return error && error[name] && error[name].message
      ? "text-color-red border-color-red focus:border-color-red"
      : "border-color-grey-1 text-color-black-1 focus:border-[#5c7cfa]";
  };

  const getErrorText = () => {
    return error && error[name] && error[name].message ? (
      <small
        className={`text-color-red ${
          name === "columnName" ? "" : "pt-[.3rem]"
        }`}
      >
        {error[name].message}
      </small>
    ) : null;
  };

  const getPasswordIcon = () => {
    return type === "password" ? (
      visible ? (
        <FaEyeSlash
          className="absolute w-[2.2rem] h-[2.2rem] top-[.8rem] right-[1rem] text-color-grey-1 cursor-pointer"
          onClick={displayPassword}
        />
      ) : (
        <FaEye
          className="absolute w-[2.2rem] h-[2.2rem] top-[.8rem] right-[1rem] text-color-grey-1 cursor-pointer"
          onClick={displayPassword}
        />
      )
    ) : null;
  };

  return (
    <div className="flex flex-col w-full mb-[1.5rem]">
      <label htmlFor={name} className="text-[1.8rem] font-nunito mb-[.5rem]">
        {label}
      </label>
      <div className="relative w-full flex">
        <input
          type={type === "password" ? (visible ? "text" : "password") : type}
          placeholder={placeholder}
          {...register(name, validation)}
          disabled={disabled}
          className={`border flex-1 py-[.5rem] px-[1.5rem] ${getErrorClass()} outline-none ring-0 rounded-[.5rem]`}
        />
        {getPasswordIcon()}
      </div>
      {getErrorText()}
    </div>
  );
};

export default InputComponent;
