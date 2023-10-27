import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'


import {useEffect} from 'react';

function App() {
  const [list, setList] = useState(null)



  

  useEffect(()=>{
    const fetchAllCoinData = async () =>{
      const response = await fetch(`https://api.openbrewerydb.org/v1/breweries`)
      const json = await response.json();
  
      setList(json)
     
  
    }

    fetchAllCoinData().catch(console.error);
  
  },[]);

 
  const searchItems = async (searchQuery) =>{
    const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${searchQuery}&per_page=10`)
    const json = await response.json();
  
    setList(json)
    console.log("New List")
    console.log(list)

    console.log(Object.entries(list));

    //by city
    //
    
  }
  

  return (
    <>
      <h1>Hello Brewery</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(inputString) => searchItems(inputString.target.value)}
      />

        <div className="titles">
          <h1 style={{width:300}}>Name</h1>
          <h1 style={{width:300}}>Type</h1>
          <h1 style={{width:300}}>City</h1>
          <h1 style={{width:300}}>Phone</h1>
      
          </div>
    
      {list && list.map((item) => (
        <div>
          

        <li className="item" key={item.id}>

        <Link
        to={`/breweryDetails/${item.id}`} 
        key={item.id}
        >Link</Link>
          <h3 style={{width:300}}>{item.name}</h3>
          <p style={{width:300}}>{item.brewery_type}</p>
          <p style={{width:300}}>{item.city}</p>
          <p style={{width:300}}>{item.phone}</p>
          </li>
          
        </div>

      ))}
    </>
  );
  
}

export default App
