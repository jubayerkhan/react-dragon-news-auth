import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";



const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('locaiton in the login page', location)

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            console.log(result.user);

            //nevigate after login
            navigate(location?.state? location.state: "/");
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <h2 className="text-3xl my-10 text-center">Please login</h2>
                <form onSubmit={handleLogin} className="mx-auto md:w-3/4 lg:w-1/2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an account? <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;