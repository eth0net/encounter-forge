import { useMemo } from 'react';

export const ChallengeRating = ({ children }: ChallengeRatingProps) => {
  const fraction = useMemo(() => {
    const whole = Math.floor(children);
    const fraction = children - whole;

    let fractionStr = '';
    switch (fraction) {
      case 0.125:
        fractionStr = '⅛';
        break;
      case 0.25:
        fractionStr = '¼';
        break;
      case 0.375:
        fractionStr = '⅜';
        break;
      case 0.5:
        fractionStr = '½';
        break;
      case 0.625:
        fractionStr = '⅝';
        break;
      case 0.75:
        fractionStr = '¾';
        break;
      case 0.875:
        fractionStr = '⅞';
        break;
    }

    return fraction ? whole ? `${whole} ${fractionStr}` : fractionStr : whole;
  }, [children]);

  return (
    <span>{fraction}</span>
  );
};

export interface ChallengeRatingProps {
  children: number;
}

export default ChallengeRating;
