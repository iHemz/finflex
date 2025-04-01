import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";
import {
  BudgetData,
  Categories,
  FinancialData,
  Months,
  Performance,
  Transactions,
} from "@/requests/financial_data/types";

export async function GET() {
  // Generate consistent data based on a seed
  faker.seed(123);

  // Create transaction history (last 5 transactions)
  const transactions: Transactions = Array(5)
    .fill(null)
    .map(() => {
      const company = faker.company.name();
      const isIncome = faker.datatype.boolean({ probability: 0.3 });
      return {
        id: faker.string.uuid(),
        merchant: company,
        logo: faker.image.urlLoremFlickr({ category: "business" }),
        date: faker.date.recent({ days: 10 }),
        time: faker.date.recent().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        amount: isIncome
          ? `+$${faker.finance.amount({ min: 50, max: 6000, dec: 2 })}`
          : `-$${faker.finance.amount({ min: 10, max: 500, dec: 2 })}`,
        isIncome,
      };
    });

  // Create spending categories
  const categories: Categories = [
    { name: "Auto & Transport", value: 400, percentage: 40, color: "#00B2FF" },
    { name: "Food", value: 250, percentage: 25, color: "#FFFF00" },
    { name: "Clothes", value: 200, percentage: 20, color: "#00FFDF" },
    { name: "Other", value: 150, percentage: 15, color: "#FFFFFF" },
  ];

  // Create monthly budget data
  const months: Months = ["Jun", "Jul", "Aug", "Sep", "Oct"];
  const performance_months: Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const budgetData: BudgetData = months.map((month) => {
    return {
      name: month,
      income: parseInt(faker.finance.amount({ min: 3000, max: 5000, dec: 0 })),
      spent: parseInt(faker.finance.amount({ min: 1500, max: 3000, dec: 0 })),
      scheduled: parseInt(faker.finance.amount({ min: 500, max: 1500, dec: 0 })),
      savings: parseInt(faker.finance.amount({ min: 200, max: 1000, dec: 0 })),
    };
  });

  const performance: Performance = performance_months.map((month) => ({
    name: month,
    value: parseInt(faker.finance.amount({ min: 3000, max: 6000, dec: 0 })),
  }));

  // Generate the main financial data
  const financialData: FinancialData = {
    totalBalance: {
      amount: 25230.0,
      change: 10,
      changeAmount: 2780.0,
    },
    income: {
      amount: 2259.7,
      change: 10,
    },
    expense: {
      amount: 1589.65,
      change: 12,
    },
    credit: {
      amount: 4568.0,
      cardNumber: "*8967",
      expiryDate: "05/27",
    },
    budget: {
      monthly: budgetData,
      totalBudget: 4647.0,
    },
    topSpending: {
      total: 789,
      categories,
    },
    transactions,
    performance,
    goal: {
      current: 1500,
      target: 3000,
      percentage: 50,
    },
    savings: {
      amount: 1678.0,
      rate: 8.5,
    },
  };

  return NextResponse.json(financialData);
}
