import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Player from "../models/Player";

export function PlayerItem({ player, onDelete, onUpdate }: PlayerProps) {
  const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ ...player, name: event.target.value });
  };

  const updateLevel = (event: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ ...player, level: parseInt(event.target.value) });
  };

  return (
    <Stack direction='row' spacing={1}>
      <TextField
        label='Name'
        placeholder='Player'
        value={player.name}
        onChange={updateName}
      />

      <TextField
        label='Level'
        type='number'
        inputProps={{ min: 1, max: 20 }}
        value={player.level}
        onChange={updateLevel}
      />

      <Button variant='outlined' color='error' onClick={onDelete}>
        <DeleteIcon />
      </Button>
    </Stack>
  );
}

export interface PlayerProps {
  player: Player;
  onDelete: () => void;
  onUpdate: (player: Player) => void;
}

export default PlayerItem;
