import { Button, Link, Stack, Typography } from '@mui/material';
import { DiscordAuth, Logout } from '../components/auth';
import usePocketBaseAuth from '../hooks/usePocketBaseAuth';
import d20 from '/src/assets/d20.png';

export const NavBar = () => {
  const { authWithDiscord, clearAuth, isAuthed } = usePocketBaseAuth();

  return (
    <Stack direction='row' justifyContent='space-between' mb={8}>
      <Stack direction='row' alignItems='center' justifyContent='center' spacing={2}>
        <Link href='/'>
          <img src={d20} className='logo d20' alt='d20' height={48} />
        </Link>
        <Link href='/' underline='none' color='inherit'>
          <Typography variant='h1' fontSize={32}>Encounter Forge</Typography>
        </Link>
      </Stack>

      <Stack direction='row' alignItems='center' justifyContent='center' spacing={2}>
        {!isAuthed && <DiscordAuth authFn={authWithDiscord} />}
        {isAuthed &&
          <>
            <Button href='/creator' variant='outlined'>Creator</Button>
            <Logout onClick={clearAuth} />
          </>
        }
      </Stack>
    </Stack>
  );
};

export default NavBar;
