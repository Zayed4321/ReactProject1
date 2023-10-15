import { useEffect, useState } from "react"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import SLIDER from "../components/Slider/SLIDER"
import Card from "../components/Cards/Card"
import { Link } from 'react-router-dom'
import Loader from "../components/Loader/Loader"


const HOME = () => {

  const [count, setCount] = useState(0)

  function negCounter() {
    setCount(count - 1);
  };

  function posCounter() {
    setCount(count + 1);
  };

  const [product, setProduct] = useState([]);

  const [ loading, setLoading ] = useState(null);

  useEffect(() => {
    proFetch()
  }, []);

  const proFetch = async function () {
    setLoading(true)
    const items = await fetch("https://fakestoreapi.com/products");
    const allitems = await items.json();
    const trendingpro = allitems.slice(0, 6);
    setProduct(trendingpro);
    setLoading(false)
  };



  return (

    <div>
      <SLIDER />
      <section>
        <div className="container mx-auto">
          <SectionTitle Maintitle="Trending Products this Week" Subtitle="Keep Your Style In Line With Us" />

          {/* Using React Hooks like useState and UseEfect */}

          <h2 className="text-center text-2xl text-white"> Counter </h2>
          <div className="flex mt-3 mb-5 justify-center" >
            <button onClick={posCounter} className="bg-success px-3 text-white text-3xl" > + </button>
            <h1 className="mx-5 pt-2"> {count} </h1>
            <button onClick={negCounter} className="bg-success px-3 text-white text-3xl" > - </button>
          </div>

          <div>
            {
              loading? <Loader/> : <div className="flex flex-wrap col-span-6 justify-center space-x-4 space-y-3" >
              { 
                product.map(goods => <Card key={goods.id} postData={goods} />)
              }
  
            </div>
            }
          </div>

          <div className="flex justify-center pt-3">
            <Link to={"/blog"}>
              <button className="btn btn-primary px-10" > View More </button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}

export default HOME