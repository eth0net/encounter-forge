import { Clear } from '@mui/icons-material';
import { Button, TableBody, TableCell, TableRow } from '@mui/material';
import { useMemo } from 'react';
import { Party } from '../../models';
import Counter from '../Counter';

export const PartyTableBody = ({ party, setParty }: PartyTableBodyProps) => {
  const rows = useMemo(() => {
    const levelIncrementor = (i: number) => () => {
      const newParty: Party = [...party];
      newParty[i].level < 20 && newParty[i].level++;
      setParty(newParty);
    };
    const levelDecrementor = (i: number) => () => {
      const newParty: Party = [...party];
      newParty[i].level > 1 && newParty[i].level--;
      setParty(newParty);
    };
    const countIncrementor = (i: number) => () => {
      const newParty: Party = [...party];
      newParty[i].count++;
      setParty(newParty);
    };
    const countDecrementor = (i: number) => () => {
      const newParty: Party = [...party];
      newParty[i].count > 1 && newParty[i].count--;
      setParty(newParty);
    };
    const groupRemover = (i: number) => () => {
      return setParty(party.filter((_, j) => j !== i));
    };

    const disableDeletes = party.length < 2;

    return party.map(({ level, count }, i) => (
      <TableRow key={i}>
        <TableCell align='center'>
          <Counter
            data={level}
            increment={levelIncrementor(i)}
            decrement={levelDecrementor(i)} />
        </TableCell>
        <TableCell align='center'>
          <Counter
            data={count}
            increment={countIncrementor(i)}
            decrement={countDecrementor(i)} />
        </TableCell>
        <TableCell align='center'>
          <Button variant='outlined' color='error' onClick={groupRemover(i)} sx={{ minWidth: 'unset', padding: '5px' }} disabled={disableDeletes}>
            <Clear />
          </Button>
        </TableCell>
      </TableRow>
    ));
  }, [party, setParty]);

  return (
    <TableBody>
      {rows}
    </TableBody>
  );
};

export interface PartyTableBodyProps {
  party: Party;
  setParty: React.Dispatch<React.SetStateAction<Party>>;
}

export default PartyTableBody;
