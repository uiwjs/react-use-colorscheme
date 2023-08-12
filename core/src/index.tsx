import React, { useSyncExternalStore } from 'react';

export enum ColorScheme {
  Dark = 'dark',
  Light = 'light',
  NoPreference = 'no-preference',
}

function getSnapshot() {
  return ColorScheme;
}

function getServerSnapshot() {
  return ColorScheme;
}

function subscribe(callback: () => void) {
  document.addEventListener('colorschemechange', callback);
  return () => {
    document.removeEventListener('colorschemechange', callback);
  };
}

export function useColorScheme() {
  const colorscheme = useSyncExternalStore<ColorScheme>(subscribe, getSnapshot, getServerSnapshot);
  return colorscheme;
}
