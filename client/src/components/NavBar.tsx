import { Stack, Typography } from '@mui/material';
import { DiscordAuth, Logout } from '../components/auth';
import usePocketBaseAuth from '../hooks/usePocketBaseAuth';
import d20 from '/src/assets/d20.png';

export const NavBar = () => {
  const { authWithDiscord, clearAuth, isAuthed } = usePocketBaseAuth();

  return (
    <Stack direction='row' justifyContent='space-between' mb={8}>
      <Stack direction='row' alignItems='center' justifyContent='center' spacing={2}>
        <img src={d20} className='logo d20' alt='d20' height={48} />
        <Typography variant='h1' fontSize={32}>Encounter Forge</Typography>
      </Stack>

      <Stack direction='row' alignItems='center' justifyContent='center' spacing={2}>
        {!isAuthed && <DiscordAuth authFn={authWithDiscord} />}
        {isAuthed && <Logout onClick={clearAuth} />}
      </Stack>
    </Stack>
  );
};

export default NavBar;
