import { Add } from '@mui/icons-material';
import { Button, TableBody, TableCell, TableRow } from '@mui/material';
import { useMemo } from "react";
import { Encounter, Monster } from "../../models";
import ChallengeRating from "../ChallengeRating";

export function BestiaryBody({ monsters: monsters, setEncounter }: LibraryBodyProps) {
  const rows = useMemo(() => {
    return monsters.map((monster, index) => {
      const add = () => setEncounter((prev) => {
        const next = { ...prev };
        next[monster.id] || (next[monster.id] = { monster, count: 0 });
        next[monster.id] && (next[monster.id].count += 1);
        return next;
      });

      return (
        <TableRow key={index}>
          <TableCell>{monster.name}</TableCell>
          <TableCell>{monster.source}</TableCell>
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
  }, [monsters, setEncounter]);

  return (
    <TableBody>
      {rows}
    </TableBody>
  );
}

export interface LibraryBodyProps {
  setEncounter: React.Dispatch<React.SetStateAction<Encounter>>;
  monsters: Monster[];
}

export default BestiaryBody;
