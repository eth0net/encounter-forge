import { TableCell, TableRow } from '@mui/material';
import { MonsterCount } from '../../models';
import ChallengeRating from '../ChallengeRating';
import Counter from '../Counter';

export const EncounterRow = ({ monster, count, add, remove }: EncounterRowProps) => {
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
};

export interface EncounterRowProps extends MonsterCount {
  add: (count?: number) => void;
  remove: (count?: number) => void;
}

export default EncounterRow;
