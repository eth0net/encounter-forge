import { Table, TableContainer, TablePagination } from '@mui/material';
import { useMemo, useState } from "react";
import Encounter from "../models/Encounter";
import LibraryBody from './LibraryBody';
import LibraryHead from './LibraryHead';
import Section from './Section';
import Monster from '../models/Monster';

export function Library({ monsterData, ...props }: LibraryProps) {
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const visibleData = useMemo(() => monsterData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  ), [monsterData, page, rowsPerPage]);

  return (
    <Section title='Library'>
      <TableContainer>
        <Table>
          <LibraryHead />
          <LibraryBody monsterData={visibleData} {...props} />
        </Table>
      </TableContainer>
      <TablePagination
        component='div'
        count={monsterData.length}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
        page={page}
        onPageChange={(_, page) => setPage(page)}
      />
    </Section>
  );
}

export interface LibraryProps {
  setEncounter: React.Dispatch<React.SetStateAction<Encounter>>;
  monsterData: Monster[];
}

export default Library;
