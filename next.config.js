// Copyright (c) 2022 Evolving Software Corporation
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
}

module.exports = nextConfig