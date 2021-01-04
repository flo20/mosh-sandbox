import React,{useState} from 'react';

const Input = () => {
    const [update,setUpdate] = useState('')


    const handleChange = (e) => {
        setUpdate(e.target.value )
    }
    return (
        <div>
            Input
            <input onChange={handleChange} />
            <p>{update}</p>
        </div>
    );
}

export default Input;
