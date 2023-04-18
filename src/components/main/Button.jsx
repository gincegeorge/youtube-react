import React from "react";

const Button = (props) => (
  <button className="px-5 py-2 mr-4 bg-gray-200 rounded first:bg-gray-950 first:text-white">
    {props?.name}
  </button>
);

export default Button;
