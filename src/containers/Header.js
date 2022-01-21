import React from 'react'
import FishingBlock from '../components/FishingBlock/FishingBlock'
import Havigation from './Havigation'
import classes from './Header.module.css'

function Header() {
    return (
        <header className={classes.header}>
            <Havigation/>
            <FishingBlock/>
            <footer className={classes.footer}>
            <hr/><h3>ИЛИ</h3><hr/>
            </footer>
            <div className={classes.foterr}><p>чтобы редактировать свой профиль,</p><p className={classes.foterr}>завершите регистрацию!</p></div>
        </header>
    )
}

export default Header;