/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Static export me images optimize hone ke liye zaroori hai
  },
};

export default nextConfig;