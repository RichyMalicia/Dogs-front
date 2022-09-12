import React from "react";
import s from './loading.module.css'

export default function LoadingDetails({ setLoadingDetails }){
        setTimeout(() =>{
            setLoadingDetails(false)
        }, 700)
    return(
        <div className={s.loader}>Loading...</div>
    )
}