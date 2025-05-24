import { useContext } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

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
                alert('signup successful')

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
                    .catch((err) => {
                        console.log('update user error', err)
                    })
                // update name photo URL fireBase  end

            })
            .catch((err) => {
                console.log('signUp Error', err.message)
            })

        fetch('http://localhost:5500/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(signUpValue)
        })
            .then(res => res.json())
            .then(data => {
                console.log('users signup', data)
            })


        form.reset()
    }
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div>
                <div className="hero bg-base-200 min-h-screen">
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
                                    <fieldset className="fieldset">
                                        <label className="label">Password</label>
                                        <input name="password" type="password" className="input w-full" placeholder="Password" />
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