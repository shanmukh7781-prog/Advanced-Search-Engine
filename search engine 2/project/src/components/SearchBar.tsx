import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Mic } from 'lucide-react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <motion.form
      onSubmit={handleSearch}
      className="w-full max-w-2xl mx-auto"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex items-center w-full px-6 py-3 rounded-full border hover:shadow-md focus-within:shadow-md"
        whileHover={{ boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }}
      >
        <Search className="w-5 h-5 text-gray-400 mr-3" />
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 outline-none text-lg"
          placeholder="Search..."
        />
        
        <motion.button
          type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="ml-3"
        >
          <Mic className="w-5 h-5 text-blue-500" />
        </motion.button>
      </motion.div>

      <div className="flex justify-center gap-4 mt-8">
        <motion.button
          type="submit"
          className="px-4 py-2 bg-gray-50 text-sm text-gray-700 rounded hover:bg-gray-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Search
        </motion.button>
        
        <motion.button
          type="button"
          className="px-4 py-2 bg-gray-50 text-sm text-gray-700 rounded hover:bg-gray-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/lucky')}
        >
          I'm Feeling Lucky
        </motion.button>
      </div>
    </motion.form>
  );
};

export default SearchBar;