import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useMemo } from "react";
import Encounter from "../models/Encounter";
import MonsterData from "../models/MonsterData";
import ChallengeRating from "./ChallengeRating";
import { Add } from '@mui/icons-material';

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
    });
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

export default LibraryBody;
