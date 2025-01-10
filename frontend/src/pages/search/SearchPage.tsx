import React, { useState } from 'react';
import axios from 'axios';
import { Search } from 'lucide-react';


const SearchBar = () => {
  const [query, setQuery] = useState('');
  interface Song {
    _id: string;
    title: string;
    artist: string;
  }

  const [results, setResults] = useState<Song[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search?q=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <div className="flex items-center bg-zinc-900 p-4 rounded-lg shadow-lg max-w-[998px] w-full mb-4">
        <Search className="text-gray-500 mr-3" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
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
        {results.map((song) => (
          <div key={song._id} className="flex justify-between items-center bg-zinc-800 p-4 rounded-lg shadow-lg mb-2">
            <div>
              <h3 className="text-white text-lg">{song.title}</h3>
              <p className="text-gray-400">{song.artist}</p>
            </div>
            <button
              onClick={() => alert(`Playing ${song.title}`)}
              className="bg-zinc-700 text-white p-2 rounded-md hover:bg-black transition"
            >
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;