import { TableCell, TableRow } from '@mui/material';
import { EncounterItem, Monster } from '../../models';
import ChallengeRating from '../ChallengeRating';
import Counter from '../Counter';

export function EncounterRow({ monster, count, add, remove }: EncounterRowProps) {
  const increment = () => count < 99 && add();
  const decrement = () => remove();
  return (
    <TableRow>
      <TableCell>{monster.name}</TableCell>
      <TableCell align='right'>
        <ChallengeRating>{monster.cr}</ChallengeRating>
      </TableCell>
      <TableCell align='right'>{monster.xp}</TableCell>
      <TableCell align='center'>
        <Counter
          data={count}
          increment={increment}
          decrement={decrement}
        />
      </TableCell>
    </TableRow >
  );
}

export interface EncounterRowProps extends EncounterItem {
  monster: Monster;
  count: number;
  add: (count?: number) => void;
  remove: (count?: number) => void;
}

export default EncounterRow;
