import styles from "./Form.module.css"
import { useState,useEffect } from "react"
import {validation} from "./validation"
const Form = (props)=>{ 
    const [userData,setUserData] = useState({
        username : "",
        password : ""
    })

    const [errors,setErrors] =useState({
        username : "",
        password : ""
    })



    const handleInputChange = (event)=>{
        const property = event.target.name;
        const value = event.target.value;
      
        setUserData(
            {...userData,
                [property]:value}
        )
        
      
            setErrors(validation(
                {
                    ...userData,
                    [property]:value
                }
    
            ))
      
      
    }

  

    const handleSubmit = (event)=>{
        event.preventDefault()
    }

    return (
        <div className={styles.formContainer}>
            <form action="" className={styles.form} >

                <label className={styles.formLabel}  htmlFor="user">Usuario:</label>
                <input
                    onChange={handleInputChange}
                    className={`${styles.formInput} ${errors.username && styles.errors}`}
                    type="text" name="username"
                    value={userData.username} />

                {errors.username && (<p>{errors.username}</p>)}

                <label 
                className={`${styles.formLabel} `}
                  htmlFor="password">Contraseña:</label>
                <input
                    onChange={handleInputChange}
                    className={`${styles.formInput} ${errors.password && styles.errors}` }
                    type="password"
                    name="password"
                    value={userData.password} />

                {errors.password && (<p>{errors.password}</p>)}

                <button
                 className={`${styles.buttonIngresar} ${(errors.password||errors.username) && styles.errors} `}
                 onSubmit ={()=>{props.onLogin(userData)}}>
                
                    Ingresar
                 </button>
            </form>
        </div>
    )
}

export default Form