import { Table, TableContainer } from '@mui/material';
import Encounter from '../models/Encounter';
import EncounterTableBody from './EncounterTableBody';
import EncounterTableHead from './EncounterTableHead';
import Section from './Section';

export function EncounterTable(props: EncounterTableProps) {
  return (
    <Section title='Encounter'>
      <TableContainer>
        <Table>
          <EncounterTableHead />
          <EncounterTableBody {...props} />
        </Table>
      </TableContainer>
    </Section >
  );
}

export interface EncounterTableProps {
  encounter: Encounter;
  setEncounter: React.Dispatch<React.SetStateAction<Encounter>>;
}

export default EncounterTable;
