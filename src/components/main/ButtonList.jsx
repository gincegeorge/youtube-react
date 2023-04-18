import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Trending",
    "News",
    "Tech",
    "football",
    "New",
    "cricket",
    "Cooking",
    "Valentine",
    "songs",
    "gaming",
    "Latest",
  ];
  return (
    <div className="mb-8">
      {list.map((element) => {
        return <Button name={element} key={element} />;
      })}
    </div>
  );
};

export default ButtonList;
