import { useContext, useEffect, useRef, useState } from 'react';
import loginBg from '../../assets/others/authentication.png'
import loginSide from '../../assets/others/login.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin';


const Login = () => {

    const { signIn } = useContext(AuthContext)

    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location?.state?.from?.pathname || "/"

    const captchaRef = useRef()

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(password, email)

        signIn(email, password)
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;

        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false)
        }

        else {
            setDisabled(true)
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${loginBg}")` }}>

            <div style={{ backgroundImage: `url("${loginBg}")` }} className='lg:w-3/4 2xl:h-[90vh] rounded-lg mx-auto shadow-2xl'>
                <div className='xl:flex flex-row-reverse items-center justify-around'>
                    <div>
                        <img className='w-3/4' src={loginSide} alt="" />
                    </div>
                    <div className='flex-1'>
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className='text-2xl text-center'>LogIn</h1>
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

                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={captchaRef} name='captcha' placeholder="Type Here Captcha above" className="input input-bordered" required />
                                <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn btn-primary">Login</button>
                            </div>
                            <SocialLogin></SocialLogin>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;