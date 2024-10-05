const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream, mkdirSync, existsSync } = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

// Ensure the public directory exists
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

const sitemap = new SitemapStream({ hostname: 'https://www.sjacarecenter.com' });

const urls = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add more URLs as needed
];

urls.forEach(url => sitemap.write(url));
sitemap.end();

streamToPromise(sitemap).then(data => {
  createWriteStream(path.join(publicDir, 'sitemap.xml')).write(data);
}).catch(err => {
  console.error('Error generating sitemap', err);
});
