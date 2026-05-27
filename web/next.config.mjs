import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Asus_elder-companion-ai' : '',
  images: {
    unoptimized: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  trailingSlash: true,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
