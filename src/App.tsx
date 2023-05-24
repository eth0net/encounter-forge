import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemo } from 'react';
import './App.css';
import Forge from './components/Forge';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const themeCreator = () => createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            padding: '0.5rem',
          },
        },
      },
    },
  });

  const theme = useMemo(themeCreator, [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <Forge />
    </ThemeProvider>
  );
}

export default App;
