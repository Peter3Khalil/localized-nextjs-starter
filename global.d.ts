import en from './src/languages/en.json';

export type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}
}
