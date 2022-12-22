import styles from "./Card.module.css"
import { useState } from "react";
import {Link} from "react-router-dom"

export default function Card(props) {
  const eliminateId =props.idForClosing;
   return (
      <Link to={`/detail/${props.idForClosing}`}>
         <span className={`${styles.space} `}>
            <div className={styles.buttonContainer}>
               <button className={`${styles.center} ${styles.closeButton}`} onClick={() => props.onClose(eliminateId)}>x</button>
            </div>

            <h2 className={`${styles.center}`}>{props.name} </h2>
            <h2 className={`${styles.center}`}>{props.species} </h2>
            <h2 className={`${styles.center}`}>{props.gender} </h2>
            <img className={styles.characterImage} src={props.image} alt="" />
         </span>
      </Link>
     
   );
}
