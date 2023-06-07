import { Shuffle } from '@mui/icons-material';
import { Button } from '@mui/material';

export const Generate = ({ onClick }: GenerateProps) => {
  return (
    <Button onClick={onClick} sx={{ minWidth: 'unset', padding: '5px' }}>
      <Shuffle />
    </Button>
  );
};

export interface GenerateProps {
  onClick: () => void;
}

export default Generate;
