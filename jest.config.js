export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
    // process `*.tsx` files with `ts-jest`        
        "^.+\\.tsx?$": "ts-jest"
    },
    rootDir: 'src',
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',        
        "\\.(css|less)$": "<rootDir>/test/__mocks__/styleMock.js",
        '^@app/(.*)$': '<rootDir>/$1'
    }
}