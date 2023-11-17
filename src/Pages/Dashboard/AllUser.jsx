import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";


const AllUser = () => {

    const axiosSecure = useAxiosSecure()


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    const handleMakeAdmin = (id) => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `You make an Admin`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

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
                axiosSecure.delete(`/users/${id}`)

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
        <div>
            <div className="bg-white shadow-lg rounded-lg p-10">
                <div className="flex justify-around mb-2">
                    <h1 className="text-3xl">Total Users:{users.length}</h1>
                    <button className="btn bg-[#D1A054] text-white hover:bg-[#D1A054]">Pay</button>
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] p-10 text-white rounded-lg">
                            <tr >
                                <th></th>
                                <th>Name</th>
                                <th>User</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask  w-[75px] h-[75px]">
                                                    <h1 className="text-xl">{item.name}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h1 className="text-xl">{item.email}</h1>
                                    </td>
                                    <td>{item.role === 'admin' ? 'Admin' :
                                        <button onClick={() => handleMakeAdmin(item._id)} className="btn"><FaUsers></FaUsers></button>}</td>
                                    <th>
                                        <button onClick={() => handleCartToDelete(item._id)} className="btn btn-ghost btn-sm"><FaTrash className="w-5 h-5"></FaTrash></button>
                                    </th>
                                </tr>)
                            }
                            {/* row 1 */}

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;