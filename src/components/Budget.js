import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if(newBudget >= 20000) {
            alert("The value of the new budget cannot exceed £200000");
            setNewBudget(budget);
            return;
        }
        if(newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending.");
            setNewBudget(budget);
            return;
        }
        setNewBudget(event.target.value);
    }
    return (
    <div className='alert alert-secondary'>
        <span>Budget: £</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </div>
    );
};
export default Budget;
