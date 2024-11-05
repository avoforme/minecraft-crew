import { supabase } from '../client';
import { useState, useEffect } from 'react';

const ReadCrewmate = () => {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        const fetchCrewmates = async () => {
            const { data } = await supabase
                .from('crewmate')
                .select();
            
            // Set state of crewmates
            setCrewmates(data);
        }
        fetchCrewmates();
    }, []);
    
    return (
        <div className="ReadCrewmates">
            {
                crewmates && crewmates.length > 0 ?
                crewmates.map((crewmate, index) => 
                    <Card 
                        key={crewmate.id} 
                        id={crewmate.id} 
                        name={crewmate.name} 
                        friendliness={crewmate.friendliness ? "Friendly" : "Not Friendly"} 
                        speed={crewmate.speed} 
                    />
                ) : <h2>{'No Crewmates Yet 😞'}</h2>
            }
        </div>  
    );
}

export default ReadCrewmate;
