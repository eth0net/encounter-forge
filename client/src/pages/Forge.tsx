import { Stack } from '@mui/material';
import { useState } from 'react';
import DetailsTable from '../components/DetailsTable';
import ThresholdsTable from '../components/ThresholdsTable';
import { Bestiary } from '../components/bestiary';
import { EncounterTable } from '../components/encounter-table';
import { PartyTable } from '../components/party-table';
import useBestiary from '../hooks/useBestiary';
import { useEncounter } from '../hooks/useEncounter';
import { useStats } from '../hooks/useStats';
import { useThresholds } from '../hooks/useThresholds';
import { Party } from '../models';

export const Forge = () => {
  const [party, setParty] = useState<Party>([{ level: 1, count: 1 }]);
  const { encounter, addMonster, removeMonster, randomiseEncounter } = useEncounter();
  const thresholds = useThresholds(party);
  const stats = useStats(party, encounter, thresholds);

  const [search, setSearch] = useState('');
  const [enable5eTools, setEnable5eTools] = useState(false);
  const bestiary = useBestiary({ enable5eTools, search });

  const generateEncounter = (minXP: number, maxXP: number) => {
    randomiseEncounter(bestiary.filtered, minXP, maxXP);
  };

  return (
    <>
      <Stack direction='row' spacing={4} useFlexGap justifyContent='center' flexWrap='wrap'>
        <Stack spacing={4} minWidth={300}>
          <PartyTable
            flexGrow={1}
            party={party}
            setParty={setParty}
          />
          <ThresholdsTable
            thresholds={thresholds}
            generateEncounter={generateEncounter}
          />
        </Stack>

        <Stack spacing={4} minWidth={300}>
          <EncounterTable
            flexGrow={1}
            encounter={encounter}
            addMonster={addMonster}
            removeMonster={removeMonster}
          />
          <DetailsTable stats={stats} />
        </Stack>

        <Stack spacing={4} minWidth={300}>
          <Bestiary
            addMonster={addMonster}
            bestiary={bestiary}
            enable5eTools={enable5eTools}
            setEnable5eTools={setEnable5eTools}
            search={search}
            setSearch={setSearch}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default Forge;
