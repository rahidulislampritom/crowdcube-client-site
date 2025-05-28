import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const location = useLocation()
    // console.log(location)

    const navigate = useNavigate()

    const { setUser, userSignin, googleSignin } = useContext(AuthContext)
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        // const loginValue = {

        //     email,
        //     password
        // }
        // console.log(loginValue);

        // authSignin 
        userSignin(email, password)
            .then((result) => {
                // console.log(result.user)

                Swal.fire({
                    title: 'Signin successful!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Explore'
                })
                // alert('Signin successful')
                setUser(result.user);

                // related with privateRoute  
                location.state
                    ? navigate(location.state)
                    : navigate('/')



            })
            .catch(() => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Please,give valid information',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
                // console.log('login error', err)
            })
    }

    const [loginPassIcon, setLoginPassIcon] = useState(false);

    // google signin
    const handleGoogleLogin = () => {
        googleSignin()
            .then(() => {
                location.state
                    ? navigate(location.state)
                    : navigate('/')


            })
            .catch(() => {

            })

    }
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full md:min-w-xl shrink-0 shadow-2xl p-3">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <div className="card-body">
                            <form onSubmit={handleLoginSubmit}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input name="email" type="email" className="input w-full" placeholder="Email" />
                                </fieldset>
                                <fieldset className="fieldset relative">
                                    <label className="label">Password</label>
                                    <input name="password" type={loginPassIcon ? 'text' : 'password'} className="input w-full" placeholder="Password" />
                                    <div className="absolute bottom-3 right-6 text-xl z-1" onClick={() => setLoginPassIcon(!loginPassIcon)}>
                                        {
                                            loginPassIcon
                                                ? <FiEye />
                                                : <FiEyeOff />
                                        }
                                    </div>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                            <h2>Don't have an account?<Link to={'/register'} className="btn btn-link">SignUp</Link></h2>
                            <div className="flex justify-center items-center bg-base-200">
                                <button
                                    onClick={handleGoogleLogin}
                                    className="btn btn-outline btn-wide flex items-center gap-3 text-base hover:shadow-lg transition-all duration-200"
                                >
                                    <FcGoogle className="text-2xl" />
                                    Sign in with Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Login;