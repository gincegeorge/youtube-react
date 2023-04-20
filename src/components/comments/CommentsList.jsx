import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index} className="">
          <Comment data={comment} />
          <div className="ml-4 border-l-slate-600 border ">
            <CommentsList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
