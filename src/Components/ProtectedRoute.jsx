import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";



const ProtectedRoute = ({children}) => {

    // console.log(children)
    const location = useLocation()

    const {user,loading} = useContext(AuthContext)


    if (loading){
        return <span className="loading loading-spinner loading-lg bg-blue-900"></span>
    }

    if (user){
        return children
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>;
    
};

export default ProtectedRoute;