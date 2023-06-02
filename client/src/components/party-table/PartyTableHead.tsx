import { TableCell, TableHead, TableRow } from '@mui/material';

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
