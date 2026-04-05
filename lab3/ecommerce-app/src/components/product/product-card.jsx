import { useNavigate } from "react-router"
import { useDispatch} from 'react-redux'
import { addToCart } from "../../store/cart-slice"

const ProductCard = (product) => {
  const { title, price, description, rating, stock, thumbnail, id } = product
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/products/${product.id}`)}  className="rounded-lg shadow-md p-4 bg-white flex flex-col gap-3 max-w-sm">

      {/* Image + stock badge container */}
      <div className="relative">
        <img className="w-full rounded-md object-cover" src={thumbnail} alt="product" />
        {stock
          ? <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">In Stock</span>
          : <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">Out of Stock</span>
        }
      </div>

      <h2 className="font-semibold text-gray-900 text-lg">{title}</h2>
      <p className="text-gray-500 text-sm line-clamp-2">{description}</p>
      <p className="text-blue-600 font-bold text-xl">${price}</p>
      <p className="text-yellow-500 text-sm">⭐ {rating}</p>

    
       <button onClick={(e)=>{e.stopPropagation();dispatch(addToCart(product))}} className="bg-blue-500 text-white py-2 w-full rounded-lg hover:bg-blue-600 transition-colors">Add to cart</button> 
     
    </div>
  )
}
export default ProductCard
