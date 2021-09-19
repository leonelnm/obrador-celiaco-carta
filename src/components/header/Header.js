import React from 'react'
import { Logo } from 'components/logo/Logo'
import style from './Header.module.css'
export const Header = () => {
    return (
        <header className={style.box}>
            <Logo/>
        </header>
    )
}
