import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Counter = ({slice}) =>  {
    const val = useSelector(state=>state.value)
    const dispatch = useDispatch()

    return (<><div>State: {val}</div>
    <button onClick={() =>dispatch(slice.actions.increment())}>+</button>
    <button onClick={() => dispatch(slice.actions.decrement())}>-</button></>)
}

export default Counter
