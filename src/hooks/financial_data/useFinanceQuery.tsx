import { InvalidateQueryFilters, useQuery } from "@tanstack/react-query";
import { getFinanceDetails } from "@/requests/financial_data/queries";
import { FinancialData } from "@/requests/financial_data/types";
import { queryClient } from "@/utils/reactQuery";

const cacheTime = 60 * 1000; // 1 minute
const refetchTime = 5 * cacheTime; // 5 minutes
const commonQueryActions = (queryKey: InvalidateQueryFilters["queryKey"]) => {
  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey });
  };
  const refetch = () => {
    queryClient.refetchQueries({ queryKey });
  };
  return { invalidate, refetch };
};

export const useFinanceQuery = () => {
  const queryKey = ["financial_data"];

  const queryResult = useQuery<FinancialData, Error>({
    queryKey,
    queryFn: () => getFinanceDetails(),
    staleTime: cacheTime,
    refetchInterval: refetchTime,
  });

  return { ...queryResult, ...commonQueryActions(queryKey) };
};
