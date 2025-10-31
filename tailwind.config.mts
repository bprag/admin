function initSpacing() {
  const max = 500;
  const spacing = Array.from({ length: max + 1 }, (_, i) => i).reduce(
    (acc, cur) => Object.assign(acc, { [cur]: `${cur}px` }),
    Object.create(null),
  );

  return Object.assign(spacing, { px: '1px' });
}

export default {
  content: ['src/**/*.{vue,js,ts,jsx,tsx,html}', './index.html'],
  prefix: '',
  theme: {
    spacing: initSpacing(),
    fontSize: {
      xs: ['calc(var(--text,16px)*0.750)', 'calc(1.00*var(--text,16px))'],
      sm: ['calc(var(--text,16px)*0.875)', 'calc(1.25*var(--text,16px))'],
      md: ['calc(var(--text,16px)*1.000)', 'calc(1.50*var(--text,16px))'],
      lg: ['calc(var(--text,16px)*1.125)', 'calc(1.75*var(--text,16px))'],
      xl: ['calc(var(--text,16px)*1.250)', 'calc(1.75*var(--text,16px))'],
      '2xl': ['calc(var(--text,16px)*1.500)', 'calc(2*var(--text,16px))'],
    },
    borderRadius: {
      none: '0px',
      sm: 'calc(var(--radius,16px) * 0.125)',
      md: 'calc(var(--radius,16px) * 0.375)',
      lg: 'calc(var(--radius,16px) * 0.5)',
      xl: 'calc(var(--radius,16px) * 0.75)',
      '2xl': 'calc(var(--radius,16px) * 1.0)',
    },
    blur: {
      DEFAULT: '8px',
      none: '',
      sm: '4px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '40px',
    },
    maxWidth: ({ theme, breakpoints }) => ({
      ...theme('spacing'),
      none: 'none',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      prose: '65ch',
      ...breakpoints(theme('screens')),
    }),
    columns: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      background: {
        DEFAULT: 'var(--background)',
      },
      foreground: {
        DEFAULT: 'var(--foreground)',
      },
      primary: {
        DEFAULT: 'var(--primary)',
        foreground: 'var(--primary-foreground)',
        // hover: 'var(--accent-hover)',
        // lighter: 'has(val(--accent-lighter)',
      },
      accent: {
        DEFAULT: 'var(--accent)',
        foreground: 'var(--accent-foreground)',
      },
      destructive: {
        DEFAULT: 'var(--destructive)',
        foreground: 'var(--destructive-foreground)',
      },
      muted: {
        DEFAULT: 'var(--muted)',
        foreground: 'var(--muted-foreground)',
      },
      card: {
        DEFAULT: 'var(--card)',
        foreground: 'var(--card-foreground)',
      },
      popover: {
        DEFAULT: 'var(--popover)',
        foreground: 'var(--popover-foreground)',
      },
      border: {
        DEFAULT: 'var(--border)',
      },
      input: {
        DEFAULT: 'var(--input)',
      },
      ring: 'var(--ring)',
    }),
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
    },
    keyframes: {
      spin: {
        to: {
          transform: 'rotate(360deg)',
        },
      },
      ping: {
        '75%, 100%': {
          transform: 'scale(2)',
          opacity: '0',
        },
      },
      pulse: {
        '50%': {
          opacity: '.5',
        },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
      },
    },
  },
  plugins: [],
};
