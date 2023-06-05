import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { Monster } from '../../models';

export const BestiaryHead = ({ onSort, order, orderBy }: BestiaryHeadProps) => {
  return (
    <TableHead>
      <TableRow>
        {headCells.map(({ key, numeric, label }) => {
          return (
            <TableCell
              key={key}
              align={numeric ? 'right' : 'left'}
              sortDirection={orderBy === key ? order : false}
            >
              <TableSortLabel
                active={orderBy === key}
                direction={orderBy === key ? order : 'asc'}
                onClick={(e) => onSort(e, key)}
              >
                {label}
              </TableSortLabel>
            </TableCell>
          );
        })}
        <TableCell align='center'>Add</TableCell>
      </TableRow>
    </TableHead>
  );
};

export interface BestiaryHeadProps {
  onSort: (_: React.MouseEvent, property: keyof Monster) => void;
  order: Order;
  orderBy: keyof Monster;
}

export default BestiaryHead;

export type Order = 'asc' | 'desc';

interface HeadCell {
  key: keyof Monster;
  numeric: boolean;
  label: string;
}

const headCells: HeadCell[] = [
  {
    key: 'name',
    numeric: false,
    label: 'Name',
  },
  {
    key: 'source',
    numeric: false,
    label: 'Source',
  },
  {
    key: 'cr',
    numeric: true,
    label: 'CR',
  },
  {
    key: 'xp',
    numeric: true,
    label: 'XP',
  },
];
