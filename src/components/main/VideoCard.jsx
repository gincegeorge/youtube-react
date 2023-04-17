import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="">
      {!thumbnails?.maxres?.url ? (
        <img
          className="rounded-lg"
          src="https://pdtxar.com/wp-content/uploads/2019/11/video-placeholder-1280x720-40-768x433.jpg"
        />
      ) : (
        <img className="rounded-lg" src={thumbnails?.maxres?.url} />
      )}
      <div className="font-bold my-1">{title}</div>
      <div className="text-gray-700">{channelTitle}</div>
      <div className="text-sm font-bold">{statistics?.viewCount} views</div>
    </div>
  );
};

export default VideoCard;
