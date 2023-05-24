import Stats from '../models/Stats';
import StatRow from './StatRow';
import Section from './Section';
import { Table, TableContainer } from '@mui/material';

export function DetailsTable({ stats }: DetailsTableProps) {
  return (
    <Section title="Details">
      <TableContainer>
        <Table>
          <StatRow stat='Difficulty' data={stats.difficulty} />
          <StatRow stat='Count' data={stats.count} />
          <StatRow stat='XP Total' data={stats.xp} suffix=" xp" />
          <StatRow stat='XP Adjusted' data={stats.xpAdjusted} suffix=" xp" />
          <StatRow stat='XP Each' data={stats.each} suffix=" xp" />
        </Table>
      </TableContainer>
    </Section>
  );
}

export interface DetailsTableProps {
  stats: Stats;
}

export default DetailsTable;
