
import { useDispatch,useSelector } from "react-redux";
import { addToCart,decrementQuantity, removeFromCart } from "../../redux/reducers/cart-slice";
const IncDecButton = ({product}) => {
  const dispatch = useDispatch()
  const item = useSelector(state=>state.cart.items.find(item=>item.id==product.id))


  const handleIncrement = () => {
    if(item){
      item.quantity < 10 && dispatch(addToCart(item));
    }else{
     
      dispatch(addToCart(product))
    }
  };
  const handleDecrement = () => { 
   if(item){
      if(item.quantity>0){
        dispatch(decrementQuantity(item));
      }else{
        
        dispatch(removeFromCart(item));
      }
   }
  };

  return (
          <div className="flex flex-row items-center gap-3">
        <button 
          onClick={handleDecrement}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-colors">
          -
        </button>
        <span className="w-6 text-center font-semibold text-gray-900">{item? item.quantity : 0}</span>
        <button 
          onClick={ handleIncrement}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-colors">
          +
        </button>
      </div>
  );
}
export default IncDecButton;