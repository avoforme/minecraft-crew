import React, { useState } from 'react';
import './Card.css';
import more from './more.png';
import { Link } from 'react-router-dom';
import { supabase } from '../client';

const Card = (props) => {
  const [betCount, setBetCount] = useState(0);

  const updateCount = async (event) => {
    event.preventDefault();
    await supabase
      .from('Crewmates')
      .update({ betCount: betCount + 1 })
      .eq('id', props.id);
    setBetCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="Card">
      {/* <Link to={'edit/' + props.id}>
        <img className="moreButton" alt="edit button" src={more} />
      </Link>
      <h2 className="name">{props.name}</h2>
      <h3 className="friendliness">
        {props.friendliness ? 'Friendly' : 'Not Friendly'}
      </h3>
      <p className="speed">Speed: {props.speed}</p>
      <button className="betButton" onClick={updateCount}>
        👍 Bet Count: {betCount}
      </button> */}
      hi
    </div>
  );
};

export default Card;
