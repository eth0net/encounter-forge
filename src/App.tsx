import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import createTheme from '@mui/material/styles/createTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemo, useState } from 'react';
import './App.css';
import d20 from './assets/d20.png';

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

  const [players, setPlayers] = useState([{ name: '', level: 1 }]);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <img src={d20} className='logo d20' alt='d20' />
      </Box>

      <Typography variant='h1' mb={2}>Encounter Forge</Typography >

      <Players players={players} setPlayers={setPlayers} />
    </ThemeProvider>
  )
}

export default App

function Players({ players, setPlayers }: PlayersProps) {
  const addPlayer = () => setPlayers([...players, new Player()]);
  const updatePlayer = (index: number, player: Player) => {
    const newPlayers = [...players];
    newPlayers[index] = player;
    setPlayers(newPlayers);
  };
  const deletePlayer = (index: number) => {
    const newPlayers = [...players];
    newPlayers.splice(index, 1);
    setPlayers(newPlayers);
  };

  return (
    <Paper elevation={4}>
      <Stack spacing={2}>
        <Stack spacing={2}>
          {players && players.map((player, index) => {
            return (
              <PlayerComponent
                key={index}
                player={player}
                onDelete={() => deletePlayer(index)}
                onUpdate={(player: Player) => updatePlayer(index, player)}
              />
            )
          })}
        </Stack>
        <Stack direction='row'>
          <Button variant='contained' onClick={addPlayer}>Add Player</Button>
        </Stack>
      </Stack>
    </Paper>
  )
}

function PlayerComponent({ player, onDelete, onUpdate }: PlayerProps) {
  const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPlayer = { ...player };
    newPlayer.name = event.target.value;
    onUpdate(newPlayer);
  }

  const updateLevel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPlayer = { ...player };
    newPlayer.level = parseInt(event.target.value);
    onUpdate(newPlayer);
  }

  return (
    <Stack direction='row' spacing={1}>
      <TextField label='Name' value={player.name} onChange={updateName} />
      <TextField
        label='Level'
        type='number'
        value={player.level}
        inputProps={{ min: 1, max: 20 }}
        onChange={updateLevel}
      />
      <Button variant='outlined' color='error' onClick={onDelete}>
        <DeleteIcon />
      </Button>
    </Stack >
  )
}

class Player {
  name = '';
  level = 1;
}

interface PlayersProps {
  players: Player[];
  setPlayers: (players: Player[]) => void;
}

interface PlayerProps {
  player: Player;
  onDelete: () => void;
  onUpdate: (player: Player) => void;
}
