import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import DetailsTable from '../components/DetailsTable';
import ThresholdsTable from '../components/ThresholdsTable';
import { DiscordAuth } from '../components/auth';
import { Bestiary } from '../components/bestiary';
import { EncounterTable } from '../components/encounter-table';
import { PartyTable } from '../components/party-table';
import { useStats } from '../hooks/useStats';
import { useThresholds } from '../hooks/useThresholds';
import { Encounter, Party } from '../models';
import d20 from '/src/assets/d20.png';

export function Forge() {
  const [party, setParty] = useState<Party>([{ level: 1, count: 1 }]);
  const [encounter, setEncounter] = useState<Encounter>({});
  const thresholds = useThresholds(party);
  const stats = useStats(party, encounter, thresholds);

  return (
    <>
      <Stack direction='row' justifyContent='space-between' mb={8}>
        <Stack direction='row' alignItems='center' justifyContent='center' spacing={2}>
          <img src={d20} className='logo d20' alt='d20' height={48} />
          <Typography variant='h1' fontSize={32}>Encounter Forge</Typography>
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='center' spacing={2}>
          <DiscordAuth />
        </Stack>
      </Stack >

      <Stack direction='row' spacing={4} useFlexGap justifyContent='center' flexWrap='wrap'>
        <Stack spacing={4} minWidth={300}>
          <PartyTable party={party} setParty={setParty} />
          <ThresholdsTable thresholds={thresholds} />
        </Stack>

        <Stack spacing={4} minWidth={300}>
          <EncounterTable encounter={encounter} setEncounter={setEncounter} />
          <DetailsTable stats={stats} />
        </Stack>

        <Stack spacing={4} minWidth={300}>
          <Bestiary setEncounter={setEncounter} />
        </Stack>
      </Stack>
    </>
  );
}

export default Forge;
