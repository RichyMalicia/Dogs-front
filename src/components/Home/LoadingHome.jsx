import React from "react";
import s from './loadingHome.module.css'

export default function Loading({ setLoading }){
        setTimeout(() =>{
            setLoading(false)
        }, 2000)
    return(
        <div className={s.loader}>Loading...</div>
    )
}