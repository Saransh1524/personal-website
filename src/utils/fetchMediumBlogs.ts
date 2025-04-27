import Parser from 'rss-parser';

const MEDIUM_RSS_URL = 'https://medium.com/feed/@naolesaransh';

export async function fetchMediumBlogs() {
  const parser = new Parser();
  const feed = await parser.parseURL(MEDIUM_RSS_URL);
  // Return only the first blog post
  return feed.items.slice(0, 1);
}