import Button from '@mui/material/Button';
import Party from '../models/Party';
import PartyTableBody from './PartyTableBody';
import PartyTableHead from './PartyTableHead';
import Section from './Section';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';

export function PartyTable({ party, setParty }: PartyTableProps) {
  const addGroup = () => setParty(party => [...party, { level: 1, count: 1 }]);

  return (
    <Section title='Party'>
      <TableContainer>
        <Table>
          <PartyTableHead />
          <PartyTableBody party={party} setParty={setParty} />
        </Table>
      </TableContainer>

      <Button variant='contained' onClick={addGroup} size='small'>
        Add Level
      </Button>
    </Section>
  );
}

export interface PartyTableProps {
  party: Party;
  setParty: React.Dispatch<React.SetStateAction<Party>>;
}

export default PartyTable;
