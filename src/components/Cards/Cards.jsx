import Card from "../Card/Card"
import styles from "../Cards/Cards.module.css"
export default function Cards(props)
{
 
   
   return (
      <div className={styles.cardContainer}>
         {
               props.personajes.map((character,index) => {
                 return <Card
                  key={index} 
                  name={character.name} 
                  species ={character.species}
                  gender = {character.gender}
                  image={character.image}
                  onClose={props.onClose}
                  idForClosing={character.id}
                  />
               })
            }
      </div>

      );
        
}
   
   

        
      
       


   
  