import { Stack } from "@mui/material";
import CreateMonster from "../components/CreateMonster";
import usePocketBaseMonsters from "../hooks/usePocketBaseMonsters";

export const Creator = () => {
  const pb = usePocketBaseMonsters();

  return (
    <Stack direction='row' spacing={4} useFlexGap justifyContent='center' flexWrap='wrap'>
      <CreateMonster pb={pb} />
    </Stack>
  );
};

export default Creator;
