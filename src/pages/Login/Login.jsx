import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";



const Login = () => {
    const { signIn } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })

    }
    return (
        <div>
            <form onSubmit={handleLogin} className="form w-2/5 mx-auto space-y-6 border-2 border-blue-200 p-8 rounded-xl">

                <h2 className="text-3xl text-center font-bold ">Login Please</h2>
                <div>
                    <p className="font-bold ">Email:</p>
                    <input type="email" name="email" placeholder="write your email address" className="input input-bordered input-success w-full" />
                </div>

                <div>
                    <p className="font-bold " >Password:</p>
                    <input type="password" name="password" placeholder="write your password" className="input input-bordered input-success w-full" />
                </div>
                <button className="btn btn-primary text-white w-full text-xl font-bold">Login</button>
            </form>

            <p className="text-center m-6">Do not have an account please <Link className=" text-primary font-bold" to={'/register'}>Register</Link ></p>

        </div>
    );
};

export default Login;