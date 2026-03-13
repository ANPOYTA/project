import js from "@eslint/js";

export default [
    {
        ignores: ["coverage/**", "dist/**", "node_modules/**"]
    },
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                document: "readonly",
                window: "readonly",
                console: "readonly",
                prompt: "readonly", 
                alert: "readonly"  
            }
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "error"
        }
    }
];