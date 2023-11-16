/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";





const FoodCard = ({ item }) => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()

    const [,refetch] = useCart()


    const { image, price, name, recipe, _id } = item;

    const handleAddToCart = (food) => {
        if (user && user.email) {
            console.log(food) //https://meet.google.com/xhv-onyq-got
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })



        } else {
            Swal.fire({
                title: "You Are not loggedIn",
                text: "Please log in and add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, LogIn Now"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food Image" /></figure>
            <p className="absolute top-0 right-0 bg-slate-800 text-white p-1 rounded-lg mr-4 mt-4">${price}</p>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=>handleAddToCart(item)} className="btn bg-[#E8E8E8] hover:bg-[#111827] text-[#BB8506] border-0 border-b-4 hover:border-b-4 hover:border-b-[#BB8506] border-b-[#BB8506]">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;