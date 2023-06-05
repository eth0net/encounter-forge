import { useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PocketBase from 'pocketbase';
import { useMemo } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { PocketBaseProvider } from "./contexts/PocketBaseProvider";
import Forge from './pages/Forge';

const pocketBase = new PocketBase('http://127.0.0.1:8090');

const queryClient = new QueryClient()

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
    <PocketBaseProvider client={pocketBase}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <NavBar />

          <Forge />
        </ThemeProvider>
      </QueryClientProvider>
    </PocketBaseProvider>
  );
}

export default App;
