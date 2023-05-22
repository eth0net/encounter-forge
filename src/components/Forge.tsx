import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Player from '../models/Player';
import PlayerList from './PlayerList';
import d20 from '/src/assets/d20.png';

const defaultPlayers = [new Player(), new Player(), new Player()];

export function Forge() {
  const [players, setPlayers] = useState(defaultPlayers);

  return (
    <>
      <Box>
        <img src={d20} className='logo d20' alt='d20' />
      </Box>

      <Typography variant='h1' mb={2}>Encounter Forge</Typography>

      <Stack direction='row' justifyContent='space-around'>
        <PlayerList players={players} setPlayers={setPlayers} />
      </Stack>
    </>
  );
}

export default Forge;
