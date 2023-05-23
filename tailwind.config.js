const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js',
    // etc.
  ],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
  theme: {
    fontFamily: {
      'headline': ['Alegreya', 'sans-serif'],
      'body': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        black: {
          mid: '#09192b',
          asphalt: '#040c16',
        },
        blue: {
          ice: '#02d7fc',
          'ice-trans': 'rgba(2, 215, 252, 0.5)',
          meth: '#102b4a',
        },
        pink: {
          mid: '#f46bd1',
        },
        yellow: {
          mid: '#fee101',
          dark: '#eaa712',
        },
        beige: {
          light: '#fdf7ef ',
        }
      },
      screens: {
        '3xl': '1921px',
        'xxs': '325px',
        'xs': '410px',
      },
      inset: {
        '1/4': '25%',
        '1/2': '50%',
        '1/10': '10%',
        '1/20': '5%'
      },
      fontSize: {
        'xxs': '.65rem',
      },

      height: {
        '1/3': '33vh',
        '1/2': '50vh',
        '3/4': '75vh',
    },

      maxWidth: {
        '1/2': '50%',
        '3/5': '60%',
        '3/4': '75%',
        '4/5': '80%',
        '8xl': '1440px',
        '9xl': '1920px',
      },
      maxHeight: {
        '1/2': '50%',
        '3/4': '75%',
        '50vh': '50vh'
      },
      minWidth: {
        '3/4': '75%',
        '1/5': '20%',
      },
      width: {
        '3/10': '30%',
        '7/20': '35%',
      },
      minHeight: {
        '12rem' : '12rem',
        '18rem': '18rem',
        '24rem' : '24rem',
        '32rem' : '32rem',
      },
    borderRadius: {
      'xl' : '1rem',
      'xxl' : '1.75rem',
      '6xl' : '3rem',
    },
    borderWidth: {
      '60': '60px',
      },
      outline: {
        dashed: ['3px dashed #363636', '1px'],
      }
    },
    letterSpacing: {
      wider: '0.1em',
      widest: '0.2em',
      extra: '0.35em'
    },
    listStyleType: {
      circle: 'circle',
      disc: 'disc',
    }
  },
  variants: {}
}