import { Button, Divider, Stack, Table, TableContainer, TablePagination, TextField } from '@mui/material';
import { useMemo, useState } from "react";
import { BestiaryManager } from '../../hooks/useBestiaryManager';
import { EncounterManager } from '../../hooks/useEncounterManager';
import { Monster } from "../../models";
import Section from '../Section';
import { BestiaryBody } from './BestiaryBody';
import { BestiaryHead, Order } from './BestiaryHead';

export const Bestiary = (props: BestiaryProps) => {
  const {
    bestiaryManager: { filtered },
    encounterManager,
    enable5eTools,
    setEnable5eTools,
    search,
    setSearch,
    flexGrow = 0,
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
    return filtered.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
      if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filtered, order, orderBy]);

  const visibleData = useMemo(() => {
    return sortedData.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [sortedData, page, rowsPerPage]);

  return (
    <Section title='Bestiary' paperProps={{ style: { flexGrow } }}>
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
          <BestiaryBody
            encounterManager={encounterManager}
            monsters={visibleData}
          />
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
  bestiaryManager: BestiaryManager;
  encounterManager: EncounterManager;
  enable5eTools: boolean;
  setEnable5eTools: React.Dispatch<React.SetStateAction<boolean>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  flexGrow?: number;
}

export default Bestiary;
