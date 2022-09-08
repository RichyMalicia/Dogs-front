import React, {useCallback, useEffect, useState} from 'react';

import NavBar from '../NavBar/NavBar';


import { cleanDetail, getTemper } from '../../redux/actions/actionsCreator';
import { useDispatch } from 'react-redux';

import Loading from '../Loading/Loading';
import SearchBar from '../SearchBar/SearchBar';
import DogsCards from '../DogCards/DogCards';


function Home() {
    
const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  const [/* order */, setOrder] = useState('');
  
  const limpieza = useCallback(()=>{
    dispatch(cleanDetail())
  },[dispatch]);
  useEffect(()=>{
    limpieza();
  }, [limpieza])
  const temps = useCallback(()=>{
    dispatch(getTemper())
  },[dispatch]);
  useEffect(()=>{
    temps();
  }, [temps])
  return (
    <div >
      {loading ? <Loading setLoading={setLoading}/>  :
       <div>
       <NavBar setOrder={setOrder} />    
          <SearchBar />
            <div>
              
           <DogsCards/> 
          </div>
          </div>
}
          </div>    
  )
}
export default Home