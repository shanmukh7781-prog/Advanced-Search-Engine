export interface WikiSearchResult {
  pageid: number;
  title: string;
  snippet: string;
  timestamp: string;
}

export interface DuckDuckGoResult {
  FirstURL: string;
  Text: string;
  Icon: {
    URL: string;
  };
}