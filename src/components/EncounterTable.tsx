import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useMemo } from 'react';
import Encounter from '../models/Encounter';
import EncounterTableRow from './EncounterTableRow';

export function EncounterTable({ encounter, setEncounter }: EncounterTableProps) {
  const rows = useMemo(() => {
    return Object.entries(encounter).map(([id, row], idx) => {
      const setCount = (count: number) => setEncounter((prev) => {
        return { ...prev, [id]: { ...row, count } };
      });

      const remove = () => setEncounter((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });

      return <EncounterTableRow
        key={idx}
        setCount={setCount}
        remove={remove}
        {...row}
      />;
    })
  }, [encounter, setEncounter]);

  return (
    <Paper elevation={4}>
      <Stack spacing={1} p={2}>
        <Typography variant='h5'>Encounter</Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='right'>CR</TableCell>
                <TableCell align='right'>XP</TableCell>
                <TableCell align='center'>Count</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Paper>
  );
}

export interface EncounterTableProps {
  encounter: Encounter;
  setEncounter: React.Dispatch<React.SetStateAction<Encounter>>;
}

export default EncounterTable;
