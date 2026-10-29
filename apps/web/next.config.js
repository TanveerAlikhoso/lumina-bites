const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@lumina/core', '@lumina/ui']
};

module.exports = nextConfig;
