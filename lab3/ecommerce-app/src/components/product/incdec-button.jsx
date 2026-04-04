import { use } from "react";

const IncDecButton = ({quantity,handleQuantity}) => {

  const handleIncrement = () => {quantity < 10 && handleQuantity(quantity + 1)};
  const handleDecrement = () => { quantity > 1 && handleQuantity(quantity - 1)};

  return (
          <div className="flex flex-row items-center gap-3">
        <button 
          onClick={handleIncrement}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-colors">
          +
        </button>
        <span className="w-6 text-center font-semibold text-gray-900">{quantity}</span>
        <button 
          onClick={handleDecrement}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-colors">
          -
        </button>
      </div>
  );
}
export default IncDecButton;