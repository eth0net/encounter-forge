import { Button } from '@mui/material';
import { usePocketBaseAuth } from '../../queries/usePocketBaseAuth';
import discordIcon from '/src/assets/discord.svg';

export function DiscordAuth() {
  const { authWithDiscord } = usePocketBaseAuth();

  return (
    <Button
      onClick={authWithDiscord}
      variant='contained'
      sx={{ background: "#5865F2", color: 'white' }}
      endIcon={<img src={discordIcon} alt="discord" height={16} />}
    >
      Login with Discord
    </Button >
  );
}

export default DiscordAuth;
