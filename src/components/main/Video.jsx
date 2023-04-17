import React, { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_VIDEOS_API } from "../../utils/constants";
import VideoCard from "./VideoCard";

const Video = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = () => {
    axios
      .get(YOUTUBE_VIDEOS_API)
      .then((response) => {
        setVideos(response?.data?.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (videos.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-5 gap-x-4 gap-y-10">
      {videos.map((video) => (
        <VideoCard key={video?.id} info={video} />
      ))}
    </div>
  );
};

export default Video;
