import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function PrivateRoute({ children }) {
    const { token } = useUser();
    console.log(token);
    if (token === null) {
        return <Navigate to="/admin-login" />;
    }
    return children;
}
