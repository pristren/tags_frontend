import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import axios from "axios";
import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
const TaskCompletionParcent = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState([]);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  console.log(userData);
  
  useEffect(() => {
    const getUserByEmail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/tasks/${userInfo?.email}`
        );
        setUserData(response.data); // Assuming the response data contains the user object

        // Calculate completion percentage
        const totalTasks = 48; // Total number of tasks
        const submittedTasks = response.data.length; // Number of submitted tasks
        const percentage = (submittedTasks / totalTasks) * 100;
        setCompletionPercentage(percentage);
      } catch (error) {
        console.error("Error fetching user by email:", error);
        throw error; // You can handle the error in the calling function
      }
    };
    getUserByEmail();
  }, []);
  return (
    <div className="w-9/12 mx-auto text-center flex flex-col justify-center items-center h-screen gap-10">
      <h1 className="bg-black text-white text-8xl font-semibold w-80 h-80 flex justify-center items-center rounded-full p-5 mx-auto">
        {completionPercentage?.toFixed(2) }%
      </h1>

      <p>
        You've made incredible strides already! <br /> keep going, your journey
        to success is <br /> remarkable
      </p>
      <Link to="/tags-card">
        <Button className="px-10 uppercase my-10">Visit Your Task Board</Button>
      </Link>
    </div>
  );
};

export default TaskCompletionParcent;
