import React from 'react';
import './house.scss';

const House = ({...props}) => (
  <div className="houses">
    <div className="houses_img-container" >
      <img className=
  "houses_img" src={props.img} />
    </div>
    <div className="houses_address">
      <p> Property name: {props.name} </p>
      <p> Address: {props.address} </p>
      <p> City: {props.city} </p>
      <p> State: {props.state} </p>
      <button className="houses_btn-delete"onClick={ _ => props.removeHouse(props.id)}> X </button>
    </div>
    <div className="houses_payment">
      <p> Monthly Mortgage: {props.mortgage}</p>
      <p> Desired Rent: {props.rent}</p>
    </div>
  </div>
)

export default House;
