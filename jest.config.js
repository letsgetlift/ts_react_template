module.exports = {
  collectCoverage: true,
  moduleFileExtensions: ["js", "jsx", "json", "tsx", "ts"],
  globals: {
    window: true,
  },
  collectCoverageFrom: ["**/*.jsx", "**/*.js", "**/*.ts", "**/*.tsx"],
  moduleDirectories: [
    "node_modules",
    ".",
    "__mocks__",
    "__tests__",
    "components",
    "helpers",
    "pages",
    "redux",
  ],
  testMatch: [
    "**/*.(test|spec).(js)",
    "**/*.(test|spec).(ts)",
    "**/*.(test|spec).(tsx)",
  ],
  setupFilesAfterEnv: ["<rootDir>/__tests__/setup.js"],
  setupFiles: ["jest-localstorage-mock"],
  coverageReporters: ["json", "lcov"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "setup.js",
    "jest.config.js",
    "setup.js",
    "/utils/",
    "/static/",
    "/locales/",
    "/coverage/",
    "/authConfig/",
    "/api/",
    "/__mocks__/",
    "/__tests__/",
    "components/HOC/helpers",
    "store/store.js",
    "store/reducers/index.js",
    "store/sagas/index.js",
    "index.js",
  ],
  moduleNameMapper: {
    "^.+\\.(css|scss)$": "identity-obj-proxy",
    "\\.(svg)$": "__mocks__/fileTransformer.js",
  },
};
