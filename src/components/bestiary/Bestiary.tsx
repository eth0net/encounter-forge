import { Button, Stack, Table, TableContainer, TablePagination, TextField } from '@mui/material';
import { useMemo, useState } from "react";
import { Encounter, Monster } from "../../models";
import { useBestiary } from '../../queries/bestiary';
import Section from '../Section';
import { BestiaryBody } from './BestiaryBody';
import { BestiaryHead, Order } from './BestiaryHead';

export function Bestiary(props: BestiaryProps) {
  const [enable5eTools, setEnable5eTools] = useState(false);
  const { monsters } = useBestiary({ enable5eTools });

  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const [search, setSearch] = useState('');

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Monster>('name');

  const onSort = (_: React.MouseEvent, property: keyof Monster) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const filteredData = useMemo(() => {
    return monsters.filter(monster => {
      return monster.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [monsters, search]);

  const sortedData = useMemo(() => {
    return filteredData.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
      if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, order, orderBy]);

  const visibleData = useMemo(() => {
    return sortedData.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [sortedData, page, rowsPerPage]);

  return (
    <Section title='Bestiary'>
      <Stack direction='row' justifyContent='space-between'>
        <TextField
          label='Search'
          value={search}
          onChange={e => setSearch(e.target.value)}
          size='small'
        />
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
          <BestiaryHead onSort={onSort} order={order} orderBy={orderBy} />
          <BestiaryBody monsters={visibleData} {...props} />
        </Table>
      </TableContainer>
      <TablePagination
        component='div'
        count={sortedData.length}
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
