
import { useSelector } from 'react-redux'
const Badge = () => {
  const cartItems = useSelector(state => state.cart.items)
  const totalItems = () => {
    let sum = 0
    
    if (cartItems.length) {
      cartItems.forEach(element => {
        sum += element.quantity
      });
    }

    return sum;
  }

  return (
    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">{totalItems()}</span>
  )
}

export default Badge