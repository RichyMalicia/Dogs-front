import React from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { getAllDogs, setPagination } from '../../redux/actions/actionsCreator'
import FilterOrigin from '../Filter/FilterOrigin'

import FilterTemper from '../Filter/FilterTemper'
import AtoZ from '../Ordering/AtoZ'
import Weight from '../Ordering/Weight'
import style from './NavBar.module.css'
function NavBar({setOrder}) {
  const dispatch = useDispatch();
  function handleReset(e){
    e.preventDefault();
    dispatch(getAllDogs());
    dispatch(setPagination(1));
  }
  return (
        <div className={style.container}>
          <span>Order by:</span>
          <AtoZ className={style.filters} setOrder={setOrder} />
          <Weight className={style.filters} setOrder={setOrder}/>
         <button className={style.btn} onClick={(e)=> handleReset(e)}>Reset</button>
         <span>Filter by:</span>
         <FilterTemper className={style.filters} setOrder={setOrder} />
         <FilterOrigin className={style.filters} setOrder={setOrder} />
          <Link  to='/createDog' ><button className={style.create}>Create Dog!</button>  </Link>
          <Link  to='/home' ><button className={style.home}>Home</button>  </Link>
        </div>
        
     
   
   
        
  )
}

export default NavBar