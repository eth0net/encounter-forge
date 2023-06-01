import { Button, Stack, Table, TableContainer } from '@mui/material';
import { Party } from '../models';
import PartyTableBody from './PartyTableBody';
import PartyTableHead from './PartyTableHead';
import Section from './Section';

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
      <Stack direction='row' justifyContent='center'>
        <Button variant='contained' onClick={addGroup} size='small'>
          Add Group
        </Button>
      </Stack>
    </Section>
  );
}

export interface PartyTableProps {
  party: Party;
  setParty: React.Dispatch<React.SetStateAction<Party>>;
}

export default PartyTable;
