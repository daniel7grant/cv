module.exports = {
	"transform": {
		".*": "<rootDir>/node_modules/babel-jest"
	},
	"moduleNameMapper": {
		"\\.(css|scss)$": "<rootDir>/test/null.css"
	},
	"collectCoverage": true,
	"coverageDirectory": "coverage",
	"coverageReporters": ["html", "text"],
	"testEnvironment": "jsdom"
}