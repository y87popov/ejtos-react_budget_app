import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget,dispatch,expenses,currency } = useContext(AppContext);

	const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

		
		if(val<totalExpenses) {
			alert("You cannot reduce the budget value lower than the spending!");
           
            }
            if(val>20000) {
                val=20000;
                alert("The value cannot exceed remaining funds! "+ currency + (val-totalExpenses));
                
		} else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
	}
	
	return (
		<div className='alert alert-secondary'>
            Budget {currency}
			<input type="number" step="10" value={budget} onInput={(event)=>changeBudget(event.target.value)}></input>
		</div>
	);
};

export default Budget;