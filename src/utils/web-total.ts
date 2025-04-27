import convert from 'xml-js';
import Parser from 'rss-parser';

export const uppercaseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getBlogWebTotal = async () => {
  const parser = new Parser();
  const feed = await parser.parseURL('https://medium.com/feed/@naolesaransh');

  // Convert Medium feed items to the expected format
  const blogs = feed.items.map(item => ({
    title: { _cdata: item.title },
    link: { _text: item.link },
    pubDate: { _text: item.pubDate },
    category: item.categories ? item.categories.map(cat => ({ _text: cat })) : [],
    enclosure: { _attributes: { url: item.enclosure?.url || '/images/projects/default.png' } }
  }));

  return blogs;
};
