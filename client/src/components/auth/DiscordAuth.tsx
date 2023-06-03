import { Button } from '@mui/material';
import discordIcon from '/src/assets/discord.svg';

export function DiscordAuth({ authFn }: DiscordAuthProps) {
  return (
    <Button
      onClick={authFn}
      variant='contained'
      sx={{ background: "#5865F2", color: 'white' }}
      endIcon={<img src={discordIcon} alt="discord" height={16} />}
    >
      Login with Discord
    </Button >
  );
}

export interface DiscordAuthProps {
  authFn: () => void;
}

export default DiscordAuth;
