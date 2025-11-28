/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  async headers() {
    return [
      {
        source: '/widget/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'frame-ancestors https: http:;'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
