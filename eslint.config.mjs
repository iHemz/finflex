import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "import/extensions": "off",
      "@typescript-eslint/quotes": ["error", "double"],
      "@typescript-eslint/no-unused-vars": "off",
      "linebreak-style": 0,
      "no-console": "off",
      "no-async-promise-executor": "off",
      "no-unsafe-optional-chaining": "off",
      "no-unused-vars": "off",
      "nonblock-statement-body-position": "off",
      "consistent-return": "off",
      "no-plusplus": "off",
    },
  },
];

export default eslintConfig;
