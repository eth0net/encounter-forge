import { Table, TableContainer } from '@mui/material';
import Section from '../Section';
import EncounterTableBody from './EncounterTableBody';
import EncounterTableHead from './EncounterTableHead';
import { EncounterManager } from '../../hooks/useEncounterManager';

export const EncounterTable = ({ flexGrow = 0, encounterManager }: EncounterTableProps) => {
  return (
    <Section title='Encounter' paperProps={{ style: { flexGrow } }}>
      <TableContainer>
        <Table>
          <EncounterTableHead />
          <EncounterTableBody encounterManager={encounterManager} />
        </Table>
      </TableContainer>
    </Section >
  );
};

export interface EncounterTableProps {
  flexGrow?: number;
  encounterManager: EncounterManager;
}

export default EncounterTable;
