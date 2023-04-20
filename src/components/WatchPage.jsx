import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import CommentsContainer from "./comments/CommentsContainer";

function WatchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const videoId = searchParams.get("v");
  const videoLink = "https://www.youtube.com/watch?v=" + videoId;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
      <ReactPlayer
        url={videoLink}
        width="854px"
        height="480px"
        // playing={true}
      />
      <CommentsContainer />
    </div>
  );
}

export default WatchPage;
