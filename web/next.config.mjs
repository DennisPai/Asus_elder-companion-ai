import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  trailingSlash: true,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
