module.exports = {
  "presets": [
    "@babel/preset-env",
  ],
  "plugins": [
      "@babel/syntax-dynamic-import",
  ],
  "env": {
    "build": {
    "plugins": [
        "@babel/syntax-dynamic-import"
        ]
    }
  }
}
