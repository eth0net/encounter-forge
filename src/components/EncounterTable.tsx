import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';
import MonsterDictionary from "../models/MonsterDictionary";

export function EncounterTable({ monsterData, monsters }: EncounterTableProps) {
  return (
    <Paper elevation={4}>
      <Grid container spacing={1} p={2}>
        <Grid item xs={124} mb={1}>
          <Typography variant='h5'>Encounter</Typography>
        </Grid>

        <Grid item xs={3} mb={1}>
          <Typography variant='h6'>Name</Typography>
        </Grid>
        <Grid item xs={3} mb={1}>
          <Typography variant='h6'>CR</Typography>
        </Grid>
        <Grid item xs={3} mb={1}>
          <Typography variant='h6'>XP</Typography>
        </Grid>
        <Grid item xs={3} mb={1}>
          <Typography variant='h6'>Count</Typography>
        </Grid>

        {monsters.map(({ name, count }, index) => {
          const { cr, xp } = monsterData[name];
          return <Fragment key={index}>
            <Grid item xs={3}>
              <Typography>{name}</Typography>
            </Grid >
            <Grid item xs={3}>
              <Typography>{cr}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>{xp}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>{count}</Typography>
            </Grid>
          </Fragment>;
        })}
      </Grid>
    </Paper>
  );
}

export interface EncounterTableProps {
  monsterData: MonsterDictionary;
  monsters: { name: string, count: number }[];
}

export default EncounterTable;
