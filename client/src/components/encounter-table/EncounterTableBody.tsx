import TableBody from '@mui/material/TableBody';
import { useMemo } from 'react';
import { Encounter, Monster } from '../../models';
import EncounterTableRow from './EncounterTableRow';

export function EncounterTableBody({ encounter, addMonster, removeMonster }: EncounterTableBodyProps) {
  const rows = useMemo(() => {
    return Object.values(encounter).map((row, idx) => {
      const add = (count = 1) => addMonster(row.monster, count);
      const remove = (count = 1) => removeMonster(row.monster, count);
      return (
        <EncounterTableRow
          key={idx}
          add={add}
          remove={remove}
          {...row}
        />
      );
    });
  }, [encounter, addMonster, removeMonster]);

  return (
    <TableBody>
      {rows}
    </TableBody>
  );
}

export interface EncounterTableBodyProps {
  encounter: Encounter;
  addMonster: (monster: Monster, count?: number) => void;
  removeMonster: (monster: Monster, count?: number) => void;
}
export default EncounterTableBody;
