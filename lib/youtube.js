import axios from 'axios';

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

export const fetchVideos = async (query) => {
  const { data } = await axios.get(YOUTUBE_API_URL, {
    params: {
      part: 'snippet',
      q: query,
      key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
      type: 'video',
    },
  });
  return data.items;
};
