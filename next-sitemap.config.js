/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://burban.me',
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  // ...other options
};
