import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './infoPage.css';

const InfoPage = () => {
  const { id } = useParams();
  const [player, setplayer] = useState(null);

  useEffect(() => {
    const fetchplayer = async () => {
      const { data } = await supabase
        .from('crewmate')
        .select()
        .eq('id', id)
        .single();

      setplayer(data);
    };
    fetchplayer();
  }, [id]);

  if (!player) {
    return <h2>Loading player information...</h2>;
  }

  return (
    <div>
        <h1>Info page</h1>
      <h2 className="name">{player.name}</h2>
      <h3 className="friendliness">
        {player.friendliness ? 'Friendly' : 'Not Friendly'}
      </h3>
      <p className="speed">Speed: {player.speed}</p>
    </div>
  );
};

export default InfoPage;
