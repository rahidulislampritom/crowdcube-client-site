import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Loading from "../Components/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);

    const location = useLocation();
    // console.log(location);
    // console.log(user)
    if (loader) {
        return <Loading></Loading>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>


};

export default PrivateRoute;