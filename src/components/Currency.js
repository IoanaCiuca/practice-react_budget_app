import React, { useState } from 'react';
import './Currency.css';

const Currency = (props) => {
    const [ setName] = useState('');

    return (
        <div className='alert alert-info'>
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                <option defaultValue>Choose...</option>
                <option value="Dollar" name="dollar">$ Dollar</option>
                <option value="Pound" name="pound">£ Pound</option>
                <option value="Euro" name="euro">€ Euro</option>
                <option value="Ruppee" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;
