import React, { useSyncExternalStore } from 'react';

export enum ColorScheme {
  Dark = 'dark',
  Light = 'light',
  NoPreference = 'no-preference',
}

function getSnapshot() {
  const matcher = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return matcher ? ColorScheme.Dark : ColorScheme.Light;
}

function getServerSnapshot() {
  return ColorScheme.NoPreference;
}

function subscribe(callback: () => void) {
  const matcher = window.matchMedia('(prefers-color-scheme: dark)');
  matcher.addEventListener('change', callback);
  return () => {
    if (matcher) {
      matcher.removeEventListener('change', callback);
    }
  };
}

export function useColorScheme() {
  const colorscheme = useSyncExternalStore<ColorScheme>(subscribe, getSnapshot, getServerSnapshot);
  return colorscheme;
}
