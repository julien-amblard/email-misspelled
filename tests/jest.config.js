module.exports = {
	preset: "ts-jest",
	rootDir: "../",
	verbose: true,
	setupFiles: ["./tests/jest.setup.js"],
	moduleNameMapper: {
		"\\.(css|less|scss|sss|styl)$": "<rootDir>node_modules/jest-css-modules",
	},
	moduleDirectories: ["node_modules", "<rootDir>src/"],
	moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
	coverageDirectory: "<rootDir>coverage",
	testPathIgnorePatterns: ["<rootDir>node_modules/", "<rootDir>demo/", "<rootDir>lib/", "<rootDir>src/"],
}
