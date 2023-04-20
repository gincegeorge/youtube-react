import React from "react";

function Comment({ data }) {
  const { name, text } = data;
  return (
    <div className="flex my-3 p-2 bg-slate-100">
      <img
        className=" mr-2 w-7 h-7"
        src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
        alt="user-icon"
      />
      <div className="commentData">
        <div>{name}</div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Comment;
