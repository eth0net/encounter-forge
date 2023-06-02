import { Table, TableContainer } from '@mui/material';
import { Encounter } from '../../models';
import Section from '../Section';
import EncounterTableBody from './EncounterTableBody';
import EncounterTableHead from './EncounterTableHead';

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
