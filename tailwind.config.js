module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '1142px',
        xl: '1374px',
        '2xl': '1560px',
      },
      fontFamily: {
        body: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        primary: '#00DCB5',
        bg: '#000104',
      },
      fontSize: {
        '2.125xl': ['1.875rem', '2.125rem'],
        '2.25xl': ['1.875rem', '2.75rem'],
        '2.5xl': ['1.875rem', '3.625rem'],
        '5xl': ['2.5rem', '3.625rem'],
        '5.5xl': ['3.125rem', '4rem'],
        '9.5xl': ['9.375rem', '10rem'],
        '10xl': ['12.5rem', '14rem'],
      },
      padding: {
        'key-mobile': '75%',
      },
      margin: {
        '-13': '-3.25rem',
        7.5: '1.875rem',
        15: '3.75rem',
        18: '4.5rem',
        69: '17.25rem',
      },
      width: {
        22: '5.5rem',
        192: '48rem',
      },
      height: {
        112: '28rem',
        128: '32rem',
      },
      maxWidth: {
        144: '36rem',
      },
      backgroundImage: {
        'key-mobile': 'url("/images/key-visual-mobile.png")',
        key: 'url("/images/Key-Visual-Header.png")',
        benefits: 'url("/images/grafik-benefits.svg")',
      },
      backgroundSize: {
        'key-mobile': '100%',
        key: '75%',
      },
      backgroundPosition: {
        'key-mobile': 'top',
        benefits: '-13.75rem',
      },
      gridTemplateColumns: {
        coop: '1fr max-content 1fr',
      },
      inset: {
        '-1.5': '-0.3rem',
        '-18': '-4.5rem',
        '-31': '-7.75rem',
        58: '14.5rem',
        66: '16.5rem',
        88: '22rem',
        108: '27rem',
        120: '25rem',
        121: '26.5rem',
        124: '31rem',
        125: '32.7rem',
        'coop-up': 'calc(50% - 6.5rem)',
        'coop-down': 'calc(50% - 5rem)',
      },
      transformOrigin: {
        info: '8% 24%',
      },
      animation: {
        'pulse-slow': 'pulse 7s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '90%',
          '@screen lg': {
            maxWidth: '870px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
          '@screen 2xl': {
            maxWidth: '1400px',
          },
        },
        '.btn': {
          textTransform: 'uppercase',
          color: '#00DCB5',
          fontSize: '1rem',
          lineHeight: '1.375rem',
          fontWeight: 'bold',
          boxShadow: '0px 0px 13px #00dcb5',
          padding: '1rem 2.5rem',
          borderRadius: '3.75rem',
          display: 'block',
          width: 'max-content',
          transition: 'box-shadow 0.3s ease-out',
          '&:hover, &:focus': {
            boxShadow: '0px 0px 24px #00DCB580;',
          },
          '@screen lg': {
            fontSize: '1.25rem',
            lineHeight: '2rem',
            padding: '1rem 3.625rem',
          },
        },
        '.btn-small': {
          fontSize: '1rem',
          lineHeight: '2rem',
          boxShadow: '0px 0px 12px #00dcb5',
          padding: '0.625rem 1.5rem',
        },
        '.swiper-button-prev': {
          top: '4rem !important',
        },
        '.swiper-button-next': {
          top: '4rem !important',
        },
        '.swiper-button-prev--team': {
          top: '10rem !important',
        },
        '.swiper-button-next--team': {
          top: '10rem !important',
        },
        '.closed-info': {
          writingMode: 'vertical-rl',
        },
        /* '.transition-delay-500': {
          transitionDelay: '500ms',
        },
        '.transition-delay-1000': {
          transitionDelay: '1000ms',
        },
        '.transition-delay-1500': {
          transitionDelay: '1500ms',
        },
        '.transition-delay-2000': {
          transitionDelay: '2000ms',
        },
        '.transition-delay-2500': {
          transitionDelay: '2500ms',
        },
        '.transition-delay-3000': {
          transitionDelay: '3000ms',
        },
        '.transition-delay-3500': {
          transitionDelay: '3500ms',
        }, */
      })
    },
  ],
}
