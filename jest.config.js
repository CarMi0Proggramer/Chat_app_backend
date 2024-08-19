/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
        "^.+.tsx?$": ["ts-jest", {}],
    },
    verbose: true,
    silent: true,
    testPathIgnorePatterns: ["/dist/"],
    moduleFileExtensions: ["js", "ts"],
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
};
