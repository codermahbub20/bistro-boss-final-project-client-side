import { useEffect, useState } from "react";
import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {

    const [popularItems, setPopularItems] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularMenu = data.filter(item =>item.category === 'popular')
            setPopularItems(popularMenu)
        })
    },[])


    return (
        <div>
            <Sectiontitle heading={"Order For online"} subHeading={"our popular menu"}></Sectiontitle>
            <div className="grid md:grid-cols-2 mb-12 mt-4 w-3/4 mx-auto space-y-4 gap-7">
                { 
                    popularItems.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;