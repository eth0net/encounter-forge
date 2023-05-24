import Encounter from "../models/Encounter";
import MonsterData from "../models/MonsterData";
import LibraryBody from './LibraryBody';
import { Table, TableContainer } from '@mui/material';
import Section from './Section';
import LibraryHead from './LibraryHead';

export function Library(props: LibraryProps) {
  return (
    <Section title='Library'>
      <TableContainer>
        <Table>
          <LibraryHead />
          <LibraryBody {...props} />
        </Table>
      </TableContainer>
    </Section>
  );
}

export interface LibraryProps {
  setEncounter: React.Dispatch<React.SetStateAction<Encounter>>;
  monsterData: MonsterData;
}

export default Library;
