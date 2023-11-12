/* eslint-disable react/prop-types */
import FoodCard from "../../../Component/FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-12  gap-12">
        { 
            items?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
        }
    </div>
    );
};

export default OrderTab;