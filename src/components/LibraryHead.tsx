import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export function LibraryHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Source</TableCell>
        <TableCell align='right'>CR</TableCell>
        <TableCell align='right'>XP</TableCell>
        <TableCell align='center'>Add</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default LibraryHead;
