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
           
            width: {
                'footnote': '33.33%', // Added custom width for third
              },
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

                        blockquote: {
                            borderLeftWidth: '0.2rem',
                            borderLeftColor: theme('borderColor.main'),
                            paddingLeft: '1rem',
                            fontFamily: theme('fontFamily.serif'),
                            fontSize: 'normal',
                            fontStyle: 'italic',
                            fontWeight: 'normal',
                            lineHeight: 1.4,
                            '@media (min-width: theme("screens.sm"))': {
                                lineHeight: 1
                            }
                        }
                    }
                },
                
                DEFAULT: {
                    css: {
                        a: {
                            color: theme('colors.blue.600'),
                            textDecoration: 'none',
                            fontWeight: '500',
                            transition: 'color 0.2s ease-in-out',
                            '&:hover': {
                                color: theme('colors.blue.800'),
                                textDecoration: 'underline',
                            },
                        },
                        'html.dark a': {
                            color: theme('colors.blue.400'),
                            '&:hover': {
                                color: theme('colors.blue.300'),
                                textDecoration: 'underline',
                            },
                        },
                        'h1,h2,h3,h4,h5,h6': {
                            fontFamily: theme('fontFamily.serif'),
                            fontWeight: 500,
                        },
                        blockquote: {
                            borderLeftWidth: '0.2rem',
                            borderLeftColor: theme('borderColor.main'),
                            paddingLeft: '1rem',
                            fontFamily: theme('fontFamily.serif'),
                            fontSize: 'normal',
                            fontStyle: 'italic',
                            fontWeight: 'normal',
                            lineHeight: 1.4,
                            '@media (min-width: theme("screens.sm"))': {
                                lineHeight: 1
                            }
                        }
                    }
                },
                lg: {
                    css: {
                        blockquote: {
                            paddingLeft: '1rem' // Changed from 0 to maintain consistent spacing
                        }
                    }
                }
            })
        }
    },
    plugins: [require('@tailwindcss/typography')]
};