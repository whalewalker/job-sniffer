import React from "react";

const Button = ({ text, onclick, type, styles }) => {
  return (
    <button onClick={onclick} type={type} className={styles}>
      {text}
    </button>
  );
};

export default Button;
