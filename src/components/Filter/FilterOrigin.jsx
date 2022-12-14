import React from 'react'
import { useDispatch } from 'react-redux';
import { filterDB, setPagination } from '../../redux/actions/actionsCreator';
import style from './Filter.module.css'

function FilterOrigin() {
    const dispatch = useDispatch();
    function handleDB(e){
        e.preventDefault();
        dispatch(filterDB(e.target.value));
        dispatch(setPagination(1));
    }
  return (
    <div className={style.filter}>
         <select className={style.filter} onChange={(e)=> handleDB(e)}>
                <option hidden value=''> Origin filter</option>
                <option value='All'> All </option>
                <option value='Api'> Api </option>
                <option value='Db'> Db </option>
        
            </select>
    </div>
  )
}

export default FilterOrigin