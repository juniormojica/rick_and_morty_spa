import styles from'./App.module.css'
import Cards from './components/Cards/Cards'
import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import Form from './components/Form/Form'
import {Routes,Route,Link,useLocation} from "react-router-dom"



import { useState} from 'react'




function App () {


  const [personajes,setPersonajes]= useState([])

  const [acces,setAcces] = useState(false)
  const username = "juniormojica26@gmail.com";
  const password = "A182jab1ur36*";

 const onLogin=(userData)=>{

    console.log(userData);
 }
 const onSearch = (iDPersonaje)=>{
  
    fetch(`https://rickandmortyapi.com/api/character/${iDPersonaje}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
          setPersonajes((oldChars) => [...oldChars, data]);
      } else {
          window.alert('No hay personajes con ese ID');
      }
      
    });
   
 }

 const handleCloseCard =(idBorrar)=>{

    const newPersonajes = personajes.filter((personaje)=>personaje.id!==idBorrar)
    
    console.log(newPersonajes);
    
    setPersonajes(newPersonajes)
    
   
    ;
 }

 const location = useLocation()

  return (
    <div className={`${styles.imagenFondo} ${styles.body}`}>

        <div>
          {
            location.pathname!== "/" && ( <Nav onSearch ={onSearch} />)
          }
           
          </div>
      <Routes>

        
<Route path='/' element={(
  <>
  <Cards
    personajes={personajes}
   onClose={handleCloseCard}/>
  <Form onLogin ={onLogin} />                 
  </>
)} />

        <Route path='/detail/:detailId' element={<Detail />} />

        <Route path='/about' element={<About />} />

        <Route path="/*" element={<PageNotFound/> } />
        
      </Routes>
      
    </div>
  )
}

export default App
