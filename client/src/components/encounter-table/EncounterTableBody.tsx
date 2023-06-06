import { TableBody } from '@mui/material';
import { useMemo } from 'react';
import { EncounterManager } from '../../hooks/useEncounterManager';
import EncounterTableRow from './EncounterTableRow';

export const EncounterTableBody = ({ encounterManager }: EncounterTableBodyProps) => {
  const { encounter, addMonster, removeMonster } = encounterManager;

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
};

export interface EncounterTableBodyProps {
  encounterManager: EncounterManager;
}

export default EncounterTableBody;
