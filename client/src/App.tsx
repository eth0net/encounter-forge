import { useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMemo } from 'react';
import './App.css';
import Forge from './pages/Forge';

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Forge />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
