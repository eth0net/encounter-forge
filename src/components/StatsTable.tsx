import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stats from '../models/Stats';

export function StatsTable({ stats }: StatsProps) {
  return (
    <Paper elevation={4}>
      <Grid container spacing={1} p={2}>
        <Grid item xs={12}>
          <Typography variant='h5'>Stats</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>Difficulty</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>{stats.difficulty}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>Count</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>{stats.count}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>Total CR</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>{stats.cr}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>Total XP</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>{stats.xp}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>XP Each</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>{stats.each}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export interface StatsProps {
  stats: Stats;
}

export default StatsTable;
