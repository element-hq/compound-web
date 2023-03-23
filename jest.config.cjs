
module.exports = {
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": ['<rootDir>/src/setupTests.ts'],
  "moduleNameMapper": {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
    "\\.svg$": "<rootDir>/test/__mock__/svgr.js"
  }
}
