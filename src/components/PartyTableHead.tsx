import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export function PartyTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell align='center'>Level</TableCell>
        <TableCell align='center'>Count</TableCell>
        <TableCell align='center'>Clear</TableCell>
      </TableRow>
    </TableHead>
  );
}
export default PartyTableHead;
