import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import Router from './router';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'; 
import CssBaseline from '@mui/material/CssBaseline';
import React, { useState, useMemo, useEffect } from 'react';
import Palettes, { TextPalettes } from './data/Palettes'; 

import Navbar from './components/Navbar';
import { Box } from '@mui/material';

import AOS from 'aos';
import 'aos/dist/aos.css';

const UtilityButton = React.lazy(() => import('./fragments/UtilityButton'));
const Footer = React.lazy(() => import('./components/Footer'));


function App() {

  useEffect(() => {
    AOS.init();
  },[])



  // Controllo se nella cache ho il darkMode, altrimenti lo setto a dark
  const [mode, setMode] = useState('dark');

  // Colore primario di default
  const [palette, setPalette] = useState(Palettes.find(p => p.id === 'blue'));

  // Selezione della palette del testo
  const selectedTextPalette = TextPalettes.find(p => p.id === 'dark');

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

  }, [mode, palette, selectedTextPalette]);

  useEffect(() => {
    AOS.refresh();
  }, [theme]);

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