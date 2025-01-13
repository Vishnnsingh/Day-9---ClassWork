import React, { useContext } from 'react'
import styles from './ExDetails.module.css'
// import { GiStrong } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { GiStrong } from "react-icons/gi";
import { dataContext } from '../App';

const ExDetails = (props) => {


  let exercise = {... props.exData}
  console.log(exercise);

  const handleBack = () =>{
      props.setShowExDetails(false);
  }
  
  return (
    <div className={styles.exDetails_con}>

        <div className={styles.left}>
            <img src={exercise.gifUrl} alt="" />
        </div>
        <div  className={styles.right}>
             <h1>{exercise.name}</h1>
             <h3>Equipment : {exercise.equipment}</h3>
             <h3>Body Part : {exercise.bodyPart}</h3>
             <ul>
              <h3>Instructions :</h3>
              {
                exercise.instructions.map((ele,i) =>{
                  return <li key={i}>{ele}</li>
                })
              }
             </ul>
             <div className={styles.list}>
              {
                exercise.secondaryMuscles.map((ele,i) =>{
                  return <div key={i}> <GiStrong className={styles.div} role='div'/><h3 className={styles.muscles}>{ele}</h3></div>
                })
              }
                
                {/* <div><GiStrong className={styles.div} role='div' /><h3>hamstring</h3></div>
                <div><GiStrong className={styles.div}  role='div' /><h3>hamstring</h3></div>
                <div><GiStrong className={styles.div} role='div' /><h3>hamstring</h3></div>
                <div><GiStrong className={styles.div} role='div' /><h3>hamstring</h3></div> */}
             </div>
             <h3>Targets : {exercise.target}</h3>
             <IoArrowBack className={styles.button} onClick={handleBack} role='button' />
        </div>

    </div>
  )
}

export default ExDetails