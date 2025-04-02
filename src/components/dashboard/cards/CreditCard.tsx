import { Plus } from "lucide-react";
import { withLoading } from "@/components/hoc/withLoading";
import { IntraLink } from "@/components/ui/IntraLink";
import { Credit } from "@/requests/financial_data/types";

function CreditCardComponent({ amount, cardNumber, expiryDate }: Partial<Credit>) {
  return (
    <section className="md:col-span-4 h-60 md:h-auto md:hidden lg:block credit-card relative">
      <div className="p-6 h-full flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="text-2xl font-semibold">
            ${amount?.toFixed(0)}
            <span className="text-lg font-normal opacity-70">.00</span>
          </div>
          <IntraLink icon={Plus} />
        </div>
        <div className="mt-auto">
          <div className="text-lg">{cardNumber}</div>
          <div className="flex justify-between items-center">
            <div className="text-sm opacity-70">{expiryDate}</div>
            <div className="text-2xl font-bold">VISA</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const CreditCard = withLoading(CreditCardComponent, "card");
