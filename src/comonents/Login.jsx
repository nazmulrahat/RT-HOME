import { Link, useNavigate } from "react-router-dom";
import '../comonents/css.css/css.css'
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";

const Login = () => {

    const { signInUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGooele =()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" required type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="flex  flex-col justify-center items-center">
                        <div className="form-control mt-6">
                            <button className="btn btn-primary mb-4">Login</button>
                            
                        </div>
                        <button onClick={handleGooele}  className="btn w-fit text-white"><img src="	https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="" />Google Login </button>
                        </div>
                       
                       
                    </form>
                    <p>New here? Please <Link className="text-purple-500" to='/register'>
                        Register
                    </Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;