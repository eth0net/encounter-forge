import { Add } from '@mui/icons-material';
import { Button, TableBody, TableCell, TableRow } from '@mui/material';
import { useMemo } from "react";
import { Monster } from "../../models";
import ChallengeRating from "../ChallengeRating";

export const BestiaryBody = ({ monsters, addMonster }: LibraryBodyProps) => {
  const rows = useMemo(() => {
    return monsters.map((monster, index) => {
      const add = () => addMonster(monster);
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
  }, [monsters, addMonster]);

  return (
    <TableBody>
      {rows}
    </TableBody>
  );
};

export interface LibraryBodyProps {
  addMonster: (monster: Monster, count?: number) => void;
  monsters: Monster[];
}

export default BestiaryBody;
