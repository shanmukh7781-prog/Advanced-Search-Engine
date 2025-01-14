import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchWikipedia, searchDuckDuckGo } from '../utils/api';
import { WikiSearchResult, DuckDuckGoResult } from '../types/search';

export function useSearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [wikiResults, setWikiResults] = useState<WikiSearchResult[]>([]);
  const [ddgResults, setDdgResults] = useState<DuckDuckGoResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchResults() {
      if (!query.trim()) return;

      setIsLoading(true);
      setError(null);

      try {
        const [wikiData, ddgData] = await Promise.all([
          searchWikipedia(query),
          searchDuckDuckGo(query)
        ]);
        
        setWikiResults(wikiData);
        setDdgResults(ddgData);
      } catch (err) {
        setError('Failed to fetch search results. Please try again.');
        setWikiResults([]);
        setDdgResults([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchResults();
  }, [query]);

  return { 
    wikiResults,
    ddgResults,
    isLoading,
    error
  };
}