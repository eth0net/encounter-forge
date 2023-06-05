import { Table, TableContainer } from '@mui/material';
import { Encounter, Monster } from '../../models';
import Section from '../Section';
import EncounterTableBody from './EncounterTableBody';
import EncounterTableHead from './EncounterTableHead';

export const EncounterTable = ({ flexGrow = 0, ...props }: EncounterTableProps) => {
  return (
    <Section title='Encounter' paperProps={{ style: { flexGrow } }}>
      <TableContainer>
        <Table>
          <EncounterTableHead />
          <EncounterTableBody {...props} />
        </Table>
      </TableContainer>
    </Section >
  );
};

export interface EncounterTableProps {
  flexGrow?: number;
  encounter: Encounter;
  addMonster: (monster: Monster, count?: number) => void;
  removeMonster: (monster: Monster, count?: number) => void;
}

export default EncounterTable;
