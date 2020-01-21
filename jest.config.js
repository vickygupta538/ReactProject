module.exports = {
  verbose: true,
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["./src/setupTests.js"],
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(spec|test).js?(x)"],

  collectCoverage: true,
  snapshotSerializers: ["enzyme-to-json/serializer"],
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/**/configureStore.{js,jsx}", "!src/index.{js,jsx}"],
  moduleNameMapper: {
    "^.+\\.(css|scss|svg)$": "identity-obj-proxy"
  },
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleFileExtensions: ["js", "jsx"],
  rootDir: ".",
  cache: false,
  testURL: "http://localhost"
};
