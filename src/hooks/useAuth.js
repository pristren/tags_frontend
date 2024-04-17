import { useState, useEffect } from "react";
import axios from "axios";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (userInfo?.email) {
      const fetchUserByEmail = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/v1/user/${userInfo?.email}`
          );
          setUser(response.data);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchUserByEmail();
    }
  }, [userInfo?.email]);

  return { user };
};
