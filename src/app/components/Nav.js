import React from "react";
import styles from "../styles/Nav.module.css"


export default function Nav(){

  return(
    <>
      <input type="checkbox" id={styles.menu} />
      <label for={styles.menu} className={styles.menu}>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav className={styles.nav}> 
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Information</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </>
      
  );
}
