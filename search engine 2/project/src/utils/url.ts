/**
 * Safely extracts and formats a display URL from a URL string
 */
export function getDisplayUrl(urlString: string): string {
  try {
    // Handle empty or invalid URLs
    if (!urlString) return '';
    
    // Try to parse the URL
    const url = new URL(urlString);
    return url.hostname;
  } catch (error) {
    // If URL parsing fails, return a fallback
    return new URL('https://example.com').hostname;
  }
}