import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Detail/Detail.module.css"

const Detail = ()=>{
    const{ detailId }= useParams()
    const [character,setCharacter]=useState({})
    const navigation = useNavigate()
    
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
        <div >
          
            <div className={styles.detailContainer}>
                <div>
                    <h1 className= {styles.info}>{`Nombre: ${character.name}`}</h1>
                    <h3 className= {styles.info}>{`Status: ${character.status}`} </h3>
                    <h3 className= {styles.info}>{`Specie: ${character.species}`} </h3>
                    <h3 className= {styles.info}>{`Gender: ${character.gender}`} </h3>
                    <h3 className={styles.info}> {`Origen :${character.origin && character.origin.name ? character.origin.name : "No hay nombre de origen"}`} </h3>
                </div>
                <div>
                      <h1><img src={character.image} alt="" srcset="" /></h1>
                </div>
                
            </div>
            <button onClick={()=>navigation("/")}>Volver</button>
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