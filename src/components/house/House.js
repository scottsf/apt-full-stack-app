import React from 'react';

const House = ({name, address, city, state, id, removeHouse}) => (
  <div>
    <p> {name} </p>
    <p> {address} </p>
    <p> {city} </p>
    <p> {state} </p>
    <button onClick={ _ => removeHouse(id)}> Delete </button>
  </div>
)

export default House;
