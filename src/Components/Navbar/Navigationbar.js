import React from 'react'
import styles from './Navigationbar.module.css'
import {ReactComponent as LogoIcon} from '../../assets/black.svg'


function Navigationbar() {
  return (
    <div className={styles.nav}>
      <div style={{display: "flex", justifyContent: "flex-start"}}>
      <p>Hello</p>
      <p>Hello</p>
      </div>
      <div>
      <LogoIcon style={{width: "100px", height: "50px"}}/>
      </div>
      <div style={{display: "flex", justifyContent: "flex-end"}}>
      <p>Hello</p>
      <p>Hello</p>
      </div>
    </div>
  );
}

export default Navigationbar;
