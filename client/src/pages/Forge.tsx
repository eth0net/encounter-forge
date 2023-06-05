import { Stack } from '@mui/material';
import { useState } from 'react';
import DetailsTable from '../components/DetailsTable';
import ThresholdsTable from '../components/ThresholdsTable';
import { Bestiary } from '../components/bestiary';
import { EncounterTable } from '../components/encounter-table';
import { PartyTable } from '../components/party-table';
import { useBestiaryManager } from '../hooks/useBestiaryManager';
import { useEncounterManager } from '../hooks/useEncounterManager';
import { usePartyManager } from '../hooks/usePartyManager';
import { useStats } from '../hooks/useStats';
import { useThresholds } from '../hooks/useThresholds';

export const Forge = () => {
  const partyManager = usePartyManager();
  const { party } = partyManager;

  const encounterManager = useEncounterManager();
  const { encounter, randomise } = encounterManager;

  const thresholds = useThresholds(party);
  const stats = useStats(party, encounter, thresholds);

  const [search, setSearch] = useState('');
  const [enable5eTools, setEnable5eTools] = useState(false);
  const bestiaryManager = useBestiaryManager({ enable5eTools, search });

  const generateEncounter = (minXP: number, maxXP: number) => {
    randomise(bestiaryManager.filtered, minXP, maxXP);
  };

  return (
    <>
      <Stack direction='row' spacing={4} useFlexGap justifyContent='center' flexWrap='wrap'>
        <Stack spacing={4} minWidth={300}>
          <PartyTable flexGrow={1} partyManager={partyManager} />
          <ThresholdsTable
            thresholds={thresholds}
            generateEncounter={generateEncounter}
          />
        </Stack>

        <Stack spacing={4} minWidth={300}>
          <EncounterTable flexGrow={1} encounterManager={encounterManager} />
          <DetailsTable stats={stats} />
        </Stack>

        <Stack spacing={4} minWidth={300}>
          <Bestiary
            bestiaryManager={bestiaryManager}
            encounterManager={encounterManager}
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
