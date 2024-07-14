import React from 'react';
import ReactPlayer from 'react-player';

const VideoList = ({ videos }) => {
  return (
    <div>
      {videos.map((video) => (
        <div key={video.id.videoId}>
          <h3>{video.snippet.title}</h3>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${video.id.videoId}`} />
        </div>
      ))}
    </div>
  );
};

export default VideoList;
