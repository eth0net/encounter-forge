import { TableCell, TableRow } from '@mui/material';

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
