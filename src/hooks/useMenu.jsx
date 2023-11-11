import { useEffect, useState } from "react";


const useMenu = () => {
    const [popularItems, setPopularItems] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            setPopularItems(data)
        })
    },[])
    return [popularItems]
};

export default useMenu;