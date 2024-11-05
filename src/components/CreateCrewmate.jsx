import { supabase } from '../client'
import { useState, useEffect } from 'react'

const CreateCrewmate = () => {
    const [crewmate, setCrewmate] = useState({
        name: "",
        friendliness: false,
        speed: 0
    });

    const handleChange = (event) => {
        const { name, value, type } = event.target;
        setCrewmate((prev) => ({
            ...prev,
            [name]: type === 'number' ? parseInt(value) : type === 'radio' ? value === 'true' : value,
        }));
    };

    const createPost = async (event) => {
        event.preventDefault();
        await supabase
        .from('crewmate')
        .insert({name: crewmate.name, friendliness: crewmate.friendliness, speed: crewmate.speed})
        .select();
        window.location = "/create";
    };

    return (
        <div>
            <h1>Create a New Crewmate</h1>
            <img src="../public/mobs.webp" alt="React Logo" />

            <div>
                <form onSubmit={createPost}>
                    <label htmlFor="name">Name</label> <br />
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={crewmate.name} 
                        onChange={handleChange} 
                    /><br /><br />

                    <label>Friendliness</label><br />
                    <label>
                        <input
                            type="radio"
                            name="friendliness"
                            value="true"
                            checked={crewmate.friendliness === true}
                            onChange={handleChange}
                        />
                        True
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="friendliness"
                            value="false"
                            checked={crewmate.friendliness === false}
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
                        value={crewmate.speed} 
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
