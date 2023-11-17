import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const { googleLogin } = useContext(AuthContext);

    const handleGoogleLogIn = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                const userInfo = {
                    email: res.user.email,
                    name: res.user.displayName
                }

                axiosPublic.post('/users',userInfo)
                .then(res => {
                    console.log(res.data)
                    navigate('/')
                })

            })
    }

    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogIn} className="btn btn-primary">
                Google
                <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;