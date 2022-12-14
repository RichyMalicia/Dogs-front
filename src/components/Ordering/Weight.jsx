import React from 'react'
import { useDispatch } from 'react-redux'
import { orderByWeight, setPagination } from '../../redux/actions/actionsCreator';
import style from './Ord.module.css'
function Weight({setOrder}) {
    const dispatch = useDispatch();

    function handleWeight(e){
        e.preventDefault();
        dispatch(orderByWeight(e.target.value));
        setOrder(e.target.value);
        dispatch(setPagination(1));
    }
  return (
    <div className={style.filter}>
        <select className={style.filter} onChange={(e)=> handleWeight(e)}>
        <option hidden value=''>Weight</option>
                <option value='Lower'> Low - High </option>
                <option value='Higher'> High - Low </option>
           
        </select>
    </div>
  )
}

export default Weight