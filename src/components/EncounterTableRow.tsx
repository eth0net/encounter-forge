import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { EncounterItem } from '../models/Encounter';

export function EncounterTableRow({ monster, count }: EncounterTableRowProps) {
  return (
    <TableRow>
      <TableCell>{monster.name}</TableCell>
      <TableCell align='right'>{monster.cr}</TableCell>
      <TableCell align='right'>{monster.xp}</TableCell>
      <TableCell align='right'>{count}</TableCell>
    </TableRow>
  );
}

export type EncounterTableRowProps = EncounterItem;

export default EncounterTableRow;
