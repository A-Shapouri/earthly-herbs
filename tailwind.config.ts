import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'black': '#040606',
      'grey': {
        '50': '#f2f2f2',
        '100': '#d9d9d9',
        '200': '#cccccc',
        '300': '#bfbfbf',
        '400': '#b3b3b3',
        '500': '#999999',
        '600': '#8c8c8c',
        '700': '#808080',
        '800': '#737373',
        '900': '#666666',
        '950': '#595959',
      },
      'primary': {
        '50': '#a8dba6',
        '100': '#93d290',
        '200': '#7ec97a',
        '300': '#69c064',
        '400': '#54b74f',
        '500': '#3e8f3a',
        '600': '#357931',
        '700': '#2b6328',
        '800': '#224e20',
        '900': '#183817',
        '950': '#0f220e',
        DEFAULT: '#3e8f3a',
      },
      'secondary': {
        '50': '#ffdeb8',
        '100': '#ffd099',
        '200': '#ffc27a',
        '300': '#ffb45c',
        '400': '#ffa63d',
        '500': '#ff8a00',
        '600': '#e07900',
        '700': '#c26900',
        '800': '#a35800',
        '900': '#854800',
        '950': '#663700',
        DEFAULT: '#ff8a00',
      },
      'brown': {
        '50': '#927851',
        '100': '#856d49',
        '200': '#786242',
        '300': '#6a573b',
        '400': '#5d4d34',
        '500': '#433725',
        '600': '#362c1e',
        '700': '#292116',
        '800': '#1c170f',
        '900': '#0e0c08',
        '950': '#010101',
        DEFAULT: '#433725',
      },
      'desolace': {
        '50': '#f0f2ed',
        '100': '#e6eae1',
        '200': '#dce1d5',
        '300': '#d3d9ca',
        '400': '#c9d0be',
        '500': '#b5bfa6',
        '600': '#abb69a',
        '700': '#a1ae8e',
        '800': '#97a582',
        '900': '#8e9d77',
        '950': '#84946b',
        DEFAULT: '#b5bfa6',
      },
      'flurries': {
        '50': '#fcfaf8',
        '100': '#faf8f4',
        '200': '#f8f6f1',
        '300': '#f7f4ed',
        '400': '#f5f1ea',
        '500': '#f2ede3',
        '600': '#f0ebe0',
        '700': '#efe9dc',
        '800': '#ede6d9',
        '900': '#ece4d5',
        '950': '#eae2d2',
        DEFAULT: '#f2ede3',
      },
      'frost': {
        '50': '#f0f7f9',
        '100': '#ecf5f7',
        '200': '#e9f3f6',
        '300': '#e5f2f4',
        '400': '#e1f0f3',
        '500': '#daecf0',
        '600': '#d6eaef',
        '700': '#d3e8ed',
        '800': '#cfe6ec',
        '900': '#cbe5ea',
        '950': '#c8e3e9',
        DEFAULT: '#daecf0',
      },
      'rocky': {
        '50': '#f2f1ef',
        '100': '#e9e8e4',
        '200': '#e0ded8',
        '300': '#d7d4cd',
        '400': '#cecac2',
        '500': '#bcb7ab',
        '600': '#b3ada0',
        '700': '#aaa494',
        '800': '#a19a89',
        '900': '#98907e',
        '950': '#8f8672',
        DEFAULT: '#bcb7ab',
      },
      'teal': {
        '50': '#9aae99',
        '100': '#8ca38b',
        '200': '#7e977d',
        '300': '#708c6f',
        '400': '#657d64',
        '500': '#4e614d',
        '600': '#435342',
        '700': '#374536',
        '800': '#2c362b',
        '900': '#202820',
        '950': '#151a15',
        DEFAULT: '#4e614d',
      },
    },
    screens: {
      'sm': '640px',
      'md': '1024px',
      'at-xs': { 'max': '639px' },
      'at-sm': { 'min': '640px', 'max': '1023px' },
      'at-md': { 'min': '1024px', 'max': '1199px' },
      'at-lg': '1200px',
      'lt-md': { 'max': '1023px' },
      'lt-lg': { 'max': '1199px' },
      'bw-xs-lg': { 'min': '640px', 'max': '1199px' },
      'gt-xs': { 'min': '640px' },
      'gt-sm': { 'min': '1024px' },
    },
    fontFamily: {
      'open-sauce-black': 'OpenSauceOneBlack',
      'open-sauce-light': 'OpenSauceOneLight',
      'open-sauce-medium': 'OpenSauceOneMedium',
      'open-sauce-regular': 'OpenSauceOneRegular',
      'open-sauce-semi-bold': 'OpenSauceOneSemiBold',
    },
    fontSize: {
      'm-tiny': '0.4375rem', //7px
      'm-xxs': '0.625rem', //10px
      'm-xs': '0.6875rem', //11px
      'm-sm': '0.75rem', //12px
      'm-base': '0.8125rem', //13px
      'm-md': '0.875rem', //14px
      'm-lg': '1rem', //16px
      'm-xl': '1.25rem', //20px
      'm-xxl': '1.5rem', //24px
      'm-huge': '2rem', //32px

      'd-tiny': '0.5rem', //8px
      'd-xxs': '0.75rem', //12px
      'd-xs': '0.875rem', //14px
      'd-sm': '1rem', //16px
      'd-base': '1.125rem', //18px
      'd-md': '1.25rem', //20px
      'd-lg': '1.5rem', //24px
      'd-xl': '2rem', //32px
      'd-xxl': '2.5rem', //40px
      'd-huge': '3rem', //48px
    },
    extend: {
    },
  },
  plugins: [
  ],
};
export default config;
