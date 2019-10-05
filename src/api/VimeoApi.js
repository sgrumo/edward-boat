import axios from 'axios';

const baseUrl = 'https://api.vimeo.com';
const bearerToken = '2c11703cbc821a7d8bf6a0303e4a6dbc';

export const getVideos = () => {
  const url = `${baseUrl}/users/filippomedici/videos`;
  return axios.get(url, {
    headers: {
      Authorization: `bearer ${bearerToken}`
    }
  });
};

export const getSingleVideo = video_id => {};
