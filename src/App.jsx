import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import Router from './router';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import Palettes, { TextPalettes } from './data/Palettes'; 

function App() {

  const getSystemMode = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode ? savedMode : getSystemMode();
  });

  const [palette, setPalette] = useState(Palettes.find(p => p.id === 'blue'));

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const selectedTextPalette = mode === 'dark'
    ? TextPalettes.find(p => p.id === 'dark')
    : TextPalettes.find(p => p.id === 'light');

  const theme = useMemo(() => createTheme({
    spacing: 8,
    palette: {
      mode: mode, 
      primary: {
        main: palette.main,
        dark: palette.dark,
        light: palette.light,
      },
      text: {
        primary: selectedTextPalette.primary ,
        secondary: selectedTextPalette.secondary,
      }
    },
    typography: {
      fontFamily: ['Roboto'].join(','),
    },
  }), [mode, palette, selectedTextPalette]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar mode={mode} setMode={setMode} setPalette={setPalette} />
      <Router />
    </ThemeProvider>
  );
}

export default App;