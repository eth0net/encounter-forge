import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemo, useState } from 'react';
import './App.css';
import d20 from './assets/d20.png';
import PlayerList from './components/PlayerList';
import Player from './models/Player';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () => createTheme({
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
      },
    }),
    [prefersDarkMode],
  );

  const [players, setPlayers] = useState([new Player()]);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <img src={d20} className='logo d20' alt='d20' />
      </Box>

      <Typography variant='h1' mb={2}>Encounter Forge</Typography >

      <PlayerList players={players} setPlayers={setPlayers} />
    </ThemeProvider>
  )
}

export default App
