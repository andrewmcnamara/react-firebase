module.exports = {
  parser: "babel-eslint",
  extends: [ "plugin:react/recommended","plugin:prettier/recommended"],
  plugins: [ "react-hooks" ], 
  // plugins: ["prettier", "react", "react-hooks", "jsx-a11y", "import"],
  // env: {
  //       "browser": true,
  //       "node": true
  //   }
  settings: {
      react: {
        pragma: "React",
        version: "detect"
      }
    }
}
