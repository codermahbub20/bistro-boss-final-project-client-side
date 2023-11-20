import { useEffect, useState } from "react";
// import useAxiosPublic from "./useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";


const useMenu = () => {

    // const axiosPublic = useAxiosPublic()

    const [menu, setMenu] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => {
            setMenu(data)
        })
    },[])
    return [menu]

    // const {data: menu = [], isPending: loading, refetch} = useQuery({
    //     queryKey: ['menu'],
    //     queryFn: async() =>{
    //         const res = await axiosPublic.get('/menu')
    //         return res.data;
    //     }
    // })

    // return [menu]
};

export default useMenu;