import { supabase } from '../client'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";


const EditCrewmate = () => {
    let params = useParams();
    let id = params.id;
    const [player, setplayer] = useState({
        name: "",
        friendliness: false,
        speed: 0
    });

    const handleChange = (event) => {
        const { name, value, type } = event.target;
        setplayer((prev) => ({
            ...prev,
            [name]: type === 'number' ? parseInt(value) : type === 'radio' ? value === 'true' : value,
        }));
    };

    const updateplayer = async (event) => {
        event.preventDefault();
        await supabase
            .from('crewmate')
            .update({name: player.name, friendliness: player.friendliness, speed: player.speed})
            .eq('id', id);
        
        window.location = "/read";
    }

    const deleteplayer = async (event) =>{
        event.preventDefault();
        await supabase
            .from('crewmate')
            .delete()
            .eq('id', id);
        window.location = "/read";

    }

    return (
        <div>
            <h1>Edit a player</h1>
            <h3>Fill out the form to edit a player</h3>
            <div>
                <form>
                    <label for="name">Name</label> <br />
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={player.name} 
                        onChange={handleChange} 
                    />
                    <br />

                    <label>Friendliness</label><br />
                    <label>
                        <input
                            type="radio"
                            name="friendliness"
                            value="true"
                            checked={player.friendliness === true}
                            onChange={handleChange}
                        />
                        True
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="friendliness"
                            value="false"
                            checked={player.friendliness === false}
                            onChange={handleChange}
                        />
                        False
                    </label>
                    <br /><br />

                    <label htmlFor="speed">Speed</label><br />
                    <input 
                        type="number" 
                        id="speed" 
                        name="speed" 
                        value={player.speed} 
                        onChange={handleChange} 
                    />
                    <br /><br />
                    
                    <input type="submit" value="Submit" onClick={updateplayer}/>
                    <button className="deleteButton" onClick={deleteplayer}>Delete</button>
                </form>
            </div>
        </div>
    );
};

export default EditCrewmate;
