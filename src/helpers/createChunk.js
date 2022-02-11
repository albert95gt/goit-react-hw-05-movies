import { lazy } from 'react';
export const createChunk = componentName => {
  return lazy(() =>
    import(`../pages/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};
