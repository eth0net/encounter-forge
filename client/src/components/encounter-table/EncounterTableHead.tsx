import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export function EncounterTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell align='right'>CR</TableCell>
        <TableCell align='right'>XP</TableCell>
        <TableCell align='center'>Count</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default EncounterTableHead;
