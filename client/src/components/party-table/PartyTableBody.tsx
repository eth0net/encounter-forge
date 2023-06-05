import { Clear } from '@mui/icons-material';
import { Button, TableBody, TableCell, TableRow } from '@mui/material';
import { useMemo } from 'react';
import { PartyManager } from '../../hooks/usePartyManager';
import Counter from '../Counter';

export const PartyTableBody = ({ partyManager }: PartyTableBodyProps) => {
  const { party, removeGroup, incrementGroupLevel, decrementGroupLevel, incrementGroupCount, decrementGroupCount } = partyManager;

  const rows = useMemo(() => {
    const disableDeletes = party.length < 2;

    return party.map(({ level, count }, i) => (
      <TableRow key={i}>
        <TableCell align='center'>
          <Counter
            data={level}
            increment={() => incrementGroupLevel(i)}
            decrement={() => decrementGroupLevel(i)}
          />
        </TableCell>
        <TableCell align='center'>
          <Counter
            data={count}
            increment={() => incrementGroupCount(i)}
            decrement={() => decrementGroupCount(i)}
          />
        </TableCell>
        <TableCell align='center'>
          <Button
            variant='outlined'
            color='error'
            onClick={() => removeGroup(i)}
            sx={{ minWidth: 'unset', padding: '5px' }}
            disabled={disableDeletes}
          >
            <Clear />
          </Button>
        </TableCell>
      </TableRow>
    ));
  }, [
    party,
    incrementGroupLevel,
    decrementGroupLevel,
    incrementGroupCount,
    decrementGroupCount,
    removeGroup,
  ]);

  return (
    <TableBody>
      {rows}
    </TableBody>
  );
};

export interface PartyTableBodyProps {
  partyManager: PartyManager;
}

export default PartyTableBody;
