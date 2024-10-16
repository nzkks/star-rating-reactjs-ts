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

  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    const index = Number(e.currentTarget.dataset.index);

    const activeStars = index + 1;
    handleUpdatedValue(activeStars);
  };

  const handleUpdatedValue = (activeStars: number): void => {
    if (activeStars !== currentValue) {
      setStars(getStars(activeStars));
      setCurrentValue(activeStars);
      onChange(activeStars);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>): void => {
    const { key } = e;
    const keyNumber = Number(key);

    let activeStars = currentValue;
    if (Number.isInteger(keyNumber) && keyNumber >= 0 && keyNumber <= numOfStars) {
      e.preventDefault();
      activeStars = keyNumber;
    } else {
      if (key === 'ArrowUp' || (key === 'ArrowRight' && activeStars < numOfStars)) {
        e.preventDefault();
        activeStars += 1;
      } else if (key === 'ArrowDown' || key === 'ArrowLeft') {
        e.preventDefault();
        activeStars -= 1;
      }
    }

    handleUpdatedValue(activeStars);
  };

  return (
    <div tabIndex={0} onKeyDown={handleKeyDown} style={{ display: 'flex' }}>
      {stars.map((star, idx) => (
        <Star
          key={idx}
          index={idx}
          active={star.active}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        />
      ))}
      <div style={{ marginLeft: 10 }}>{currentValue}</div>
    </div>
  );
};

export default StarRating;
