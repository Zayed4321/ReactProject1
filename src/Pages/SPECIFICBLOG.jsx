import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


const SPECIFICBLOG = () => {

    const { id } = useParams();

    const [blog1, setBlog1] = useState([]);

    useEffect(() => {
        fetchOne(id)
    }, []);

    const fetchOne = async (receiveId) => {
        const dataOne = await fetch(`https://fakestoreapi.com/products/${receiveId}`);
        const allData = await dataOne.json();
        setBlog1(allData);
    };

    console.log(blog1);

    return (
        <div className="container mx-auto" >
            <div className="card lg:card-side bg-base-100 shadow-xl py-5">
                <figure><img className="w-full h-full" src={blog1.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white font-bold">{ blog1.title }</h2>
                    <p className="text-xl" > {blog1.description} </p>
                    <div className="flex" >
                    <p> Segment: {blog1.category} </p>
                    <p> Product Rating: {blog1?.rating?.rate} </p>
                    </div>
                    <p> Product Price: $ {blog1.price} </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add TO Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SPECIFICBLOG