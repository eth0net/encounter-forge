import { Button, Stack, Table, TableContainer, TablePagination, TextField } from '@mui/material';
import { useMemo, useState } from "react";
import { Monster } from "../../models";
import Section from '../Section';
import { BestiaryBody } from './BestiaryBody';
import { BestiaryHead, Order } from './BestiaryHead';

export const Bestiary = (props: BestiaryProps) => {
  const {
    bestiary: { monsters },
    enable5eTools,
    setEnable5eTools,
    search,
    setSearch,
  } = props;

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Monster>('name');

  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const onSort = (_: React.MouseEvent, property: keyof Monster) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedData = useMemo(() => {
    return monsters.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
      if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }, [monsters, order, orderBy]);

  const visibleData = useMemo(() => {
    return sortedData.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [sortedData, page, rowsPerPage]);

  return (
    <Section title='Bestiary'>
      <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={4}>
        <TextField
          label='Search'
          value={search}
          onChange={e => setSearch(e.target.value)}
          size='small'
          style={{ flexGrow: 1 }}
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
};

export interface BestiaryProps {
  addMonster: (monster: Monster, count?: number) => void;
  bestiary: {
    monsters: Monster[];
    monsterCount: number;
    filtered: Monster[];
    filteredCount: number;
  };
  enable5eTools: boolean;
  setEnable5eTools: React.Dispatch<React.SetStateAction<boolean>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default Bestiary;
