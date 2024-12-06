import { Console } from 'console';
import { fetchData, calculateRevenue, calculateExpenses, calculateGrossProfitMargin, calculateNetProfitMargin, calculateWorkingCapitalRatio } from './calculate';

// Fetch Data
const data = fetchData(); 

// Calculations
const revenue = calculateRevenue(data.data);

const expenses = calculateExpenses(data.data);

const grossProfitMargin = calculateGrossProfitMargin(data.data);

const netProfitMargin = calculateNetProfitMargin(data.data);

const workingCapitalRatio = calculateWorkingCapitalRatio(data.data);