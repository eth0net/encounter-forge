import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import MonsterData from "./MonsterData";

export function Library({ monsterData }: LibraryProps) {
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name" },
    { field: "cr", headerName: "CR", type: 'number' },
    { field: "xp", headerName: "XP", type: 'number' },
  ];

  return (
    <Paper elevation={4}>
      <Stack spacing={1} p={2}>
        <Typography variant='h5'>Library</Typography>

        <DataGrid
          rows={monsterData}
          columns={columns}
          checkboxSelection
        />
      </Stack>
    </Paper>
  );
}

export interface LibraryProps {
  monsterData: MonsterData;
}

export default Library;
