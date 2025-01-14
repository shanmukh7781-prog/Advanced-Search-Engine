import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchResults } from '../hooks/useSearchResults';
import { Loader2, Filter, ArrowUpDown, ExternalLink } from 'lucide-react';
import { WikiSearchResult, DuckDuckGoResult } from '../types/search';
import { getDisplayUrl } from '../utils/url';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const SearchResults = () => {
  const { wikiResults, ddgResults, isLoading, error } = useSearchResults();
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [showWiki, setShowWiki] = useState(true);
  const [showDDG, setShowDDG] = useState(true);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 className="w-8 h-8 text-blue-500" />
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20 text-red-500"
      >
        {error}
      </motion.div>
    );
  }

  const totalResults = (showWiki ? wikiResults.length : 0) + (showDDG ? ddgResults.length : 0);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-3xl mx-auto px-4"
    >
      {totalResults > 0 ? (
        <>
          <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-600">
              About {totalResults} results
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={showWiki}
                    onChange={(e) => setShowWiki(e.target.checked)}
                    className="form-checkbox h-4 w-4 text-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">Wikipedia</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="checkbox"
                    checked={showDDG}
                    onChange={(e) => setShowDDG(e.target.checked)}
                    className="form-checkbox h-4 w-4 text-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">DuckDuckGo</span>
                </label>
              </div>
              <button
                onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-500"
              >
                <ArrowUpDown className="w-4 h-4" />
                {sortOrder === 'asc' ? 'Oldest' : 'Newest'}
              </button>
            </div>
          </div>
          
          {/* Wikipedia Results */}
          {showWiki && wikiResults
            .sort((a, b) => sortOrder === 'asc' 
              ? new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
              : new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
            )
            .map((result: WikiSearchResult) => (
              <motion.div
                key={`wiki-${result.pageid}`}
                variants={item}
                className="mb-8 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <a 
                  href={`https://en.wikipedia.org/?curid=${result.pageid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="flex items-center gap-2 text-sm text-green-700 mb-1 group-hover:underline">
                    <span>wikipedia.org/wiki/{result.title?.replace(/ /g, '_') || ''}</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                  <h3 className="text-xl mb-1 text-blue-800 group-hover:underline">
                    {result.title}
                  </h3>
                  <p 
                    className="text-sm text-gray-600"
                    dangerouslySetInnerHTML={{ __html: result.snippet || '' }}
                  />
                  <div className="text-xs text-gray-400 mt-2">
                    {new Date(result.timestamp).toLocaleDateString()}
                  </div>
                </a>
              </motion.div>
          ))}

          {/* DuckDuckGo Results */}
          {showDDG && ddgResults.map((result: DuckDuckGoResult, index: number) => {
            if (!result?.FirstURL || !result?.Text) return null;
            
            const [title, description] = result.Text.split(' - ');
            
            return (
              <motion.div
                key={`ddg-${index}`}
                variants={item}
                className="mb-8 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <a 
                  href={result.FirstURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="flex items-center gap-2 text-sm text-green-700 mb-1 group-hover:underline">
                    <span>{getDisplayUrl(result.FirstURL)}</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                  <h3 className="text-xl mb-1 text-blue-800 group-hover:underline">
                    {title || result.Text}
                  </h3>
                  {description && (
                    <p className="text-sm text-gray-600">
                      {description}
                    </p>
                  )}
                  {result.Icon?.URL && (
                    <img 
                      src={result.Icon.URL}
                      alt="Site icon"
                      className="w-4 h-4 mt-2 rounded"
                    />
                  )}
                </a>
              </motion.div>
            );
          })}
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 text-gray-600"
        >
          No results found. Try different keywords.
        </motion.div>
      )}
    </motion.div>
  );
};

export default SearchResults;