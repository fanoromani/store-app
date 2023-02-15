import { MapPinLine } from "phosphor-react";

export function PaymentAddress() {
  return (
    <div className="bg-base-card p-10 rounded-md">
      <div className="flex gap-2 items-center mb-8">
        <MapPinLine size={22} color="#C47F17" />
        <div>
          <p className="text-base-subtitle flex">Shipping Address</p>
          <p className="text-base-text text-sm">
            Inform the address to which you wish to receive your items
          </p>
        </div>
      </div>
      <form
        className="text-sm text-base-label gap-4 flex flex-col"
        action="submit"
      >
        <input
          className="bg-base-input p-3 block w-1/3"
          type="text"
          placeholder="ZIP"
        />
        <input
          className="bg-base-input p-3 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-4 relative">
          <input
            className="bg-base-input p-3"
            type="tel"
            placeholder="Number"
          />
          <input
            className="bg-base-input p-3 w-full"
            type="text"
            placeholder="Complement"
          />
          <p className="absolute right-3 top-3 text-base-label italic">
            Optional
          </p>
        </div>
        <div className="flex gap-4">
          <input
            className="bg-base-input p-3"
            type="text"
            placeholder="Avenue"
          />
          <input
            className="bg-base-input p-3 flex-1"
            type="text"
            placeholder="City"
          />
          <input
            className="bg-base-input p-3 w-1/6"
            type="text"
            placeholder="State"
          />
        </div>
      </form>
    </div>
  );
}
