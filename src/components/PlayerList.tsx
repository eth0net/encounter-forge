import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Player from '../models/Player';
import PlayerItem from './PlayerItem';

export function PlayerList({ players, setPlayers }: PlayersProps) {
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
      <Stack spacing={2} p={2}>
        <Typography variant='h5'>Players</Typography>

        {players && players.map((player, index) =>
          <Stack spacing={2} >
            <PlayerItem
              key={index}
              player={player}
              onUpdate={(player: Player) => updatePlayer(index, player)}
              onDelete={() => deletePlayer(index)}
            />
          </Stack>
        )}

        {players?.length === 0 &&
          <Typography>No players</Typography>
        }

        <Stack direction='row' justifyContent='center' mt={2}>
          <Button variant='contained' onClick={addPlayer}>Add Player</Button>
        </Stack>
      </Stack>
    </Paper>
  );
}

export interface PlayersProps {
  players: Player[];
  setPlayers: (players: Player[]) => void;
}

export default PlayerList;
