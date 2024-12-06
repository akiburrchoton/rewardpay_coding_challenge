import { Console } from 'console';
import { fetchData, calculateRevenue, calculateExpenses, calculateGrossProfitMargin, calculateNetProfitMargin, calculateWorkingCapitalRatio } from './calculate';
import { formattingCurrency, formattingPercentage } from './formatting';

// Fetch Data
const data = fetchData(); 

// Calculations
const revenue = calculateRevenue(data.data);

const expenses = calculateExpenses(data.data);

const grossProfitMargin = calculateGrossProfitMargin(data.data);

const netProfitMargin = calculateNetProfitMargin(data.data);

const workingCapitalRatio = calculateWorkingCapitalRatio(data.data);



// Display formatted results
console.log(`Revenue: ${formattingCurrency(revenue)}`);
console.log(`Expenses: ${formattingCurrency(expenses)}`);
console.log(`Gross Profit Margin: ${formattingPercentage(grossProfitMargin)}`);
console.log(`Net Profit Margin: ${formattingPercentage(netProfitMargin)}`);
console.log(`Working Capital Ratio: ${formattingPercentage(workingCapitalRatio)}`);