/* eslint-disable linebreak-style */
import React from 'react';

export const Budget = ({ budget, setBudget }) => {
  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  }

  const amountOfBudget = ['20-50 €', '50-100 €', 'let the champagne flow']

  return (
    <form>
      <h3>How much can you spend this evening?</h3>
      Budget:
      {amountOfBudget.map((group) => (
        <lable key={group}>
          <input
            className="allRadioButtons"
            type="radio"
            value={group}
            onChange={handleBudgetChange}
            checked={budget === group} />
          {group}
        </lable>
      ))}
    </form>
  )
};