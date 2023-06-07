import { Button } from '@mui/material';

export const Logout = ({ onClick }: LogoutProps) => {
  return (
    <Button onClick={onClick} variant='contained' color='error'>
      Logout
    </Button >
  );
};

export interface LogoutProps {
  onClick: () => void;
}

export default Logout;
