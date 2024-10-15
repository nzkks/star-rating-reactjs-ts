import { useEffect, useState } from 'react';

type StarType = {
  active: boolean;
};

type StarRatingProps = {
  count?: number;
  value?: number;
  onChange?: (value: number) => void;
};

const StarRating = ({ count = 5, value = 0, onChange = () => {} }: StarRatingProps) => {
  const [stars, setStars] = useState<StarType[]>([]);

  const getStars = (activeCount: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        active: i <= activeCount - 1,
      });
    }

    return stars;
  };

  useEffect(() => {
    setStars(getStars(value));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {stars.map((star, idx) => (
          <span key={idx}>★</span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
