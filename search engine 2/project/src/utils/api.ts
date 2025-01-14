import { WikiSearchResult } from '../types/search';

const DUCKDUCKGO_PROXY = 'https://api.duckduckgo.com/';
const WIKIPEDIA_API = 'https://en.wikipedia.org/w/api.php';

export async function searchWikipedia(query: string): Promise<WikiSearchResult[]> {
  const endpoint = `${WIKIPEDIA_API}?action=query&list=search&srlimit=10&format=json&origin=*&srsearch=${encodeURIComponent(query)}`;
  
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.query.search;
  } catch (error) {
    console.error('Wikipedia search failed:', error);
    return [];
  }
}

export async function searchDuckDuckGo(query: string) {
  const endpoint = `${DUCKDUCKGO_PROXY}/?q=${encodeURIComponent(query)}&format=json`;
  
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.RelatedTopics || [];
  } catch (error) {
    console.error('DuckDuckGo search failed:', error);
    return [];
  }
}