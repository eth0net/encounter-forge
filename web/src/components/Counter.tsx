import { Button, ButtonGroup } from '@mui/material';

export const Counter = ({ data, decrement, increment }: CounterProps) => {
  return (
    <ButtonGroup>
      <Button onClick={decrement} style={{ minWidth: 21, padding: 5 }}>
        -
      </Button>
      <Button style={{ minWidth: '50px' }}>
        {data}
      </Button>
      <Button onClick={increment} style={{ minWidth: 21, padding: 5 }}>
        +
      </Button>
    </ButtonGroup>
  );
};

export interface CounterProps {
  data: number;
  decrement: () => void;
  increment: () => void;
}

export default Counter;
