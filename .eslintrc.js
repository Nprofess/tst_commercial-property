module.exports = {
    env: {
        browser: true,
    },
    extends: [
        'airbnb-base',
    ],
    rules: {
        indent: ['error', 4, {
            SwitchCase: 1,
        }],
        '@html-eslint/no-multiple-h1': 'error',
    },
    plugins: ['@html-eslint'],
    overrides: [
        {
            files: ['*.html'],
            parser: '@html-eslint/parser',
            extends: ['plugin:@html-eslint/recommended'],
            rules: {
                // '@html-eslint/indent': ['error', 4],
                // '@html-eslint/require-img-alt': 'error',
            },
        },
    ],
};
