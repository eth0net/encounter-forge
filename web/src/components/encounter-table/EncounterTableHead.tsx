import { TableCell, TableHead, TableRow } from '@mui/material';

export const EncounterTableHead = () => {
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
};

export default EncounterTableHead;
