import { usePlayerStore } from "@/stores/usePlayerStore";
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import axios from "../../lib/axios";

interface Song {
  _id: string;
  title: string;
  artist: string;
  imageUrl: string;
  audioUrl: string;
  duration: number;
  albumId: string;
  createdAt: string;
  updatedAt: string;
}


const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [inputPause, setInputPause] = useState("");
  const [results, setResults] = useState<Song[]>([]);
  const { currentSong, setCurrentSong, togglePlay } = usePlayerStore();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInputPause(query); 
    }, 1500)
    return () => clearTimeout(timeout);
  }, [query]);

  useEffect(() => {
    if (inputPause && inputPause.length) handleSearch();
  }, [inputPause]);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSearch();
  }

  const handleSearch = async () => {
    try {
      if (!query?.length) return [];
      const result = await axios.get(`/search?q=${query}`);
      if (result && Array.isArray(result.data)) setResults(result.data);
    } 
    catch (e) {
      console.error("Error fetching search results:", e);
    }
  }

  const handlePlay = (song: Song) => {
    console.log(song)
    if (currentSong?._id === song?._id) togglePlay();
    else setCurrentSong(song);
  }


  return (
    <div className="flex flex-col items-center p-8">
      <div className="flex items-center bg-zinc-900 p-4 rounded-lg shadow-lg max-w-[998px] w-full mb-4">
      <Search className="text-gray-500 mr-3 hidden sm:inline" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
          className="w-full p-2 text-lg text-white border-0 focus:outline-none rounded-lg shadow-lg bg-gray-500"
        />
        <button
          onClick={handleSearch}
          className="ml-3 bg-zinc-700 text-white p-2 rounded-md hover:bg-black transition"
        >
          Search
        </button>
      </div>
      <div className="w-full max-w-[998px]">
        {results && Array.isArray(results) ? (
          results.map((song) => (
            <div
              key={song._id}
              className="flex justify-between items-center bg-zinc-800 p-4 rounded-lg shadow-lg mb-2"
            >
              <div>
                <h3 className="text-white text-lg">{song.title}</h3>
                <p className="text-gray-400">{song.artist}</p>
              </div>
              <button
                onClick={() => { handlePlay(song) }}
                className="bg-zinc-700 text-white p-2 rounded-md hover:bg-black transition"
              >
                Play
              </button>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
