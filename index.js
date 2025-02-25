import antfu from "@antfu/eslint-config"

export function config(options, ...customRules) {
  return antfu({
    react: false,
    typescript: false,
    ignores: [
      "dist/**",
      "*.md",
    ],
    ...(options?.antfu ? options.antfu : {}),
  }, {
    rules: {
      "node/prefer-global/process": ["error", "always"],
      "unused-imports/no-unused-vars": ["error", {
        caughtErrors: "none",
      }],
      "style/multiline-comment-style": ["error", "starred-block"],
      "style/quotes": ["error", "double"],
      "style/semi": ["off"],
      "style/brace-style": ["error", "1tbs"],
      "style/padding-line-between-statements": ["error", {
        blankLine: "always",
        prev: "block-like",
        next: "*",
      }, {
        blankLine: "never",
        prev: ["const", "let"],
        next: ["const", "let"],
      }, {
        blankLine: "always",
        prev: "*",
        next: "return",
      }],
      "curly": ["error", "all"],
    },
  }, ...customRules)
}

export default config();
