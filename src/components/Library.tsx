import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import { useMemo } from "react";
import Encounter from "../models/Encounter";
import MonsterData from "../models/MonsterData";
import ChallengeRating from "./ChallengeRating";
import { Add } from '@mui/icons-material';

export function Library(props: LibraryProps) {
  return (
    <Paper elevation={4}>
      <Stack spacing={1} p={2}>
        <Typography variant='h5'>Library</Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='right'>CR</TableCell>
                <TableCell align='right'>XP</TableCell>
                <TableCell align='center'>Add</TableCell>
              </TableRow>
            </TableHead>

            <LibraryBody {...props} />
          </Table>
        </TableContainer>
      </Stack>
    </Paper>
  );
}

export interface LibraryProps {
  setEncounter: React.Dispatch<React.SetStateAction<Encounter>>;
  monsterData: MonsterData;
}

export default Library;

export function LibraryBody({ monsterData, setEncounter }: LibraryBodyProps) {
  const rows = useMemo(() => {
    return monsterData.map((monster) => {
      const add = () => setEncounter((prev) => {
        const next = { ...prev };
        next[monster.id] || (next[monster.id] = { monster, count: 0 });
        next[monster.id] && (next[monster.id].count += 1);
        return next;
      });

      return (
        <TableRow>
          <TableCell>{monster.name}</TableCell>
          <TableCell align='right'><ChallengeRating>{monster.cr}</ChallengeRating></TableCell>
          <TableCell align='right'>{monster.xp}</TableCell>
          <TableCell align='center'>
            <Button variant='outlined' onClick={add} sx={{ minWidth: 'unset', padding: '5px' }}>
              <Add />
            </Button>
          </TableCell>
        </TableRow>
      );
    })
  }, [monsterData, setEncounter]);

  return (
    <TableBody>
      {rows}
    </TableBody>
  );
}

export interface LibraryBodyProps {
  setEncounter: React.Dispatch<React.SetStateAction<Encounter>>;
  monsterData: MonsterData;
}
