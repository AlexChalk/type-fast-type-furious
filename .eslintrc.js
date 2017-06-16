module.exports = {
  "plugins": ["jasmine"],
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jasmine" :true
  },
  "extends": ["eslint:recommended","plugin:jasmine/recommended"],
  "parserOptions": {
    "sourceType": "module"
  },
  "globals": {
    "fixture": true,
    "startTimer": true,
    "stopTimer": true,
    "getKeyDownFired": true,
    "formatXHRQuoteToArray": true,
    "displayWords": true,
    "markWordAsTyped": true,
    "markWordAsIncorrect": true,
    "assessWord": true,
    "evaluateKeypress": true,
    "userInput": true,
    "removeInitialWhitespace": true,
    "replaceUserInput": true
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
