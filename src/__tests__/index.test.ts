import { calculateRevenue, calculateExpenses, calculateGrossProfitMargin, calculateNetProfitMargin, calculateWorkingCapitalRatio } from '../calculate';  // Adjust the path if needed
import { AccountData, Data } from '../interfaces';  // Importing interfaces

describe('Revenue Calculation', () => {
  it('should calculate the revenue and expense correctly', () => {
    const mockData: AccountData[] = [
        // Revenue
        { account_category: 'revenue', total_value: 1000, account_code: '', account_currency: '', account_identifier: '', account_status: '', value_type: '', account_name: '', account_type: '', account_type_bank: '', system_account: ''},
        { account_category: 'revenue', total_value: 2000, account_code: '', account_currency: '', account_identifier: '', account_status: '', value_type: '', account_name: '', account_type: '', account_type_bank: '', system_account: ''},
        
        // Expense
        { account_category: 'expense', total_value: 1000, account_code: '', account_currency: '', account_identifier: '', account_status: '', value_type: '', account_name: '', account_type: '', account_type_bank: '', system_account: ''},
        { account_category: 'expense', total_value: 2000, account_code: '', account_currency: '', account_identifier: '', account_status: '', value_type: '', account_name: '', account_type: '', account_type_bank: '', system_account: ''},
        
        // Gross Profit 
        { account_category: 'sales', total_value: 4000, account_code: '', account_currency: '', account_identifier: '', account_status: '', value_type: 'debit', account_name: '', account_type: 'sales', account_type_bank: '', system_account: ''},
        { account_category: 'sales', total_value: 5000, account_code: '', account_currency: '', account_identifier: '', account_status: '', value_type: 'debit', account_name: '', account_type: 'sales', account_type_bank: '', system_account: ''},   

        // Net Profit
        { account_category: 'revenue', total_value: 7000, account_code: '', account_currency: '', account_identifier: '', account_status: '', value_type: '', account_name: '', account_type: '', account_type_bank: '', system_account: ''},
        { account_category: 'expense', total_value: 3000, account_code: '', account_currency: '', account_identifier: '', account_status: '', value_type: '', account_name: '', account_type: '', account_type_bank: '', system_account: ''},
        
         // Assets
        { account_category: 'assets', total_value: 5000, account_code: '', account_currency: '', account_identifier: '', account_status: '', value_type: 'debit', account_name: '', account_type: 'current', account_type_bank: '', system_account: '' },
        { account_category: 'assets', total_value: 3000, account_code: '', account_currency: '', account_identifier: '', account_status: '', value_type: 'debit', account_name: '', account_type: 'bank', account_type_bank: '', system_account: '' },
        { account_category: 'assets', total_value: 2000, account_code: '', account_currency: '', account_identifier: '', account_status: '', value_type: 'credit', account_name: '', account_type: 'current_accounts_receivable', account_type_bank: '', system_account: '' },

        // Liabilities
        { account_category: 'liability', total_value: 2000, account_code: '', account_currency: '', account_identifier: '', account_status: '', value_type: 'credit', account_name: '', account_type: 'current', account_type_bank: '', system_account: '' },
        { account_category: 'liability', total_value: 1000, account_code: '', account_currency: '', account_identifier: '', account_status: '', value_type: 'credit', account_name: '', account_type: 'current_accounts_payable', account_type_bank: '', system_account: '' },
        { account_category: 'liability', total_value: 500, account_code: '', account_currency: '', account_identifier: '', account_status: '', value_type: 'debit', account_name: '', account_type: 'current', account_type_bank: '', system_account: '' },
    ];
    
    // Testing Revenue
    var revenue = calculateRevenue(mockData);
    expect(revenue).toBe(10000);  // 1000 + 2000 + 7000

    // Testing Expense
    const expense = calculateExpenses(mockData);
    expect(expense).toBe(6000);  // 1000 + 2000 + 3000

    // Testing Gross Profit Margin
    const grossProfitMargin = calculateGrossProfitMargin(mockData);
    expect(grossProfitMargin).toBe(90); // Expected GPM: ((4000 + 5000) / 10000) * 100 = 90

    // Testing Net Profit Margin
    const netProfitMargin = calculateNetProfitMargin(mockData);

    // Expected NPM: ((10000 - 6000) / 10000) * 100 = 40
    expect(netProfitMargin).toBe(40);

    // Work
    const workingCapitalRatio = calculateWorkingCapitalRatio(mockData);

    // Assets:
    // (5000 + 3000) - 2000 = 6000
    // Liabilities:
    // (2000 + 1000) - 500 = 2500
    // Working Capital Ratio = 6000 / 2500 = 2.4
    expect(workingCapitalRatio).toBe(2.4);
  });
});
