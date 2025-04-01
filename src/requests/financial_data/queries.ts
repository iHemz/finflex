import { FinancialData } from "@/requests/financial_data/types";
import { get } from "@/utils/api";

export const getFinanceDetails = async () => {
  const url = `/financial_data`;
  const response = (await get<FinancialData>(url, {})) as FinancialData;

  return response;
};
