import type { NextConfig } from "next";
import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl('./src/i18n.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'assets.ctfassets.net',
      },
    ],
  },
};

export default withNextIntlConfig(nextConfig);
