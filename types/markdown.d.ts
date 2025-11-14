declare module '*.md' {
  import { ComponentType } from 'react';

  export const attributes: {
    [key: string]: any;
  };

  export const react: ComponentType;
}

