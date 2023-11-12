/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title }) => {


    return (
        <div >
            <div className="grid md:grid-cols-2 mb-12 mt-10 md:w-3/4 mx-auto space-y-4 gap-7">
                {
                    items?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }

            </div>
            <div className="flex justify-center">
                {
                    title && <Link to={`/order/${title}`}>
                    <button className='btn btn-outline   text-black hover:text-white hover:bg-none border-0 border-black mb-5 border-b-4'>Order Now Your Favourite Food</button>
                </Link>
                }
            </div>
        </div>
    );
};

export default MenuCategory;
