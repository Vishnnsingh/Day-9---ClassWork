import { useEffect, useState,  useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headers from './Headers/Headers'
import axios from 'axios'
import { createContext } from 'react'
import NavSection from './NavSection/NavSection'
import SearchSection from './SearchSection/SearchSection'
import Exercises from './Exercises/Exercises'

export const dataContext = createContext();
function App() {
  const [fullData,setFullData] = useState([]);
  const [data , setData] = useState([]);
  const [bodyPart , setBodyPart] = useState([]);
 const [showEx , setShowEx] = useState(false);
const [part ,setPart] = useState("");
const inputRef = useRef(null);
const [inputVal , setInputVal] = useState("");
const [showExDetails , setShowExDetails] = useState(false);


  useEffect(() =>{
  
    // const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10&offset=0';
    // const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0';
    // const url = 'https://exercisedb.p.rapidapi.com/exercises/name/%7Bbicepscurls%7D?offset=0&limit=10';
    // const url = 'https://exercisedb.p.rapidapi.com/exercises/equipment/assisted?limit=10&offset=0';
    const mainUrl = 'https://exercisedb.p.rapidapi.com/exercises?limit=1000&offset=0';
    const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
    const fullOptions = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '688d7a9cd2msh81449f2c131a2a1p13bc0fjsne73ffd0ee412',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
    };

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '688d7a9cd2msh81449f2c131a2a1p13bc0fjsne73ffd0ee412',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
    };
    
   async function name(params) {
    try {
      // const res = await axios.get(url , options)
      // // const result = await response.text();
      // console.log(res.data);
      // setBodyPart([
      //     ...res.data
      // ])

  const res1 = await axios.get(mainUrl , fullOptions)
  
      console.log(res1.data);
      setFullData([
          ...res1.data
      ])
    //  setFullData([ 'back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist','back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist','back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist','back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist'])
      setBodyPart(['back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist'])
    } catch (error) {
      console.error(error);
    }
   }

   name();

  },[]);
  
  return (
    <dataContext.Provider value={{setShowExDetails,showExDetails,fullData , setFullData,inputVal , setInputVal,inputRef , part , setPart,data, setData , bodyPart , setBodyPart ,showEx , setShowEx} }>
       <Headers />
      {showExDetails ? null : <SearchSection />}
      {showEx ? <Exercises /> : <NavSection />}
    </dataContext.Provider>
  )
}

export default App
