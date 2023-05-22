import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Player from '../models/Player';
import PlayerList from './PlayerList';
import d20 from '/src/assets/d20.png';
import { Thresholds } from './Thresholds';

const defaultPlayers = [new Player(), new Player()];

export function Forge() {
  const [players, setPlayers] = useState(defaultPlayers);

  return (
    <>
      <Stack direction='row' alignItems='center' justifyContent='center' spacing={2} mb={8}>
        <img src={d20} className='logo d20' alt='d20' height={96} />
        <Typography variant='h2'>Encounter Forge</Typography>
      </Stack>

      <Stack direction='row' spacing={4}>
        <Stack spacing={4}>
          <PlayerList players={players} setPlayers={setPlayers} />

          <Thresholds players={players} />
        </Stack>
      </Stack>
    </>
  );
}

export default Forge;
