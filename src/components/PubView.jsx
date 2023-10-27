import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const PubView = () => {
    const params = useParams();
    const [list, setList] = useState(null);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [brewery_type, setBrewery_type] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [phone, setPhone] = useState('');
    const [state, setState] = useState('');
  
    const [website, setWebsite] = useState('');


    
  useEffect(()=>{
    const getStore = async () =>{
      const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_ids=${params.id}`)
      const json = await response.json();
  
    
      setName(json[0].name);
      setAddress(json[0].address_1);
      setBrewery_type(json[0].brewery_type);
      setCity(json[0].city);
      setCountry(json[0].country);
      setLongitude(json[0].longitude);
      setLatitude(json[0].latitude);
      setPhone(json[0].phone);
      setWebsite(json[0].setWebsite);
      setState(json[0].state);
      
      
     
  
    }

    getStore().catch(console.error);
  
  },[]);

 

    return (
    <>
    
    <table>
  <tr>
    <th>Variable</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>name</td>
    <td>{name}</td>
  </tr>
  <tr>
    <td>address</td>
    <td>{address}</td>
  </tr>
  <tr>
    <td>brewery_type</td>
    <td>{brewery_type}</td>
  </tr>
  <tr>
    <td>city</td>
    <td>{city}</td>
  </tr>
  <tr>
    <td>country</td>
    <td>{country}</td>
  </tr>
  <tr>
    <td>longitude</td>
    <td>{longitude}</td>
  </tr>
  <tr>
    <td>latitude</td>
    <td>{latitude}</td>
  </tr>
  <tr>
    <td>phone</td>
    <td>{phone}</td>
  </tr>
  <tr>
    <td>state</td>
    <td>{state}</td>
  </tr>
  <tr>
    <td>website</td>
    <td>{website}</td>
  </tr>
</table>

{console.log(longitude)}

<MapContainer style={{height: 400}} center={[32.7, -111.7]} zoom={15} scrollWheelZoom={false}>
  <Marker 
      
          position={[32.7, -111.7]}/>
  
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
</MapContainer>
    
  
    </>
    );
  };
  
  export default PubView;