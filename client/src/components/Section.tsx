import { Paper, Stack, Typography } from '@mui/material';

export function Section({ title, children, paperProps, stackProps }: SectionProps) {
  return (
    <Paper elevation={4} {...paperProps}>
      <Stack spacing={1} p={2} {...stackProps}>
        <Typography variant='h5'>{title}</Typography>
        {children}
      </Stack>
    </Paper>
  );
}

export interface SectionProps {
  title: string;
  children: React.ReactNode;
  paperProps?: React.ComponentProps<typeof Paper>;
  stackProps?: React.ComponentProps<typeof Stack>;
}

export default Section;
