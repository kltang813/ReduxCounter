import React from 'react';
import {useSelector} from 'react-redux';

const Counter: React.FC<any> = (props) =>  {
    const val = useSelector(state=>state.value)
}

