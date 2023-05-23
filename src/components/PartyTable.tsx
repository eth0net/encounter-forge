import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Party from '../models/Party';
import { useMemo } from 'react';

export function PartyTable({ party, setParty }: PartyTableProps) {
  const addGroup = () => setParty(() => {
    const newParty: Party = [...party];
    newParty.push({ level: 1, count: 1 });
    return newParty;
  });

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
      newParty[i].count > 0 && newParty[i].count--;
      setParty(newParty);
    };

    return party.map(({ level, count }, i) => (
      <TableRow key={i}>
        <TableCell align='center'>
          <Counter
            data={level}
            increment={levelIncrementor(i)}
            decrement={levelDecrementor(i)}
          />
        </TableCell>
        <TableCell align='center'>
          <Counter
            data={count}
            increment={countIncrementor(i)}
            decrement={countDecrementor(i)}
          />
        </TableCell>
      </TableRow>
    ));
  }, [party, setParty]);

  return (
    <Paper elevation={4}>
      <Stack spacing={2} p={2}>
        <Typography variant='h5'>Party</Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Level</TableCell>
                <TableCell align='center'>Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack direction='row' justifyContent='center' mt={2}>
          <Button variant='contained' onClick={addGroup}>Add Group</Button>
        </Stack>
      </Stack>
    </Paper>
  );
}

export interface PartyTableProps {
  party: Party;
  setParty: React.Dispatch<React.SetStateAction<Party>>;
}

export default PartyTable;

export function Counter({ data, decrement, increment }: CounterProps) {
  return (
    <ButtonGroup>
      <Button variant='outlined' onClick={decrement}>-</Button>
      <Button variant='outlined'>{data}</Button>
      <Button variant='outlined' onClick={increment}>+</Button>
    </ButtonGroup>
  );
}

export interface CounterProps {
  data: number;
  decrement: () => void;
  increment: () => void;
}
