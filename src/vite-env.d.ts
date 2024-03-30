/// <reference types="vite/client" />
//env.d.ts
declare namespace NodeJS {
    type Timeout = any;
  }

  declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
  }
