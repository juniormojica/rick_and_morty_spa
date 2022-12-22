import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../Detail/Detail.module.css"

const Detail = ()=>{
    const{ detailId }= useParams()
    const [character,setCharacter]=useState({})
    
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    },[])
    
    console.log(character);
    return(
        <div>
            <div>
                <h1 className= {styles.info}>{character.name}</h1>
                <h3 className= {styles.info}>{character.status} </h3>
                <h3 className= {styles.info}>{character.specie} </h3>
                <h3 className= {styles.info}>{character.gender} </h3>
                
            </div>
            <div></div>
            <h1><img src={character.image} alt="" srcset="" /></h1>
        </div>
    )
}

export default Detail;

// - Name
// - Status
// - Specie
// - Gender
// - Origin
// - Image