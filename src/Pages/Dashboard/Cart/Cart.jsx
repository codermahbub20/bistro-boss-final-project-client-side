import { FaDeleteLeft } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Cart = () => {

    const [cart,refetch] = useCart();

    const totalPrice = parseInt(cart.reduce((total, item) => total + item.price, 0))
    const axiosSecure = useAxiosSecure()

    const handleCartToDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
               
                    .then(res => {
                        console.log(res) 

                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-10">
            <div className="flex justify-evenly">
                <h1 className="text-3xl">Total Order: {cart.length}</h1>
                <h1 className="text-3xl">Total Price: $ {totalPrice}</h1>
                <button className="btn bg-[#D1A054] text-white hover:bg-[#D1A054]">Pay</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] p-10 text-white rounded-lg">
                        <tr >

                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(item => <tr key={item._id}>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask  w-[75px] h-[75px]">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h1 className="text-xl">{item.name}</h1>
                                </td>
                                <td className="text-xl">$ {item.price}</td>
                                <th>
                                    <button onClick={() => handleCartToDelete(item._id)} className="btn btn-ghost btn-sm"><FaDeleteLeft className="w-10 h-7"></FaDeleteLeft></button>
                                </th>
                            </tr>)
                        }
                        {/* row 1 */}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Cart;