interface Transaction {
  id: string;
  merchant: string;
  logo: string;
  date: Date;
  time: string;
  amount: string;
  isIncome: boolean;
}

interface Category {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

type Month =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";

interface BudgetInfo {
  name: Month;
  income: number;
  spent: number;
  scheduled: number;
  savings: number;
}

export interface Finance {
  amount: number;
  change: number;
}

export interface TotalBal extends Finance {
  changeAmount: number;
}
export interface Credit extends Pick<Finance, "amount"> {
  cardNumber: string;
  expiryDate: string;
}

export type Transactions = Array<Transaction>;
export type Categories = Array<Category>;
export type Months = Month[];
export type BudgetData = Array<BudgetInfo>;

type Budget = { monthly: BudgetData; totalBudget: number };
type SpendingMax = { total: number; categories: Categories };
type Goal = { current: number; target: number; percentage: number };

interface PerformanceData {
  name: Month;
  value: number;
}
interface Savings extends Pick<Finance, "amount"> {
  rate: number;
}

export type Performance = Array<PerformanceData>;

export type FinancialData = {
  totalBalance: TotalBal;
  income: Finance;
  expense: Finance;
  credit: Credit;
  budget: Budget;
  topSpending: SpendingMax;
  transactions: Transactions;
  performance: Performance;
  goal: Goal;
  savings: Savings;
};
