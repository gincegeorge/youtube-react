import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["All", "News", "Tech", "football", "cricket", "Cooking", "Valentine", "songs", "gaming"];
  return (
    <div className="mb-8">
      {list.map((element) => {
        return <Button name={element} key={element} />;
      })}
    </div>
  );
};

export default ButtonList;
