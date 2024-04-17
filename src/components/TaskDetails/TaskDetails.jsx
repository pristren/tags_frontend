import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const TaskDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [text, setText] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/tasks/task/${id}`
        );

        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = () => {
    if (text.trim() === "") {
      toast.error("Please enter some text before submitting.");
      return;
    }

    const userData = {
      name: userInfo.name,
      email: userInfo.email,
      phone: userInfo.phone,
    };

    const taskData = {
      taskName: data.taskName,
      taskDescription: data.taskDescription,
    };

    const postData = {
      task: taskData,
      user: userData,
      text: text.trim(),
    };

    axios
      .post(`http://localhost:5000/api/v1/tasks/submit`, postData)
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          setText("");
          navigate("/tags-card");
          toast.success("Text submitted successfully!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again.");
      });
  };

  return (
    <div className="flex justify-center items-center h-screen text-center relative text-black">
      <div className="lg:w-9/12 mx-auto">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${
              data?.image || "https://i.ibb.co/9WTdd0b/download-18.jpg"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(30%)",
          }}
        ></div>
        <div className="absolute inset-0 bg-white opacity-30"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16">
            {data.taskName}
          </h2>
          <p className="text-black text-center mx-auto w-1/2 mb-10">
            {data.taskDescription}
          </p>
          <div className="border border-black max-w-xl my-16 mx-auto"></div>
          <h3 className="text-2xl font-semibold">
            Share your experience with us
          </h3>
          <p className="text-black mt-5">
            Upload a short video of you performing the task and <br /> talking about it
          </p>
          <div className="flex flex-col gap-2 items-end justify-end w-[320px] mx-auto">
            <textarea
              type="text"
              id="text"
              className="border border-black bg-transparent rounded-md mt-10 w-full p-2 min-h-32"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button className="w-full" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
