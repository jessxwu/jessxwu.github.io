const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans],
            serif: ['Newsreader', ...defaultTheme.fontFamily.serif]
        },
        extend: {
            textColor: {
                main: 'rgb(var(--color-text-main) / <alpha-value>)'
            },
            backgroundColor: {
                main: 'rgb(var(--color-bg-main) / <alpha-value>)',
                muted: 'rgb(var(--color-bg-muted) / <alpha-value>)'
            },
            borderColor: {
                main: 'rgb(var(--color-border-main) / <alpha-value>)'
            },
            typography: (theme) => ({
                dante: {
                    css: {
                        '--tw-prose-body': theme('textColor.main / 100%'),
                        '--tw-prose-headings': theme('textColor.main / 100%'),
                        '--tw-prose-lead': theme('textColor.main / 100%'),
                        '--tw-prose-links': theme('textColor.main / 100%'),
                        '--tw-prose-bold': theme('textColor.main / 100%'),
                        '--tw-prose-counters': theme('textColor.main / 100%'),
                        '--tw-prose-bullets': theme('textColor.main / 100%'),
                        '--tw-prose-hr': theme('borderColor.main / 100%'),
                        '--tw-prose-quotes': theme('textColor.main / 100%'),
                        '--tw-prose-quote-borders': theme('borderColor.main / 100%'),
                        '--tw-prose-captions': theme('textColor.main / 100%'),
                        '--tw-prose-code': theme('textColor.main / 100%'),
                        '--tw-prose-pre-code': theme('colors.zinc.100'),
                        '--tw-prose-pre-bg': theme('colors.zinc.800'),
                        '--tw-prose-th-borders': theme('borderColor.main / 100%'),
                        '--tw-prose-td-borders': theme('borderColor.main / 100%'),  
                    }
                },
                // I added these myself - not working
                p: {
                    marginTop: '0em',
                    marginBottom: '0.1em',
                  },
                  'h1, h2, h3, h4, h5, h6': {
                    marginBottom: '0.2em',
                  },
                  'ul, ol': {
                    marginTop: '0.5em',
                    marginBottom: '0.5em',
                  },
                  li: {
                    marginTop: '0.2em',
                    marginBottom: '0.2em',
                  },
                  blockquote: {
                    marginTop: '1em',
                    marginBottom: '1em',
                  },
                DEFAULT: {
                    css: {
                        a: {
                            color: '#357abd', // A nice blue color
                            fontWeight: 'normal',
                            textDecoration: 'none', // No underline initially
                            textDecorationStyle: 'solid',
                            textDecorationThickness: '1px',
                            textUnderlineOffset: '2px',
                            '&:hover': {
                                color: '#2d5fa0', // Slightly darker blue on hover
                                textDecoration: 'underline', // Underline appears on hover
                                textDecorationStyle: 'solid', // Solid underline
                            }
                        },
                        'h1,h2,h3,h4,h5,h6': {
                            fontFamily: theme('fontFamily.serif'),
                            fontWeight: 500,
                        },
                        blockquote: {
                            border: 0,
                            fontFamily: theme('fontFamily.serif'),
                            fontSize: '1.2em',
                            fontStyle: 'italic',
                            fontWeight: 'normal',
                            lineHeight: 1.4,
                            paddingLeft: 0,
                            '@media (min-width: theme("screens.sm"))': {
                                fontSize: '1.3em',
                                lineHeight: 1
                            }
                        }
                    }
                },
                lg: {
                    css: {
                        blockquote: {
                            paddingLeft: 0
                        }
                    }
                }
            })
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
