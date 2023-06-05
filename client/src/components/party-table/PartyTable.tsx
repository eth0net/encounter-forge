import { Button, Stack, Table, TableContainer } from '@mui/material';
import Section from '../Section';
import PartyTableBody from './PartyTableBody';
import PartyTableHead from './PartyTableHead';
import { PartyManager } from '../../hooks/usePartyManager';

export const PartyTable = ({ flexGrow = 0, partyManager }: PartyTableProps) => {
  const { addGroup } = partyManager;
  return (
    <Section title='Party' paperProps={{ style: { flexGrow } }}>
      <TableContainer>
        <Table>
          <PartyTableHead />
          <PartyTableBody partyManager={partyManager} />
        </Table>
      </TableContainer>
      <Stack direction='row' justifyContent='center'>
        <Button variant='contained' onClick={addGroup} size='small'>
          Add Group
        </Button>
      </Stack>
    </Section>
  );
};

export interface PartyTableProps {
  flexGrow?: number;
  partyManager: PartyManager;
}
