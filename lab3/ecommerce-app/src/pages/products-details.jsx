import { use, useState, useEffect } from "react";
import { Link } from "react-router";
import { useParams } from "react-router"
import IncDecButton from "../components/product/incdec-button";
const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await fetch(`https://dummyjson.com/products/${id}`).then((response) => {
        if (!response.ok) {
          return <h1> server error</h1>
        }
        return response.json();
      })
      console.log(data);
      setProductDetails(data);
      setIsLoading(false);
    }
    fetchProductDetails();

  }, [id])

  const handleQuantity = (e) => setQuantity(e); 


  if (isLoading) return <h1>Loading...</h1>
  return (

    <div className="max-w-5xl mx-auto p-8">
      <div className="flex flex-row gap-8">
        {/* Left — images */}
        <div className="flex flex-col gap-3 w-1/2">
          <img className="w-full rounded-lg object-cover" src={productDetails.images.at(0)} alt="main image" />
          <div className="flex flex-row gap-2">
            <img className="w-1/4 rounded-md object-cover cursor-pointer opacity-70 hover:opacity-100 transition-opacity" src={productDetails.thumbnail} alt="thumbnail" />
            <img className="w-1/4 rounded-md object-cover cursor-pointer opacity-70 hover:opacity-100 transition-opacity" src={productDetails.thumbnail} alt="thumbnail" />
            <img className="w-1/4 rounded-md object-cover cursor-pointer opacity-70 hover:opacity-100 transition-opacity" src={productDetails.thumbnail} alt="thumbnail" />
            <img className="w-1/4 rounded-md object-cover cursor-pointer opacity-70 hover:opacity-100 transition-opacity" src={productDetails.thumbnail} alt="thumbnail" />
          </div>
        </div>

        {/* Right — details */}
        <div className="flex flex-col gap-4 w-1/2">
          <h1 className="text-2xl font-bold text-gray-900">{productDetails.title}</h1>
          <p className="text-gray-500 text-sm">{productDetails.description}</p>
          <p className="text-2xl font-semibold text-blue-600">${productDetails.price}</p>
          <p className="text-yellow-500">⭐ {productDetails.rating}</p>
          {productDetails.stock > 0
            ? <p className="text-green-600 font-medium">In Stock</p>
            : <p className="text-red-500 font-medium">Out of Stock</p>}
          <div className="flex flex-row gap-2 flex-wrap">
            {productDetails.tags.map(tag => (
              <p key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{tag}</p>
            ))}
          </div>
          <IncDecButton quantity={quantity} handleQuantity={handleQuantity}/>
          <div className="flex flex-row gap-3">
            <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">Add to cart</button>
            <Link to={`/cart`}  className="flex-1 bg-orange-700 text-center text-white py-3 rounded-lg hover:bg-orange-900 transition-colors">
            Buy now
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductDetails