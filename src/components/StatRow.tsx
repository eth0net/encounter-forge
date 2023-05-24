import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export function StatRow({ stat, data, suffix = '' }: StatRowProps) {
  return (
    <TableRow>
      <TableCell>{stat}</TableCell>
      <TableCell align='right'>{data}{suffix}</TableCell>
    </TableRow>
  );
}

export interface StatRowProps {
  stat: string;
  data: number | string;
  suffix?: string;
}

export default StatRow;
