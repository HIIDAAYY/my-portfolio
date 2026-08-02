import nextJest from "next/jest.js";

// next/jest menangani transpile SWC, path alias dari tsconfig, dan mock CSS.
const createJestConfig = nextJest({ dir: "./" });

/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverageFrom: [
    "components/**/*.{ts,tsx}",
    "lib/**/*.{ts,tsx}",
    "!**/*.test.{ts,tsx}",
  ],
};

export default createJestConfig(config);
