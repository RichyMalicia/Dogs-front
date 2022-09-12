import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getDogID } from '../../redux/actions/actionsCreator';
import { Link } from 'react-router-dom';
import s from './dogDetail.module.css'
import LoadingDetails from './LoadingDetail';
import imagen from './imagen.jpg'


export default function DogDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const data = useSelector(state => state.dogsDetail);
    console.log("DATA", data);
    const [loadingDetails = true, setLoadingDetails] = useState();

    useEffect(()=>{
        dispatch(getDogID(id));             
    }, [dispatch, id]);
    console.log("ID ", id)
    
    
    if(!data) {
        return (
         <div className={s.container}>
             {
                    loadingDetails ? (
                        <LoadingDetails setLoadingDetails={setLoadingDetails}/>
                    ) : 
                    (
                        <div>
                            <img src={imagen} alt=' ' className={s.background}/>
                            <div className={s.details}>
                                    <div className={s.title}>
            <>
            <Link to='/home'><button className={s.btnH}>Go to Home</button></Link>
        <img src='https://previews.123rf.com/images/lightwise/lightwise1508/lightwise150800076/44185374-p%C3%A1gina-de-error-404-no-encontrado-concepto-y-un-s%C3%ADmbolo-de-enlace-roto-o-muerto-como-un-perro-que-em.jpg' alt=' '/> )
        </>
        </div>
        </div>
        </div>
                    )}
    </div>
    )} else if (!data.weightMin){ 
        
    return (
        <div className={s.container}>
             {
                    loadingDetails ? (
                        <LoadingDetails setLoadingDetails={setLoadingDetails}/>
                    ) : 
                    (
                        <div>
                            <img src={imagen} alt=' ' className={s.background}/>
                            <div className={s.details}>
                                    
    
        <>
        
        <Link to='/home'><button className={s.btnH}>Go to Home</button></Link>
        <div className={s.title}>
        <h3 className={s.name}>Name: {data.name && data.name }</h3>
        </div>
        <div className={s.text}>
    <p className={s.info}>Weight: {data.weight && data.weight.metric} kgs.</p>
    <p className={s.info}>Height: {data.height && data.height.metric} cms.</p>
    <p className={s.info}>Temperament: {data.temperament && data.temperament} </p>
    <p className={s.info}>Life Span: {data.life_span && data.life_span} </p>
    </div>
    <img src={data.reference_image_id? `https://cdn2.thedogapi.com/images/${data.reference_image_id}.jpg` : data.name} alt=" " style={{height: 300}}/>
    
        
    </>
    </div>
        </div>
        
                    )}
    </div>
    )
    
    
    
} else {
    return (
        <div className={s.container}>
             {
                    loadingDetails ? (
                        <LoadingDetails setLoadingDetails={setLoadingDetails}/>
                    ) : 
                    (
                        <div>
                            <img src="" alt='background-details' className={s.background}/>
                            <div className={s.details}>
                                    
        <>
        <Link to='/home'><button className={s.btnH}>Go to Home</button></Link>
        <div className={s.title}>
        <h3>Name: {data.name && data.name }</h3>
        </div>
        <div className={s.text}>    <p className={s.info}>Weight: min {data.weightMin} - max {data.weightMax} kgs.</p>
    <p className={s.info}>Height: min {data.heightMin} - max {data.heightMax} cms.</p>
    <p className={s.info}>Temperament: {data.tempers.map((t) => (`${t.name} `) )}</p>
    <p className={s.info}>Life Span: min {data.life_spanMin} - max {data.life_spanMax}</p>
    </div>
    <img src={data.image} alt="perro" style={{height: 300}}/>
    
       
    </>
    </div>
        </div>
       
                    )}
    </div>
    )
    
    
    
}
}
