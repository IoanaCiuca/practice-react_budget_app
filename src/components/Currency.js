import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Currency.css';

const Currency = () => {
    const options = [
        { label: '£ Pound', value: '£' },
        { label: '$ Dollar', value: '$' },
        { label: '€ Euro', value: '€' },
        { label: '₹ Ruppee', value: '₹' },
      ];
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    };

    return (
            <div className='alert alert-info'>
              <label>
                Currency 
                <select id="currencySelect" name="currency" onChange={event=>changeCurrency(event.target.value)} className = 'customSelect'>
                {
                    options.map((option) => (
                        <option value={option.value} name={option.value}>{option.label}</option>
                    ))
                }
                </select>
              </label>
            </div>
          );
};

export default Currency;
