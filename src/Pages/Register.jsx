import { useContext, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AiFillEye } from "react-icons/ai";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {

    const navigate = useNavigate();

    const { setUser, userSignUp, userProfileUpdate } = useContext(AuthContext)
    const handleSignupSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const signUpValue = {
            name,
            photo,
            email,
        }
        // console.log(signUpValue);

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            alert('Password must be at least 6 characters and include both uppercase and lowercase letters.')
            return
        }
        // signup user firebase 
        userSignUp(email, password)
            .then((result) => {
                // console.log(result.user)
                Swal.fire({
                    title: 'Signup successful!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                setUser(result.user)
                // update name photo URL fireBase  start
                userProfileUpdate(
                    {
                        displayName: name,
                        photoURL: photo,
                    }
                )

                    .then(() => {
                        // profile update
                        navigate('/')
                    })
                    .catch(() => {
                        // console.log('update user error', err)
                    })
                // update name photo URL fireBase  end

            })
            .catch(() => {
                // console.log('signUp Error', err.message)
            })

        fetch('https://crowdcube-server-site-gamma.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(signUpValue)
        })
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })


        form.reset()
    }
    const [passIcon, setPassIcon] = useState(false)

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div className="pb-10">
                <div className="hero bg-base-200 pt-10">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card bg-base-100 w-full md:min-w-xl shrink-0 shadow-2xl p-3">
                            <h1 className="text-5xl font-bold text-center">Register now!</h1>
                            <div className="card-body">
                                <form onSubmit={handleSignupSubmit}>
                                    <fieldset className="fieldset">
                                        <label className="label">Name</label>
                                        <input name="name" type="text" className="input w-full" placeholder="Name" />
                                    </fieldset>
                                    <fieldset className="fieldset">
                                        <label className="label">Photo</label>
                                        <input name="photo" type="text" className="input w-full" placeholder="PhotoURL" />
                                    </fieldset>
                                    <fieldset className="fieldset">
                                        <label className="label">Email</label>
                                        <input name="email" type="email" className="input w-full" placeholder="Email" />
                                    </fieldset>
                                    <fieldset className="fieldset ">
                                        <label className="label">Password</label>
                                        {
                                            passIcon
                                                ? <input name="password" type="text" className="input w-full" placeholder="Password" />
                                                : <input name="password" type="password" className="input w-full " placeholder="Password" />
                                        }

                                        <div className="absolute  bottom-40 right-12 cursor-pointer z-1" onClick={() => setPassIcon(!passIcon)}>
                                            {
                                                passIcon
                                                    ? <AiFillEye className="text-2xl " />
                                                    : <IoEyeOff className=" text-2xl " />
                                            }

                                        </div>

                                    </fieldset>
                                    <fieldset className="fieldset">
                                        <button className="btn btn-neutral mt-4">SignUp</button>
                                    </fieldset>
                                </form>
                                <h2>Have an account?<Link to={'/login'} className="btn btn-link">Login</Link></h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;