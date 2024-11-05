import React, { useState } from 'react';
import './Card.css';
import more from './more.png';
import { Link } from 'react-router-dom';
import { supabase } from '../client';

const Card = (props) => {

  return (
    <div className="Card">
      <Link to={'/edit/' + props.id}>
        <img className="moreButton" alt="edit button" src={more} />
      </Link>
      <h2 className="name">{props.name}</h2>
      
      <Link to={'/moreInfo/' + props.id}>
        <button>More Info</button>
      </Link>
    </div>
  );
};

export default Card;
