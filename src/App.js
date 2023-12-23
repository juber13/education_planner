import { useState } from 'react';
import './App.css';

function App() {
  const [data , setData] = useState([]);
  const [subject , setSubject] = useState("");
  const [hourse , setHourse] = useState("");

  const addSubject = () => {
    if(subject !== "" && hourse !== ""){
      setData([...data , {name : subject , id : data.length , hour : Number(hourse)}])
      // setList([...lists , {name : item , id : lists.length}])
      setSubject("");
      setHourse("");
    }else{
      alert("pls add values 😐");
      return;
    }
  } 


  const increaseHousre = (id) => {
    // const newHours = data[id].hourse + 1;
    const newData = [...data];
    newData[id].hour = newData[id].hour + 1;
    setData(newData);
  }
  
  const decreaseHousre = (id) => {
    const newData = [...data];
    if(newData[id].hour > 0){
      newData[id].hour = newData[id].hour - 1;
      setData(newData);
    }
  }


  return (
    <div className="App">
       <div className="header">
          <h3>Geekster Education Planner</h3>
       </div>

       <div className="inputs">
          <input value={subject} type="text" placeholder='Subject' onChange={(e) => setSubject(e.target.value)}/>
          <input value={hourse} type="number"  placeholder='Hourse' onChange={(e) => setHourse(e.target.value)}/>
          <button type='submit' className='btn' onClick={addSubject}>Add</button>
       </div>

       <div className="contents">
           {data.map((item , index) => { 
            return(
             <div className="lists" key={index}>
              <p>{item.name}</p>
              <p>{item.hour}</p>
              <button className='btn' onClick={() => increaseHousre(index)} style={{background: "yellowgreen"}}>Plus</button>
              <button className='btn' onClick={() => decreaseHousre(index) } style={{background:"orange"}}>Minus</button>
             </div>
            )
           })}
           
       </div>
    </div>
  );
}

export default App;
