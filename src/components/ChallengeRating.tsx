import { useMemo } from 'react';

export function ChallengeRating({ children }: ChallengeRatingProps) {
  const fraction = useMemo(() => {
    const whole = Math.floor(children);
    const fraction = children - whole;

    let fractionString = '';
    switch (fraction) {
      case 0.125:
        fractionString = '⅛';
        break;
      case 0.25:
        fractionString = '¼';
        break;
      case 0.375:
        fractionString = '⅜';
        break;
      case 0.5:
        fractionString = '½';
        break;
      case 0.625:
        fractionString = '⅝';
        break;
      case 0.75:
        fractionString = '¾';
        break;
      case 0.875:
        fractionString = '⅞';
        break;
    }

    return `${whole > 0 ? whole : ''}${fractionString}`;
  }, [children]);

  return (
    <span>{fraction}</span>
  );
}

export interface ChallengeRatingProps {
  children: number;
}

export default ChallengeRating;
