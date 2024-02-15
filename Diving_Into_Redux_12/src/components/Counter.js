import {useSelector, useDispatch} from 'react-redux';
import { counterActions , authActions} from '../store';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();
  const show =useSelector(state => state.showCounter);
  const counter= useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>
        {counter}
      </div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase By 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
