import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/cart-slice";
import IncDecButton from "../components/product/incdec-button";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!cartItems.length) return (
    <div className="flex flex-col items-center justify-center h-64 text-gray-400">
      <p className="text-xl">Your cart is empty</p>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Your Cart</h1>

      <ul className="flex flex-col gap-4">
        {cartItems.map(item => (
          <li key={item.id} className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />

            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-800 truncate">{item.title}</p>
              <p className="text-sm text-gray-400">${item.price} each</p>
            </div>

            <div className="flex items-center gap-3">
              <IncDecButton product={item} />
              <button
                onClick={() => dispatch(removeFromCart(item))}
                className="text-red-400 hover:text-red-600 text-sm transition-colors"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-between items-center border-t border-gray-200 pt-4">
        <span className="text-gray-500">Total</span>
        <span className="text-xl font-semibold text-gray-800">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Cart;