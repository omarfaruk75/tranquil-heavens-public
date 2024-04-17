import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";



const Register = () => {
    const [registerError, setRegisterError] = useState([])
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const confirmPassword = form.get('cpassword');


        // Validation: Ensure password and confirm password match
        if (password !== confirmPassword) {
            console.error("Passwords do not match");
            return;
        }

        const hasMinimumLength = password.length >= 6;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialCharacter = /[!@#$%^&*]/.test(password);







        if (!hasMinimumLength) {
            // Password does not meet minimum length requirement
            setRegisterError('The password should be at least 6 characters long');
        } else if (!hasUppercase) {
            // Password does not contain uppercase letter
            setRegisterError('Your password should have at least one uppercase letter');
        } else if (!hasLowercase) {
            // Password does not contain lowercase letter
            setRegisterError('Your password should have at least one lowercase letter');
        } else if (!hasDigit) {
            // Password does not contain digit
            setRegisterError('Your password should have at least one digit');
        } else if (!hasSpecialCharacter) {
            // Password does not contain special character
            setRegisterError('Your password should have at least one special character');
        } else {
            // Password meets all requirements
            // Proceed with registration
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <form onSubmit={handleRegister} className="form w-2/5 mx-auto space-y-6 border-2 border-blue-200 p-8 rounded-xl">

                <h2 className="text-3xl text-center font-bold ">RegisterPlease</h2>
                <div>
                    <p className="font-bold ">Name:</p>
                    <input type="text" name="name" placeholder="write your name" className="input input-bordered input-success w-full" />
                </div>
                <div>
                    <p className="font-bold ">Email:</p>
                    <input type="email" name="email" placeholder="write your email address" className="input input-bordered input-success w-full" />
                </div>
                <div>
                    <p className="font-bold ">Photo URL</p>
                    <input type="text" name="photo" placeholder="photo url" className="input input-bordered input-success w-full" />
                </div>

                <div>
                    <p className="font-bold " >Password:</p>
                    <input type="password" name="password" placeholder="write your password" className="input input-bordered input-success w-full" />
                </div>
                <div>
                    <p className="font-bold " >Confirm Password:</p>
                    <input type="password" name="cpassword" placeholder="write your confirm password" className="input input-bordered input-success w-full" />
                </div>
                <button type="submit" className="btn btn-primary text-white w-full text-xl font-bold">Register</button>

            </form>

            <p className="text-center m-6">Do not have an account please <Link className=" text-primary font-bold" to={'/Login'}>Login</Link ></p>

        </div >
    );
};

export default Register;