module.exports = {
    theme: {

    },
    plugins: [require(`@tailwindcss/typography`)],
    mode: 'jit',
    content: {
        enabled: true,
        content: ['./src/**/*.{html,ts}']
    }
}