import { Button } from '@mui/material';

export const Logout = ({ onClick }: LogoutProps) => {
  return (
    <Button onClick={onClick} variant='contained'>
      Logout
    </Button >
  );
};

export interface LogoutProps {
  onClick: () => void;
}

export default Logout;
