import { Button } from '@mui/material';
import { usePocketBase } from '../../queries/pocketbase/usePocketBase';
import discordIcon from '/src/assets/discord.svg';

export function DiscordAuth() {
  const { loginWithDiscord } = usePocketBase();

  return (
    <Button
      onClick={loginWithDiscord}
      variant='contained'
      sx={{ background: "#5865F2", color: 'white' }}
      endIcon={<img src={discordIcon} alt="discord" height={16} />}
    >
      Login with Discord
    </Button >
  );
}

export default DiscordAuth;
