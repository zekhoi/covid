export default {
  siteUrl: process.env.HOSTNAME,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/404", "/api"],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
