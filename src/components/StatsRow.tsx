import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export function StatsRow({ stat, data, suffix = '' }: StatsRowProps) {
  return (
    <TableRow>
      <TableCell>{stat}</TableCell>
      <TableCell align='right'>{data}{suffix}</TableCell>
    </TableRow>
  );
}

export interface StatsRowProps {
  stat: string;
  data: number | string;
  suffix?: string;
}

export default StatsRow;
