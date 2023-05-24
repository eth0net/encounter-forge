import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export function Section({ title, children }: SectionProps) {
  return (
    <Paper elevation={4}>
      <Stack spacing={1} p={2}>
        <Typography variant='h5'>{title}</Typography>
        {children}
      </Stack>
    </Paper>
  );
}

export interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default Section;
