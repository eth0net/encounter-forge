import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export function StatsRow({ stat, data }: StatsRowProps) {
  return (
    <TableRow>
      <TableCell>{stat}</TableCell>
      <TableCell align='right'>{data}</TableCell>
    </TableRow>
  );
}

export interface StatsRowProps {
  stat: string;
  data: number | string;
}

export default StatsRow;
