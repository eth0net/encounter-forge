import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export function ThresholdsTable({ thresholds }: ThresholdsProps) {
  return (
    <Paper elevation={4}>
      <Grid container spacing={2} p={2}>
        <Grid item xs={12}>
          <Typography variant='h5'>Thresholds</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>Easy</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>{thresholds.easy}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>Medium</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>{thresholds.medium}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>Hard</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>{thresholds.hard}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>Deadly</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>{thresholds.deadly}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>Daily Total</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>{thresholds.daily}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export interface ThresholdsProps {
  thresholds: {
    easy: number;
    medium: number;
    hard: number;
    deadly: number;
    daily: number;
  };
}

export default ThresholdsTable;
