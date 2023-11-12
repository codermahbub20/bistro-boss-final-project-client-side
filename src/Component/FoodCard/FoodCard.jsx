/* eslint-disable react/prop-types */


const FoodCard = ({ item }) => {

    const { image, price, name, recipe } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food Image" /></figure>
            <p>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;