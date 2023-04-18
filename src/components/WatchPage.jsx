import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

function WatchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const videoId = searchParams.get("v");
  const videoLink = "https://www.youtube.com/watch?v=" + videoId;
  console.log(videoLink);

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
        playing={true}
        
      />
    </div>
  );
}

export default WatchPage;
