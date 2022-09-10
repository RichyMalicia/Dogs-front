import React, {useCallback, useEffect, useState} from 'react';

import NavBar from '../NavBar/NavBar';


import { cleanDetail, getTemper } from '../../redux/actions/actionsCreator';
import { useDispatch } from 'react-redux';

import Loading from './LoadingHome';
import SearchBar from '../SearchBar/SearchBar';
import DogsCards from '../DogCards/DogCards';
import s from './home.module.css'


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
    <div className={s.container} >
      <img className={s.img} src="https://static.vecteezy.com/system/resources/previews/006/431/810/non_2x/seamless-dog-pattern-with-paw-prints-cat-foots-texture-pattern-with-doggy-pawprints-dog-texture-hand-drawn-illustration-in-doodle-style-on-white-background-vector.jpg" alt="imagen" />

      {loading ? <Loading setLoading={setLoading}/>  :
       <div className={s.content}>
       <NavBar className={s.navbar} setOrder={setOrder} />    
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