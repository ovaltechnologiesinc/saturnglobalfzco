/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'country-telephone-data' {
  export interface RawCountry {
    name: string;
    iso2: string;
    dialCode: string;
    priority: number;
    format?: string;
  }
  export const allCountries: RawCountry[];
}
