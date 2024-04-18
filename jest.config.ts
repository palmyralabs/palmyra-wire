import type {Config} from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
    // process `*.tsx` files with `ts-jest`        
        "^.+\\.tsx?$": "ts-jest"
    },
    rootDir: '.',    
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',        
        "\\.(css|less)$": "<rootDir>/test/__mocks__/styleMock.js",
        '^@app/(.*)$': '<rootDir>/$1',
        "lib/(.*)": "<rootDir>/lib/$1",
    }
}

export default config;