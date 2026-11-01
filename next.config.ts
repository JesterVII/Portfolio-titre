import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ignorer les erreurs ESLint lors du build sur Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },
  // (Optionnel) Ignorer les erreurs de types TypeScript si nécessaire
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;