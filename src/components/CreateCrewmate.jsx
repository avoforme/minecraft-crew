import { supabase } from '../client'
import { useState, useEffect } from 'react'

const CreateCrewmate = () => {
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

    const createPost = async (event) => {
        event.preventDefault();
        await supabase
        .from('crewmate')
        .insert({name: player.name, friendliness: player.friendliness, speed: player.speed})
        .select();
        window.location = "/create";
    };

    return (
        <div>
            <h1>Create a New player</h1>
            <img src="../public/mobs.webp" alt="React Logo" />

            <div>
                <form onSubmit={createPost}>
                    <label htmlFor="name">Name</label> <br />
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={player.name} 
                        onChange={handleChange} 
                    /><br /><br />

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
                    
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default CreateCrewmate;
