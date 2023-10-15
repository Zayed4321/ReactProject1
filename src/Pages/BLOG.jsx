import { useEffect, useState } from "react"
import Card from "../components/Cards/Card";


const BLOG = () => {

  const [ product, setProduct ] = useState([]);

  useEffect(() => {
    proFetch() 
  }, []);
  
  const proFetch = async function (){
    const items = await fetch("https://fakestoreapi.com/products");
    const allitems = await items.json();
    setProduct(allitems); 
  };


  return (
    <div className="flex flex-wrap gap-3" >
      {
        product.map( goods => <Card key={goods.id} postData = {goods} /> )
      }

    </div>
  )
}

export default BLOG