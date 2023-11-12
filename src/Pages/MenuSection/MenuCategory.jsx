/* eslint-disable react/prop-types */
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items }) => {
    return (
        <div className="grid md:grid-cols-2 mb-12 mt-10 md:w-3/4 mx-auto space-y-4 gap-7">
        { 
            items?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
    </div>
    );
};

export default MenuCategory;