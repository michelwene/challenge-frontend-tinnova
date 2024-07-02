import nextJest from 'next/jest.js'

import type { Config } from 'jest'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^~hooks/(.*)$': '<rootDir>/@hooks/$1',
    '^~utils/(.*)$': '<rootDir>/@utils/$1',
    '^~styles/(.*)$': '<rootDir>/styles/$1',
    '^~form/(.*)$': '<rootDir>/components/@form/$1',
    '^~icons/(.*)$': '<rootDir>/components/@icons/$1',
    '^~ui/(.*)$': '<rootDir>/components/@ui/$1',
    '^~layout/(.*)$': '<rootDir>/components/@layout/$1',
    '^~features/(.*)$': '<rootDir>/components/@features/$1',
  },
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
