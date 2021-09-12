import React from 'react'
import logo from './logo.jpeg'
import style from './Logo.module.css'

export const Logo = () => {
    return (
        <div className={style.box}>
            <img className={style.logo} src={logo} alt="Logo El Obrador del Celiaco"></img>
        </div>
    )
}
