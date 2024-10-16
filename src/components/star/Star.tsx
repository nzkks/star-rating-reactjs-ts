const defaultStyles = { display: 'inline-block' };

type StarProps = {
  index: number;
  active: boolean;
  onMouseOver: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave: () => void;
};

const Star = ({ index, active, onMouseOver, onMouseLeave }: StarProps) => {
  const style = Object.assign({}, defaultStyles, {
    color: active ? 'yellow' : 'gray',
  });

  return (
    <span
      key={index}
      data-index={index}
      onMouseOver={onMouseOver}
      onMouseMove={onMouseOver}
      onMouseLeave={onMouseLeave}
      style={style}
    >
      ★
    </span>
  );
};

export default Star;
