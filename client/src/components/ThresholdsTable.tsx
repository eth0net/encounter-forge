import { Table, TableBody, TableContainer } from '@mui/material';
import { Thresholds } from '../models';
import Section from './Section';
import StatRow from './StatRow';

export function ThresholdsTable({ thresholds }: ThresholdsTableProps) {
  return (
    <Section title="Thresholds">
      <TableContainer>
        <Table>
          <TableBody>
            <StatRow stat='Easy' data={thresholds.easy} suffix=" xp" />
            <StatRow stat='Medium' data={thresholds.medium} suffix=" xp" />
            <StatRow stat='Hard' data={thresholds.hard} suffix=" xp" />
            <StatRow stat='Deadly' data={thresholds.deadly} suffix=" xp" />
            <StatRow stat='Daily' data={thresholds.daily} suffix=" xp" />
          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  );
}

export interface ThresholdsTableProps {
  thresholds: Thresholds;
}

export default ThresholdsTable;
