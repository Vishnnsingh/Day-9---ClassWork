import { useContext } from 'react';
import styles from './SearchSection.module.css'
import { dataContext } from '../App';


const SearchSection = () =>{
   const {inputRef,setShowEx,inputVal , setInputVal} = useContext(dataContext);
  
   const handleSearch =() =>{
      console.log(inputRef.current.value);
      
     setInputVal(inputRef.current.value);
     setShowEx(true);
     console.log("inputVal",inputVal);
     inputRef.current.value = "";
   }



   return (
    <>
     <div className={styles.search_con}>  
         <div className={styles.search_box}> 
            <input ref={inputRef} type="text" name="" id="" placeholder={"Search by bodypart, exercise name, or target"} />
            <button onClick={handleSearch} className={styles.search_btn}>Search</button>
         </div>
        
     </div>
    </>
   )

}

export default SearchSection ;