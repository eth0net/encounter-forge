import { Button, FormControl, FormControlLabel, InputLabel, Stack, Switch, TextField } from "@mui/material";
import { useMemo, useState } from "react";
import ChallengeRatingSelect from "../components/ChallengeRatingSelect";
import Section from "../components/Section";
import { PocketBaseMonsters } from "../hooks/usePocketBaseMonsters";
import Monster from "../models/Monster";

export const CreateMonster = ({ pb }: CreateMonsterProps) => {
  const [name, setName] = useState('');
  const [source, setSource] = useState('');
  const [cr, setCR] = useState(0);
  const [shared, setShared] = useState(false);

  const monster = useMemo(() => {
    if (!name || !source || !cr)
      return undefined;
    return new Monster({ name, source, cr });
  }, [name, source, cr]);

  const handleCreate = () => {
    if (!monster)
      return;
    pb.create.mutateAsync(monster).then(() => {
      setName("");
      setSource("");
      setCR(0);
    });
  };

  return (
    <Section title='Create Monster'>
      <Stack spacing={2}>
        <TextField
          label='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          size='small'
        />

        <TextField
          label='Source'
          value={source}
          onChange={(e) => setSource(e.target.value)}
          size='small'
        />

        <FormControl>
          <InputLabel id='cr-label'>CR</InputLabel>
          <ChallengeRatingSelect
            cr={cr}
            setCR={setCR}
            selectProps={{
              size: 'small',
              label: 'CR',
              labelId: 'cr-label',
              autoWidth: false,
            }}
          />
        </FormControl>

        <FormControlLabel
          label='Share with others'
          labelPlacement='start'
          control={
            <Switch
              checked={shared}
              onChange={(e) => setShared(e.target.checked)}
            />
          } />

        <Button variant='outlined' onClick={handleCreate} size='small'>
          Create
        </Button>
      </Stack>
    </Section>
  );
};

export interface CreateMonsterProps {
  pb: PocketBaseMonsters;
}

export default CreateMonster;
