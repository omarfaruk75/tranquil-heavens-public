import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";


const PrivateRoute = ({ childern }) => {
    const { user } = useContext(AuthContext);


    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user) {
        return childern;
    }

    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;