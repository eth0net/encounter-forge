import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { EncounterItem } from '../../models/Encounter';
import Counter from '../Counter';
import ChallengeRating from '../ChallengeRating';

export function EncounterRow({ monster, count, remove, setCount }: EncounterRowProps) {
  const increment = () => {
    count < 99 && setCount(count + 1);
  }
  const decrement = () => {
    count === 1 && remove() || count > 1 && setCount(count - 1);
  }

  return (
    <TableRow>
      <TableCell>{monster.name}</TableCell>
      <TableCell align='right'><ChallengeRating>{monster.cr}</ChallengeRating></TableCell>
      <TableCell align='right'>{monster.xp}</TableCell>
      <TableCell align='center'>
        <Counter data={count} increment={increment} decrement={decrement} />
      </TableCell>
    </TableRow>
  );
}

export interface EncounterRowProps extends EncounterItem {
  setCount: (count: number) => void;
  remove: () => void;
}

export default EncounterRow;
