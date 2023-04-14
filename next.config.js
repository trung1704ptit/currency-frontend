const withAntdLess = require('next-plugin-antd-less');

const nextConfig = {
  modifyVars: { '@primary-color': '#0CB688' },
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    return config;
  }
};

module.exports = withAntdLess(nextConfig);
