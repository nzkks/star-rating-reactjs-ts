const defaultStyles = { display: 'inline-block' };

type StarProps = {
  active: boolean;
};

const Star = ({ active }: StarProps) => {
  const style = Object.assign({}, defaultStyles, {
    color: active ? 'yellow' : 'gray',
  });

  return <span style={style}>★</span>;
};

export default Star;
