import { Link } from "react-router-dom";

const Card = ({ postData }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <img src={postData?.image} alt="Sorry" />
                    <h2 className="card-title font-bold text-2xl">{postData.title}</h2>
                    <p className="pt-2 font-extrabold" > {postData.price} </p>
                    <div className="card-actions justify-end">
                        <Link to={`/blog/${postData.id}`} >
                            <button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card