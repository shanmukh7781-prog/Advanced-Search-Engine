import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import GameSection from '../components/GameSection';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center text-4xl font-bold text-blue-500 mb-8">
            <Search className="w-8 h-8 mr-2" />
            <span>MySearch</span>
          </div>
          
          <SearchBar />
        </motion.div>

        <GameSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;