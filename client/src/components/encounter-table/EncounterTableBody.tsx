import TableBody from '@mui/material/TableBody';
import { useMemo } from 'react';
import { Encounter } from '../../models';
import EncounterTableRow from './EncounterTableRow';

export function EncounterTableBody({ encounter, setEncounter }: EncounterTableBodyProps) {
  const rows = useMemo(() => {
    return Object.entries(encounter).map(([id, row], idx) => {
      const setCount = (count: number) => setEncounter((prev) => {
        return { ...prev, [id]: { ...row, count } };
      });

      const remove = () => setEncounter((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });

      return (
        <EncounterTableRow
          key={idx}
          setCount={setCount}
          remove={remove}
          {...row} />
      );
    });
  }, [encounter, setEncounter]);

  return (
    <TableBody>
      {rows}
    </TableBody>
  );
}

export interface EncounterTableBodyProps {
  encounter: Encounter;
  setEncounter: React.Dispatch<React.SetStateAction<Encounter>>;
}
export default EncounterTableBody;
