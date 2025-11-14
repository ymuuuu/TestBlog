/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] }
    });
    return cfg;
  },
  // Silence Turbopack warning - we need webpack for markdown loader
  turbopack: {},
  // Export static HTML
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

