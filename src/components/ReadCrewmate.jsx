import { supabase } from '../client';
import { useState, useEffect } from 'react';
import Card from './Card';
const ReadCrewmate = () => {
    const [players, setplayers] = useState([]);

    useEffect(() => {
        const fetchplayers = async () => {
            const { data } = await supabase
                .from('crewmate')
                .select();
            
            // Set state of players
            setplayers(data);
        }
        fetchplayers();
    }, []);
    
    return (
        <div className="Readplayers">
            {
                players && players.length > 0 ?
                players.map((player, index) => 
                    <Card 
                        key={player.id} 
                        id={player.id} 
                        name={player.name} 
                        friendliness={player.friendliness ? "Friendly" : "Not Friendly"} 
                        speed={player.speed} 
                    />
                ) : <h2>{'No players Yet'}</h2>
            }
        </div>  
    );
}

export default ReadCrewmate;
