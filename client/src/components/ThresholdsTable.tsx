import { Shuffle } from '@mui/icons-material';
import { Button, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { Thresholds } from '../models';
import Section from './Section';

export function Generate({ onClick }: GenerateProps) {
  return (
    <Button onClick={onClick} sx={{ minWidth: 'unset', padding: '5px' }}>
      <Shuffle />
    </Button>
  );
}

export interface GenerateProps {
  onClick: () => void;
}

export function ThresholdsTable({ thresholds, generateEncounter }: ThresholdsTableProps) {
  return (
    <Section title="Thresholds">
      <TableContainer>
        <Table>
          <TableBody>

            <TableRow>
              <TableCell>{"Easy"}</TableCell>
              <TableCell align='right'>
                {thresholds.easy}{" xp"}
              </TableCell>
              <TableCell>
                <Generate onClick={() => generateEncounter(
                  thresholds.easy, thresholds.medium
                )} />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>{"Medium"}</TableCell>
              <TableCell align='right'>
                {thresholds.medium}{" xp"}
              </TableCell>
              <TableCell>
                <Generate onClick={() => generateEncounter(
                  thresholds.medium, thresholds.hard
                )} />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>{"Hard"}</TableCell>
              <TableCell align='right'>
                {thresholds.hard}{" xp"}
              </TableCell>
              <TableCell>
                <Generate onClick={() => generateEncounter(
                  thresholds.hard, thresholds.deadly
                )} />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>{"Deadly"}</TableCell>
              <TableCell align='right'>
                {thresholds.deadly}{" xp"}
              </TableCell>
              <TableCell>
                <Generate onClick={() => generateEncounter(
                  thresholds.deadly, thresholds.deadly * 2
                )} />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>{"Daily"}</TableCell>
              <TableCell align='right'>
                {thresholds.daily}{" xp"}
              </TableCell>
              <TableCell>

              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  );
}

export interface ThresholdsTableProps {
  thresholds: Thresholds;
  generateEncounter: (minXP: number, maxXP: number) => void;
}

export default ThresholdsTable;
