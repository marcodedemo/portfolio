import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import Router from './router';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import Palettes from './data/Palettes'; 

function App() {
  const [mode, setMode] = useState('dark');
  
  const [palette, setPalette] = useState(Palettes.find(p => p.id === 'blue'));

  const getSystemMode = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  useEffect(() => {
    setMode(getSystemMode());
  }, []);

  const theme = useMemo(() => createTheme({
    spacing: 8,
    palette: {
      mode: mode, 
      primary: {
        main: palette.main,
        dark: palette.dark,
        light: palette.light,
      },
    },
    typography: {
      fontFamily: ['Roboto'].join(','),
    },
  }), [mode, palette]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar mode={mode} setMode={setMode} setPalette={setPalette} />
      <Router />
    </ThemeProvider>
  );
}

export default App;
