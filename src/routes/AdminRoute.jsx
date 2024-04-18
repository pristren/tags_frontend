/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("");

  useEffect(() => {
    if (user) {
      const getUser = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_SERVER_URL}/api/v1/user/${user?.email}`
          );
          setRole(response.data.role);
        } catch (error) {
          console.error("Error fetching user by email:", error);
          throw error;
        } finally {
          setLoading(false);
        }
      };
      getUser();
    }
  }, [user]);

  if (loading) return;

  return !loading && role !== "admin" ? (
    <Navigate to={`/`} state={{ from: location }} />
  ) : (
    children
  );
};

export default AdminRoute;
