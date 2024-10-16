const defaultStyles = { display: 'inline-block' };

type StarProps = {
  index: number;
  active: boolean;
  onMouseOver: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave: () => void;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const Star = ({ index, active, onMouseOver, onMouseLeave, onClick }: StarProps) => {
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
      onClick={onClick}
      style={style}
    >
      ★
    </span>
  );
};

export default Star;
