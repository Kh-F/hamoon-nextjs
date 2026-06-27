/** @type {import('next').NextConfig} */
const nextConfig = {
  // Both production domains point to the same deployment.
  // allowedDevOrigins lets the Next.js dev server accept HMR/tunnel
  // connections from these hosts without cross-origin warnings.
  allowedDevOrigins: ['hamooninstitute.com', 'hamooninstitute.ir'],
};
export default nextConfig;
