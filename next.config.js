const path = require('path')
 
module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'media.dev.to', 
      'avatars.githubusercontent.com', 
      'github-readme-stats.vercel.app', 
      'github-readme-streak-stats.herokuapp.com', 
      'stardev.io', 
      'github-profile-summary-cards.vercel.app', 
      'github-profile-trophy.vercel.app'
    ],
    dangerouslyAllowSVG: true,
    unoptimized: true,  // Add this line
    remotePatterns: [   // Add this section
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.herokuapp.com',
      }
    ],
  }
}