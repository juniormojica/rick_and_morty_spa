import styles from "./SearchBar.module.css"
import { useState } from "react";
export default function SearchBar(props) {
   const [idPersonaje,setidPersonaje]=useState("")

   const changeCharacter=(event)=>{
     
      const value = event.target.value;
      setidPersonaje(value)
   
      
   }
   return (
      <div className={`${styles.center}`}>
         <input onChange={changeCharacter} type='search' className={`${styles.search} `} />
      <button  className={styles.buttonSearch} onClick={()=>props.onSearch(idPersonaje)}>Agregar</button>
      </div>
   );
}
