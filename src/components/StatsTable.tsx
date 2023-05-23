import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';

export function StatsTable({ children, title }: StatsProps) {
  return (
    <Paper elevation={4}>
      <Stack spacing={1} p={2}>
        <Typography variant='h5'>{title}</Typography>

        <TableContainer>
          <Table>
            <TableBody>
              {children}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Paper>
  );
}

export interface StatsProps {
  children?: React.ReactNode;
  title: string;
}

export default StatsTable;
