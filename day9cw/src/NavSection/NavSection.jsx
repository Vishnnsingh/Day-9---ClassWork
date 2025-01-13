import React from 'react'
import styles from './NavSection.module.css'
import { dataContext } from '../App'
import { useContext } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const NavSection = () => {
   const {setData,bodyPart,part , setPart , showEx , setShowEx}= useContext(dataContext);
//    console.log(bodyPart);
   
const handleClickParts = (id) =>{
    setPart(bodyPart[id]);
   setShowEx(true);

   console.log(part);

}
  return (
    <div>
       <h1>Select any Body Part</h1>
       <div className={styles.parts_con}>
           {
            bodyPart.map((parts ,i) =>{
                // console.log(i);
               return <div key={i} onClick={() => handleClickParts(i)} className={styles.parts_box} >
                 <h2 className={styles.parts_name}>{parts}</h2>
               </div>
            })
           }
       </div>
    </div>
  )
}

export default NavSection