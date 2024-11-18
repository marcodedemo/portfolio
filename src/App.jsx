import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import Router from './router';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'; 
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useMemo, useEffect } from 'react';
import Palettes, { TextPalettes } from './data/Palettes'; 

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UtilityButton from './fragments/UtilityButton'
import { Box } from '@mui/material';

function App() {

  // Acquisizione darkMode del sistema
  const getSystemMode = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Controllo se nella cache ho il darkMode, altrimenti lo setto a dark
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode ? savedMode : 'dark';
  });

  // Colore primario di default
  const [palette, setPalette] = useState(Palettes.find(p => p.id === 'blue'));

  // Imposto nelle cache il darkMode quando viene definito
  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  // Selezione della palette del testo
  const selectedTextPalette = mode === 'dark'
    ? TextPalettes.find(p => p.id === 'dark')
    : TextPalettes.find(p => p.id === 'light');

  // Definizione del thema
  const theme = useMemo(() => {
    let createdTheme = createTheme({
      spacing: 8,
      palette: {
        mode: mode, 
        primary: {
          main: palette.main,
          dark: palette.dark,
          light: palette.light,
        },
        text: {
          primary: selectedTextPalette.primary,
          secondary: selectedTextPalette.secondary,
        }
      },
      typography: {
        fontFamily: ['Roboto'].join(','),
        
        span: {
          [createTheme().breakpoints.up('xs')]: {
            fontSize: '1rem', 
          },
          [createTheme().breakpoints.up('sm')]: {
            fontSize: '1rem', 
          },
          [createTheme().breakpoints.up('md')]: {
            fontSize: '1rem', 
          },
          [createTheme().breakpoints.up('lg')]: {
            fontSize: '1.2rem', 
          },
        },

        tinySpan: {
          [createTheme().breakpoints.up('xs')]: {
            fontSize: '.8rem', 
          },
        },

        p: {
          [createTheme().breakpoints.up('xs')]: {
            fontSize: '1rem', 
          },
          [createTheme().breakpoints.up('sm')]: {
            fontSize: '1rem', 
          },
          [createTheme().breakpoints.up('md')]: {
            fontSize: '1rem', 
          },
          [createTheme().breakpoints.up('lg')]: {
            fontSize: '1.2rem', 
          },
        },

        h1: {
          [createTheme().breakpoints.up('xs')]: {
            fontSize: '4rem', 
          },
          [createTheme().breakpoints.up('sm')]: {
            fontSize: '5rem', 
          },
          [createTheme().breakpoints.up('md')]: {
            fontSize: '5.5rem', 
          },
          [createTheme().breakpoints.up('lg')]: {
            fontSize: '7rem', 
          },
        },

        h2: { 
          [createTheme().breakpoints.up('xs')]: {
            fontSize: '1.5rem', 
          },
          [createTheme().breakpoints.up('sm')]: {
            fontSize: '1.5rem', 
          },
          [createTheme().breakpoints.up('md')]: {
            fontSize: '2rem', 
          },
        },

        
      },
    });
    
    return createdTheme;
    // return responsiveFontSize(createdTheme);

  }, [mode, palette, selectedTextPalette]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{position:'relative', minHeight:'100dvh'}}>
        <Navbar />
        <Router />
        <UtilityButton mode={mode} setMode={setMode} setPalette={setPalette} />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;