/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    removeConsole: true,
  },  
  compiler: {
    styledComponents: true,
  },  
};

module.exports = nextConfig;
