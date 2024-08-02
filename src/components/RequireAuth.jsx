import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function RequireAuth({ children }) {
  const token = useContext(AuthContext).token;
  if (!token) {
    return <Navigate to="/login" replace />; //If token is not present, redirects to /login using Navigate.
  }
  return children; //If token is present, renders children (in this case, Dashboard).
}