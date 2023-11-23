/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: 'ec2-15-228-243-0.sa-east-1.compute.amazonaws.com:3535',
  },
  headers: async () => {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
