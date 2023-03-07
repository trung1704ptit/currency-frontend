const withAntdLess = require('next-plugin-antd-less');

const nextConfig = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    return config;
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = withAntdLess(nextConfig);
