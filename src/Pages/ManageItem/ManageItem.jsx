import { FaTrash } from "react-icons/fa6";
import useMenu from "../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Sectiontitle from "../../Component/SectionTitle/Sectiontitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const ManageItem = () => {

    const [menu] = useMenu()
    const axiosSecure = useAxiosSecure()

    const handleCartToDelete = id => {
        console.log(id)
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
                axiosSecure.delete(`/menu/${id}`)    
                    .then(res => {
                        console.log(res) 
                        if (res.data.deletedCount > 0) {
                            // refetch();
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

    const handleMenuUpdate = id =>{

    }


    return (
        <div>

            <Sectiontitle heading='Manage All Items' subHeading="Hurry Up !"></Sectiontitle>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] p-10 text-white rounded-lg">
                        <tr >

                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map(item => <tr key={item._id}>

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
                                    <button onClick={() => handleMenuUpdate(item._id)} className="btn btn-ghost btn-sm"><FaEdit ></FaEdit></button>
                                </th>
                                <th>
                                    <button onClick={() => handleCartToDelete(item._id)} className="btn btn-ghost btn-sm"><FaTrash ></FaTrash></button>
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

export default ManageItem;