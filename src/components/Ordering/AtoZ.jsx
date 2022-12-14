import React from 'react'
import { useDispatch } from 'react-redux'
import { orderByName, setPagination } from '../../redux/actions/actionsCreator';
import style from './Ord.module.css'
function AtoZ({setOrder}) {
    const dispatch = useDispatch();
    
    function handleOrder(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setOrder(e.target.value); 
        dispatch(setPagination(1));
 }
  return (
      <div className={style.filter}>          
            <select className={style.filter} onChange={(e)=> handleOrder(e)}>
                <option hidden value=''>Name</option>
                <option value='A-Z'> A - Z </option>
                <option value='Z-A'> Z - A </option>
        
            </select>
      </div>
  )
}

export default AtoZ