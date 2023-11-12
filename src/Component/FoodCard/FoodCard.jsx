/* eslint-disable react/prop-types */


const FoodCard = ({ item }) => {

    const { image, price, name, recipe } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food Image" /></figure>
            <p className="absolute top-0 right-0 bg-slate-800 text-white p-1 rounded-lg mr-4 mt-4">${price}</p>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn bg-[#E8E8E8] hover:bg-[#111827] text-[#BB8506] border-0 border-b-4 hover:border-b-4 hover:border-b-[#BB8506] border-b-[#BB8506]">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;