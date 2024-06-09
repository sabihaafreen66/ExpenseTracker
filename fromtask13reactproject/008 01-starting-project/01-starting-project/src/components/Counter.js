import {useSelector,connect, useDispatch} from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch=useDispatch();
const counter=useSelector(state=>state.counter)

const incrementHandler=()=>{
dispatch({type:'IncrementBy5'});
}
const decrementHandler=()=>{
  dispatch({type:'DecrementBy5'})
}
  const toggleCounterHandler = () => {
    
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>IncrementBy5</button>
        <button onClick={decrementHandler}>DecrementBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
