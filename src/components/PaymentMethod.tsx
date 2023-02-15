import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

export function PaymentMethod() {
  return (
    <div className="bg-base-card p-10 rounded-md">
      <div className="flex gap-2 items-center mb-8">
        <CurrencyDollar size={22} color="#8047F8" />
        <div>
          <p className="text-base-subtitle flex">Payment</p>
          <p className="text-base-text text-sm">
            Payment is made on delivery. Choose the way you wish to pay.
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="bg-base-button p-4 text-base-text text-xs uppercase flex gap-3 rounded-md flex-1">
          <Bank size={16} color="#8047F8" />
          Credit Card
        </button>
        <button className="bg-base-button p-4 text-base-text text-xs uppercase flex gap-3 rounded-md flex-1">
          <CreditCard size={16} color="#8047F8" />
          Debit Card
        </button>
        <button className="bg-base-button p-4 text-base-text text-xs uppercase flex gap-3 rounded-md flex-1">
          <Money size={16} color="#8047F8" />
          Cash
        </button>
      </div>
    </div>
  );
}
