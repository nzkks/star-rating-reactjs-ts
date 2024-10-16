import { useEffect, useState } from 'react';

import Star from '../star/Star';

type StarType = {
  active: boolean;
};

type StarRatingProps = {
  numOfStars?: number;
  value?: number;
  onChange?: (value: number) => void;
};

const StarRating = ({ numOfStars = 5, value = 0, onChange = () => {} }: StarRatingProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [stars, setStars] = useState<StarType[]>([]);

  const validateInitialValue = (value: number, numOfStars: number): void => {
    if (value < 0 || value > numOfStars) {
      setCurrentValue(0);
    } else {
      setCurrentValue(value);
    }
  };

  const getRate = (): number => {
    return Math.round(currentValue);
  };

  const getStars = (activeStars?: number): StarType[] => {
    if (typeof activeStars === 'undefined') {
      activeStars = getRate();
    }

    const stars = [];
    for (let i = 0; i < numOfStars; i++) {
      stars.push({
        active: i <= activeStars - 1,
      });
    }

    return stars;
  };

  useEffect(() => {
    validateInitialValue(value, numOfStars);
    setStars(getStars(value));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseOver = (e: React.MouseEvent<HTMLElement>): void => {
    const index = Number(e.currentTarget.dataset.index);

    const activeStars = index + 1;

    setStars(getStars(activeStars));
  };

  const handleMouseLeave = (): void => {
    setStars(getStars());
  };

  return (
    <div style={{ display: 'flex' }}>
      {stars.map((star, idx) => (
        <Star
          key={idx}
          index={idx}
          active={star.active}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default StarRating;
