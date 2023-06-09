import { useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PocketBase from 'pocketbase';
import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import PocketBaseProvider from "./contexts/PocketBaseProvider";
import Creator from './routes/Creator';
import Forge from './routes/Forge';

const pocketBase = new PocketBase(import.meta.env.VITE_POCKET_BASE_URL);

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: '/', element: <Forge /> },
  { path: '/creator', element: <Creator /> },
]);

const App = () => {
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
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </PocketBaseProvider>
  );
};

export default App;
