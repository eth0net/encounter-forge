import { Table, TableBody, TableContainer } from '@mui/material';
import Stats from '../models/Stats';
import Section from './Section';
import StatRow from './StatRow';

export function DetailsTable({ stats }: DetailsTableProps) {
  return (
    <Section title="Details">
      <TableContainer>
        <Table>
          <TableBody>
            <StatRow stat='Difficulty' data={stats.difficulty} />
            <StatRow stat='Count' data={stats.count} />
            <StatRow stat='XP Total' data={stats.xp} suffix=" xp" />
            <StatRow stat='XP Adjusted' data={stats.xpAdjusted} suffix=" xp" />
            <StatRow stat='XP Each' data={stats.each} suffix=" xp" />
          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  );
}

export interface DetailsTableProps {
  stats: Stats;
}

export default DetailsTable;
