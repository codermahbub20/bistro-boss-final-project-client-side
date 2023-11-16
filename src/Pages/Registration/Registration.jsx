import { useContext } from 'react';
import loginBg from '../../assets/others/authentication.png'
import loginSide from '../../assets/others/login.png'
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
// import axiosPublic from '../../hooks/useAxiosPublic';
import axios from 'axios';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Registration = () => {

    const { createUser } = useContext(AuthContext)

    const axiosPublic = useAxiosPublic()

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(password, email, name, photo)

        createUser(email, password)
            .then(res => {
                console.log(res.user)
                updateProfile(name, password)

                const userInfo = {
                    name, email
                }

                axiosPublic.post('/users', userInfo)     //http://localhost:5000
                    .then(res => {
                        console.log(res.data)
                    })

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${loginBg}")` }}>

            <div style={{ backgroundImage: `url("${loginBg}")` }} className='lg:w-3/4 2xl:h-[80vh] rounded-lg mx-auto shadow-2xl'>
                <div className='xl:flex flex-row-reverse items-center justify-around'>
                    <div>
                        <img className='w-3/4' src={loginSide} alt="" />
                    </div>
                    <div className='flex-1'>
                        <form onSubmit={handleSignUp} className="card-body">
                            <h1 className='text-2xl text-center'>Registration Now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;