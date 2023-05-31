import React from "react";
import classes from './TopBar.module.css'

const TopBar =  ()=>{
    
    return (
            <header>
                <nav className={classes.Topbar}>
                    <img src={require('./amazonLogo.png')} className={classes.AppLogo} alt="logo" />
                </nav>
            </header>
    )
}
export default TopBar;
