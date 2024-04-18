import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import axios from "axios";
import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
const TaskCompletionParcent = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  // const [userData, setUserData] = useState([]);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userInfo) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_SERVER_URL}/api/v1/tasks/user/${
              userInfo?.email
            }`
          );
          // console.log(response.data);
          const totalTasks = 48; // Total number of tasks
          const submittedTasks = response.data.length; // Number of submitted tasks
          const percentage = (submittedTasks / totalTasks) * 100;
          setCompletionPercentage(percentage);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [userInfo]);
  return (
    <div className="w-9/12 mx-auto text-center flex flex-col justify-center items-center   gap-10">
      <h1 className="bg-black text-white text-8xl font-semibold w-80 h-80 flex justify-center items-center rounded-full p-5 mx-auto">
        {loading ? (
          <l-line-spinner
            size="50"
            stroke="3"
            speed="1"
            color="white"
          ></l-line-spinner>
        ) : (
          completionPercentage?.toFixed(2) + "%"
        )}
      </h1>

      <p>
        You've made incredible strides already! <br /> keep going, your journey
        to success is <br /> remarkable
      </p>
      <Link to="/tags-card">
        <Button className="px-10 uppercase mb-10">Visit Your Task Board</Button>
      </Link>
    </div>
  );
};

export default TaskCompletionParcent;
