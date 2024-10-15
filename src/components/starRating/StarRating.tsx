import { useEffect, useState } from 'react';

import Star from '../star/Star';

type StarType = {
  active: boolean;
};

type StarRatingProps = {
  count?: number;
  value?: number;
  onChange?: (value: number) => void;
};

const StarRating = ({ count = 5, value = 0, onChange = () => {} }: StarRatingProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [stars, setStars] = useState<StarType[]>([]);

  const validateInitialValue = (value: number, count: number) => {
    if (value < 0 || value > count) {
      setCurrentValue(0);
    } else {
      setCurrentValue(value);
    }
  };

  const getRate = () => {
    return Math.round(currentValue);
  };

  const getStars = (activeCount: number | undefined) => {
    if (typeof activeCount === 'undefined') {
      activeCount = getRate();
    }

    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        active: i <= activeCount - 1,
      });
    }

    return stars;
  };

  useEffect(() => {
    validateInitialValue(value, count);
    setStars(getStars(value));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      {stars.map((star, idx) => (
        <Star key={idx} active={star.active} />
      ))}
    </div>
  );
};

export default StarRating;
