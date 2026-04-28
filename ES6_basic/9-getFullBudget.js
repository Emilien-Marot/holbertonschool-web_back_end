import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function () {
      return `$${budget.income}`;
    },
    getIncomeInEuros: function () {
      return `${budget.income} euros`;
    },
  };

  return fullBudget;
}
