import type { NextConfig } from 'next'

const report = process.env.REPORT
if (!report) {
  console.log('\n┌──────────────────────────────────────────┐')
  console.log('│                                          │')
  console.log('│        [ Broadlistening Report ]         │')
  console.log('│                                          │')
  console.log('│   ERROR: Please set process.env.REPORT   │')
  console.log('│     (`REPORT=example npm run build`)     │')
  console.log('│                                          │')
  console.log('└──────────────────────────────────────────┘\n')
  throw new Error('REPORT environment variable is not defined.')
}

let nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  images: {
    unoptimized: true
  },
  env: { REPORT: report }
}

if (process.env.NODE_ENV === 'production') {
  nextConfig = {
    ...nextConfig,
    output: 'export',
    distDir: `../pipeline/outputs/${report}/report`
  }
}

export default nextConfig
