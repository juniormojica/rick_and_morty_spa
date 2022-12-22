import SearchBar from  "../SearchBar/SearchBar"
import styles from "../Nav/Nav.module.css"
import {Link} from "react-router-dom"
import { useState } from 'react'


const Nav =(props)=>{


    return (
        <div className={styles.color}>
            <SearchBar 
                onSearch = {props.onSearch  } />
        <div>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
        </div>
           
        </div>
    )
}

export default Nav ;