import './App.css';
import { StarRating } from '@/components';

const App = () => {
  const handleOnChange = (value: number) => {
    console.log(value);
  };

  return (
    <>
      <h3>Star Rating using Reactjs and Typescript</h3>

      <StarRating value={2} onChange={handleOnChange} />
    </>
  );
};

export default App;
