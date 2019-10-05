import React, { useEffect } from 'react';
import { getVideos } from '../api/VimeoApi';

const list = [
  {
    videoUrl: 'https://player.vimeo.com/video/226022767',
    title: 'Pepsi BBLz'
  }
  // {
  //   videoUrl: 'https://vimeo.com/352968891',
  //   title: 'Pepsi sss'
  // }
];

const VideosList = () => {
  useEffect(() => {
    getVideos().then(res => console.log(res.data.data[0]));
  }, []);

  const videos = list.map(listItem => (
    <div key={listItem.title} className="listItem">
      <video width={300} height={250} controls>
        <iframe
          title={listItem.title}
          src={listItem.videoUrl}
          width={640}
          height={640}
          allowFullScreen
          frameBorder="0"
        ></iframe>
        <p>
          <a href="https://vimeo.com/226022767">Pepsi BBLz</a>
        </p>
      </video>
    </div>
  ));

  return <div className="listContainer">{videos}</div>;
};

export default VideosList;
