// Function to format currency values
export const formattingCurrency = (value: number): string => {
    return `$${Math.round(value).toLocaleString()}`;
  };
  
  // Function to format percentages
  export const formattingPercentage = (value: number): string => {
    return `${Math.floor(value)}%`;
  };