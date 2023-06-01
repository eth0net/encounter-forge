import { Button, Stack, Table, TableContainer, TablePagination } from '@mui/material';
import { useMemo, useState } from "react";
import Encounter from "../../models/Encounter";
import { useBestiary } from '../../queries/bestiary';
import Section from '../Section';
import BestiaryBody from './BestiaryBody';
import BestiaryHead from './BestiaryHead';

export function Bestiary(props: BestiaryProps) {
  const [enable5eTools, setEnable5eTools] = useState(false);
  const { monsters } = useBestiary({ enable5eTools });

  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  // todo: sort data using table head
  // todo: filter data using search bar

  const visibleData = useMemo(() => {
    return monsters.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [monsters, page, rowsPerPage]);

  return (
    <Section title='Bestiary'>
      <Stack>
        <Button
          variant='contained'
          onClick={() => setEnable5eTools(e => !e)}
          size='small'
          color={enable5eTools ? 'success' : 'error'}
        >
          5eTools
        </Button>
      </Stack>
      <TableContainer>
        <Table>
          <BestiaryHead />
          <BestiaryBody monsters={visibleData} {...props} />
        </Table>
      </TableContainer>
      <TablePagination
        component='div'
        count={monsters.length}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
        page={page}
        onPageChange={(_, page) => setPage(page)}
      />
    </Section >
  );
}

export interface BestiaryProps {
  setEncounter: React.Dispatch<React.SetStateAction<Encounter>>;
}

export default Bestiary;
