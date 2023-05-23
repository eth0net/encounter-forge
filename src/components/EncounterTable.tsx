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

export function EncounterTable({ encounter }: EncounterTableProps) {
  const rows = useMemo(() => {
    return Object.values(encounter).map((row, idx) =>
      <EncounterTableRow key={idx} {...row} />)
  }, [encounter]);

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
                <TableCell align='right'>Count</TableCell>
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
}

export default EncounterTable;
