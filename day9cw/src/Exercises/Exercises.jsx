import React, { useContext, useState } from 'react'
import styles from "./Exercises.module.css"
import { dataContext } from '../App';
import axios from 'axios';
import { useEffect } from 'react'
import ExCard from '../ExCard/ExCard';
import { MdArrowBackIosNew } from "react-icons/md";
import ExDetails from '../ExDetails/ExDetails';

const Exercises = () => {
    const {showExDetails,setShowExDetails,fullData,inputVal , setFullData ,setShowEx,part,data,setBodyPart,setData} = useContext(dataContext);
    const [page , setPage] = useState(1);
    const [showIdx , setShowIdx] = useState(0);


const handleFirst =() =>{
  setPage(prev => prev - 2)

}

const handleSecond =() =>{
  setPage(prev => prev - 1)
  
}

const handleThird =() =>{
  setPage(prev => prev )
  
}

const handleFourth =() =>{
  setPage(prev => prev + 1)
  
}

const handleFifth =() =>{
  setPage(prev => prev + 2)
  
}

const handlePrevious =() =>{
  setPage(prev => prev - 1)
  
}
const handleNext =() =>{
  setPage(prev => prev + 1)
}

const handleShowExerciseDetails = () =>{
   console.log("hi");
   
}



console.log("data",data);
if(part){
  useEffect(() =>{
    const url = ` https://exercisedb.p.rapidapi.com/exercises/bodyPart/${part}?limit=120&offset=0`; 
  
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '688d7a9cd2msh81449f2c131a2a1p13bc0fjsne73ffd0ee412',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };
  const axo = async () =>{
   try {
    const res = await axios.get(url, options);
    console.log("res :" , res.data);
  
  setData([
      ...res.data
   ])
   } catch (error) {
    console.log("error :" , error);
   }
  }  
  axo();
  },[part]);
}

//   bodyPart
// : 
// "waist"
// equipment
// : 
// "body weight"
// gifUrl
// : 
// "https://v2.exercisedb.io/image/ApMAIDsHi2VfW8"
// id
// : 
// "0001"
// instructions
// : 
// (5) ['Lie flat on your back with your knees bent and feet flat on the ground.', 'Place your hands behind your head with your elbows pointing outwards.', 'Engaging your abs, slowly lift your upper body off…forward until your torso is at a 45-degree angle.', 'Pause for a moment at the top, then slowly lower your upper body back down to the starting position.', 'Repeat for the desired number of repetitions.']
// name
// : 
// "3/4 sit-up"
// secondaryMuscles
// : 
// (2) ['hip flexors', 'lower back']
// target
// : 
// "abs"

useEffect(() =>{
console.log("inputVal",inputVal);

    console.log('fullData' , fullData);
    let filtered = fullData.filter((ele) =>{
      return (ele.bodyPart == inputVal) || 
      (ele.equipment == inputVal) ||
      (ele.target == inputVal) ||
      (ele.name == inputVal)
    })

    setData([
      ...filtered
    ])

    

     console.log("filtered :" , filtered);
     
},[inputVal])


 

let endingPoint = page * 12 ;
let startingPoint = endingPoint - 12 ;
console.log("ShowIdx : ",showIdx)
    
  return (
    <>
   {
   
    
    showExDetails ? <ExDetails setShowExDetails={setShowExDetails} exData={data[showIdx]}  /> :
    <div className={styles.ex_container}>
   <div>
       <div className={styles.show_con}>
      <div className={styles.back} onClick={() => {

         setShowEx(false)
         setData([])}}> <MdArrowBackIosNew className={styles.button}  role='button'/></div>
       <h1 className={styles.show_header}>Showing <span className={styles.part }>  {part || inputVal} </span>Exercises :</h1>
       </div>
     <div className={styles.ex_con}>
     
     {
     
    
        data.slice(startingPoint , endingPoint).map((ex, i) =>{
             // console.log(ex);
            return  <ExCard setShowExDetails={setShowExDetails} page={page} showIdx={showIdx} setShowIdx={setShowIdx}  {...ex} idx={i} key={i} />
         })
     
     }
     </div>

    </div>
    {
      page >= 3 ? <div className={styles.pagination}>
     <a href="#"> <span   onClick={handlePrevious} >Previous</span></a>
     <a href="#"> <span  onClick={handleFirst}>{page-2}</span></a>
      <a href="#"><span  onClick={handleSecond}>{page-1}</span></a>
   <a href="#">   <span style={{backgroundColor : "red" ,
         fontWeight : "bold",
         color: "white",
         border: "1px solid red"}}  onClick={handleThird}>{page}</span></a>
      {
        page > 9 ? null :  <a href="#"><span  onClick={handleFourth}>{page + 1}</span> </a>
      }
      {
        page > 8 ? null :    <a href="#"><span  onClick={handleFifth}>{page + 2}</span> </a>
      }
    
      {
        page > 8 ? null :   <a href="#"><span  onClick={handleNext} >Next</span> </a>
      }

    </div>  : 
    <div className={styles.pagination}>

    <span style={{backgroundColor : "red" ,
         fontWeight : "bold",
         color: "white",
         border: "1px solid red"}} onClick={() => setPage(1) }>1</span>
    <a href="#"><span onClick={() => setPage(2) }>2</span></a>
<a href="#">    <span onClick={() => setPage(3) }>3</span></a>
<a href="#">    <span onClick={() => setPage(4) }>4</span></a>
<a href="#">    <span onClick={ () => setPage(5) }>5</span></a>
   <a href="#"> <span onClick={() => setPage(prev => prev + 1) }>Next</span></a>

  </div>
    }
   </div>
   }
    </>
  )
}

export default Exercises