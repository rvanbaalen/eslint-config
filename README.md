[&larr; See my other Open Source projects](https://robinvanbaalen.nl)

# @rvanbaalen/eslint-config
![NPM Downloads](https://img.shields.io/npm/d18m/%40rvanbaalen%2Feslint-config)
![GitHub License](https://img.shields.io/github/license/rvanbaalen/eslint-config)
![NPM Version](https://img.shields.io/npm/v/%40rvanbaalen%2Feslint-config)

A reusable default configuration for ESLint v9 built on top of [@antfu/eslint-config](https://www.npmjs.com/package/@antfu/eslint-config).
This configuration provides a sensible set of rules to keep JavaScript code clean and consistent.

## Installation

Install the package and its required dependencies using npm:

```bash
npm install --save-dev @rvanbaalen/eslint-config eslint
```

## Usage

### Basic Usage

In your project's ESLint configuration (e.g., `eslint.config.js`), import and extend the default configuration:

```javascript
import { config } from "@rvanbaalen/eslint-config";

export default config();
```

### Customization

If you need to customize the rules or override some options, you can import 
the configuration function and pass your custom options. For example:

```javascript
import { config } from "@rvanbaalen/eslint-config";

export default config(
  {
    // Option overrides for the underlying configuration
    antfu: {
      react: true // Enable React support if needed
    }
  },
  {
    // Additional or overriding ESLint rules
    semi: ["error", "always"]
  }
);
```

This approach allows you to tailor the ESLint rules to your project's specific 
requirements while still using a well-defined, default configuration.

## Running ESLint

Define a run script in your package json:

```js
{
  "scripts": {
    "lint": "eslint ."
  }
} 
```

## License

This project is licensed under the MIT License.
