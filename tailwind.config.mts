import { addDynamicIconSelectors } from '@iconify/tailwind';
import tailwindcssAnimate from 'tailwindcss-animate';

function initSpacing() {
  const max = 500;
  const spacing = Array.from({ length: max + 1 }, (_, i) => i).reduce(
    (acc, cur) => Object.assign(acc, { [cur]: `${cur}px` }),
    Object.create(null),
  );

  return Object.assign(spacing, { px: '1px' });
}

export default {
  content: ['src/**/*.{vue,js,ts,jsx,tsx,html}', './index.html',"./docs/**/*.{md,vue,ts}","./docs/.vitepress/**/*.{js,ts,vue}"],
  prefix: '',
  theme: {
    spacing: initSpacing(),
    fontSize: {
      xs: ['calc(var(--text, 16px) * 0.75)', 'calc(1 * var(--text, 16px))'],
      sm: ['calc(var(--text, 16px) * 0.875)', 'calc(1.25 * var(--text, 16px))'],
      md: ['calc(var(--text, 16px) * 1)', 'calc(1.5 * var(--text, 16px))'],
      lg: ['calc(var(--text, 16px) * 1.125)', 'calc(1.75 * var(--text, 16px))'],
      xl: ['calc(var(--text, 16px) * 1.25)', 'calc(1.75 * var(--text, 16px))'],
      '2xl': ['calc(var(--text, 16px) * 1.5)', 'calc(2 * var(--text, 16px))'],
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
        DEFAULT: 'oklch(var(--background) / <alpha-value>)',
      },
      foreground: {
        DEFAULT: 'oklch(var(--foreground) / <alpha-value>)',
      },
      primary: {
        DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
        foreground: 'oklch(var(--primary-foreground) / <alpha-value>)',
      },
      secondary: {
        DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
        foreground: 'oklch(var(--secondary-foreground) / <alpha-value>)',
      },
      muted: {
        DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
        foreground: 'oklch(var(--muted-foreground) / <alpha-value>)',
      },
      accent: {
        DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
        foreground: 'oklch(var(--accent-foreground) / <alpha-value>)',
      },
      destructive: {
        DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
      },
      card: {
        DEFAULT: 'oklch(var(--card) / <alpha-value>)',
        foreground: 'oklch(var(--card-foreground) / <alpha-value>)',
      },
      popover: {
        DEFAULT: 'oklch(var(--popover) / <alpha-value>)',
        foreground: 'oklch(var(--popover-foreground) / <alpha-value>)',
      },
      border: {
        DEFAULT: 'oklch(var(--border))',
      },
      input: {
        DEFAULT: 'oklch(var(--input))',
      },
      ring: 'oklch(var(--ring) / <alpha-value>)',
    }),
    extend: {
      boxShadow: {
        out: `0 6px 16px 0 rgb(0 0 0 / 8%),
          0 3px 6px -4px rgb(0 0 0 / 12%),
          0 9px 28px 8px rgb(0 0 0 / 5%)`,
      },
    },
  },
  plugins: [tailwindcssAnimate, addDynamicIconSelectors()],
};
