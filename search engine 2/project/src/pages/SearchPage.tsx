import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import Footer from '../components/Footer';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="border-b pb-4 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 pt-4">
          <SearchBar />
        </div>
      </div>
      
      <main className="flex-1 py-8">
        <SearchResults />
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchPage;