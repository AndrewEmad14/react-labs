import { useEffect, useState } from "react";
import ProductCard from "../components/product/product-card";
import Pagenation from "../components/product/pagenation";
import { Link } from "react-router";

const LIMIT = 5;

const Home = () => {
  const [products,setProducts] = useState([]);
  const [page,setPage] = useState(0);
  const skip = LIMIT*page;
  const handleNext = ()=>{LIMIT*(page+1) < products.length && setPage(n=> n+1)};
  const handlePrevious = ()=>{LIMIT*(page-1) >= 0 && setPage(n=> n-1)};
  useEffect(()=>{
      const fetchProducts = async()=>{
        const data = await fetch("https://dummyjson.com/products").then((response)=>{
          if(!response.ok){
            return <h1> server error</h1>
          }
          return response.json();
        })
        setProducts([...data.products]);
        
      }
      fetchProducts();
      
  },[])

  return (
    <div>
          <div className="flex flex-wrap gap-4 p-4 justify-center">
              {
                  products.map((product,index)=>{ 
                    if(index >= skip && index < skip+LIMIT){
                      return <Link key={product.id} to={`/products/${product.id}`}><ProductCard {...product}/></Link>
                    }
                })
              }

       
        </div>
        <div className="flex justify-center">
              <Pagenation page={page} handleNext={handleNext} handlePrevious={handlePrevious} />
        </div>
    </div>
 
     
  );
};

export default Home;