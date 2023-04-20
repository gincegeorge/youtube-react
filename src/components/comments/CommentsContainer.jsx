import React from "react";
import Comment from "./Comment.jsx";
import CommentsList from "./CommentsList.jsx";

function CommentsContainer() {
  const commentsData = [
    {
      name: "Tony",
      text: "This is a comment 1",
      replies: [
        {
          name: "Saju",
          text: "this is a reply 1",
          replies: [
            {
              name: "Bennet",
              text: "this is a reply 2",
              replies: [
                {
                  name: "Don",
                  text: "this is a reply 3",
                  replies: [],
                },
                {
                  name: "Don 1",
                  text: "this is a reply 3",
                  replies: [],
                },
              ],
            },
            {
              name: "Poli 1",
              text: "this is a reply 2",
              replies: [],
            },
          ],
        },
        {
          name: "Saju 1",
          text: "this is a reply 1",
          replies: [],
        },
        {
          name: "Saju 2",
          text: "this is a reply 1",
          replies: [],
        },
        {
          name: "Saju 3",
          text: "this is a reply 1",
          replies: [],
        },
      ],
    },
    {
      name: "Kevin",
      text: "this is a reply 1",
      replies: [
        {
          name: "Saju 3",
          text: "this is a reply 1",
          replies: [
            {
              name: "Saju 3",
              text: "this is a reply 1",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Dom",
      text: "this is a reply 1",
      replies: [
        {
          name: "Saju 3",
          text: "this is a reply 1",
          replies: [],
        },
      ],
    },
  ];

  return (
    <div className="my-5 px-3">
      <div className="text-2xl font-bold">Comments</div>
      <div>
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
}

export default CommentsContainer;
