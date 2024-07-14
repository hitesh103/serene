import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import { fetchVideos } from '../lib/youtube';

export default function Home() {
  const [videos, setVideos] = useState([]);

  const handleSearch = async (query) => {
    const fetchedVideos = await fetchVideos(query);
    setVideos(fetchedVideos);
  };

  return (
    <div>
      <h1>YouTube Topic Filter</h1>
      <SearchBar onSearch={handleSearch} />
      <VideoList videos={videos} />
    </div>
  );
}
