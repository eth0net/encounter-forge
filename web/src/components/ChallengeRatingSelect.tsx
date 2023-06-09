import { MenuItem, Select, SelectChangeEvent, SelectProps } from "@mui/material";

export const ChallengeRatingSelect = (props: ChallengeRatingSelectProps) => {
  const { cr, setCR, selectProps } = props;

  const onChange = (e: SelectChangeEvent<unknown>) => {
    switch (typeof e.target.value) {
      case "number":
        setCR(e.target.value);
        break;
      case "string":
        setCR(parseFloat(e.target.value));
        break;
    }
  };

  return (
    <Select value={cr} onChange={onChange} {...selectProps}>
      <MenuItem value={0}>0</MenuItem>
      <MenuItem value={0.125}>⅛</MenuItem>
      <MenuItem value={0.25}>¼</MenuItem>
      <MenuItem value={0.5}>½</MenuItem>
      <MenuItem value={1}>1</MenuItem>
      <MenuItem value={2}>2</MenuItem>
      <MenuItem value={3}>3</MenuItem>
      <MenuItem value={4}>4</MenuItem>
      <MenuItem value={5}>5</MenuItem>
      <MenuItem value={6}>6</MenuItem>
      <MenuItem value={7}>7</MenuItem>
      <MenuItem value={8}>8</MenuItem>
      <MenuItem value={9}>9</MenuItem>
      <MenuItem value={10}>10</MenuItem>
      <MenuItem value={11}>11</MenuItem>
      <MenuItem value={12}>12</MenuItem>
      <MenuItem value={13}>13</MenuItem>
      <MenuItem value={14}>14</MenuItem>
      <MenuItem value={15}>15</MenuItem>
      <MenuItem value={16}>16</MenuItem>
      <MenuItem value={17}>17</MenuItem>
      <MenuItem value={18}>18</MenuItem>
      <MenuItem value={19}>19</MenuItem>
      <MenuItem value={20}>20</MenuItem>
      <MenuItem value={21}>21</MenuItem>
      <MenuItem value={22}>22</MenuItem>
      <MenuItem value={23}>23</MenuItem>
      <MenuItem value={24}>24</MenuItem>
      <MenuItem value={25}>25</MenuItem>
      <MenuItem value={26}>26</MenuItem>
      <MenuItem value={27}>27</MenuItem>
      <MenuItem value={28}>28</MenuItem>
      <MenuItem value={29}>29</MenuItem>
      <MenuItem value={30}>30</MenuItem>
    </Select>
  );
};

export interface ChallengeRatingSelectProps {
  cr: number;
  setCR: React.Dispatch<React.SetStateAction<number>>;
  selectProps?: SelectProps;
}
export default ChallengeRatingSelect;
