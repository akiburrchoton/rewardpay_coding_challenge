import data from '../data.json';
import { AccountData, Data } from './interfaces';  // Importing interfaces


// Function to fetch the JSON data
export const fetchData = (): Data => {
  return data;
};


// 1. Function to calculate revenue
export const calculateRevenue = ( data: AccountData[]) : number => {
  // Filter all data where account_category is 'revenue'
  const revenueFilteredData: AccountData[] = data.filter(item => item.account_category === 'revenue');

  // Sum up the total_value of the filtered data for revenue 
  return revenueFilteredData.reduce((total, item) => total + item.total_value, 0);
}


// 2. Function to calculate expenses

export const calculateExpenses = (data: AccountData[]): number => {
  // Filter all data where account_category is 'expense'
  const expensesFilteredData = data.filter(item => item.account_category === 'expense');
  
  // Sum up the total_value of the filtered data for expense
  return expensesFilteredData.reduce((total, item) => total + item.total_value, 0);
};


// 3. Function to calculate net Gross Profit Margin
export const calculateGrossProfitMargin = (data: AccountData[]): number => {
  // Filter all data where account_type is 'sales' and value_type is 'debit'
  const salesDebitData: AccountData[] = data.filter(item => item.account_type === 'sales' && item.value_type === 'debit');
  
  // Sum up the total_value of filtered data for sales and debit
  const totalSalesDebit = salesDebitData.reduce((total, item) => total + item.total_value, 0);
  
  const revenue = calculateRevenue(data);

  const grossProfitMargin = (totalSalesDebit / revenue) * 100;

  return grossProfitMargin;
};


// 4. Function to calculate net Net Profit Margin
export const calculateNetProfitMargin  = (data: AccountData[]): number => {
  const expense = calculateExpenses(data);
  const revenue = calculateRevenue(data);

  const netProfit = revenue - expense;

  if (revenue === 0) return 0; 

  const netProfitMargin = (netProfit / revenue) * 100;

  return netProfitMargin;
};


// 5. Function to calculate Working Capital Ratio
export const calculateWorkingCapitalRatio = (data: AccountData[]): number => {
  // Calculate Assets
  const assetsDebit = data.filter(item => 
    item.account_category === 'assets' && item.value_type === 'debit' && 
    ['current', 'bank', 'current_accounts_receivable'].includes(item.account_type)
  );
  const assetsCredit = data.filter(item => 
    item.account_category === 'assets' && item.value_type === 'credit' && 
    ['current', 'bank', 'current_accounts_receivable'].includes(item.account_type)
  );

  const assets = assetsDebit.reduce((total, item) => total + item.total_value, 0) - 
                 assetsCredit.reduce((total, item) => total + item.total_value, 0);


  // Calculate Liabilities
  const liabilitiesDebit = data.filter(item => 
    item.account_category === 'liability' && item.value_type === 'debit' && 
    ['current', 'current_accounts_payable'].includes(item.account_type)
  );
  const liabilitiesCredit = data.filter(item => 
    item.account_category === 'liability' && item.value_type === 'credit' && 
    ['current', 'current_accounts_payable'].includes(item.account_type)
  );

  const liabilities = liabilitiesCredit.reduce((total, item) => total + item.total_value, 0) - 
                      liabilitiesDebit.reduce((total, item) => total + item.total_value, 0);
                 

  if (liabilities === 0) return 0;

  return assets / liabilities;
};


