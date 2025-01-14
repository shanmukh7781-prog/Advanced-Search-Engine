import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, ChevronRight } from 'lucide-react';

const games = [
  {
    id: 1,
    title: "2048",
    url: "https://play2048.co/",
    description: "Join the numbers to get to 2048!"
  },
  {
    id: 2,
    title: "Wordle",
    url: "https://www.nytimes.com/games/wordle/index.html",
    description: "Guess the word in 6 tries"
  },
  {
    id: 3,
    title: "Tetris",
    url: "https://tetris.com/play-tetris",
    description: "Classic block-stacking puzzle game"
  }
];

const GameSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <div className="flex items-center mb-6">
        <Gamepad2 className="w-6 h-6 text-blue-500 mr-2" />
        <h2 className="text-2xl font-semibold">Quick Games</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {games.map((game) => (
          <motion.a
            key={game.id}
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-medium text-gray-800">{game.title}</h3>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
            </div>
            <p className="text-sm text-gray-600">{game.description}</p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default GameSection;