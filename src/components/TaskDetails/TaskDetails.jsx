import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";

const TaskDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [text, setText] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const [alreadySubmitted, setAlreadySubmitted] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_SERVER_URL}/api/v1/tasks/task/${id}`
          );
          setData(response.data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [id]);

  const handleSubmit = () => {
    if (!userInfo) {
      toast.error("Please login to submit the task.");
      return;
    }
    setLoading(true);
    if (text.trim() === "") {
      toast.error(
        "Please enter some text in the experience box before submitting."
      );
      setLoading(false);
      return;
    }
    if (videoLink.trim() === "") {
      toast.error("Please enter the video link before submitting.");
      setLoading(false);
      return;
    }

    const userData = {
      name: userInfo.name,
      email: userInfo.email,
      phone: userInfo.phone,
      uniqueCode: userInfo.uniqueCode,
    };

    const taskData = {
      taskId: id,
      taskName: data.taskName,
      taskDescription: data.taskDescription,
      video: videoLink,
    };

    const postData = {
      task: taskData,
      user: userData,
      tagName: data.tagName,
      text: text.trim(),
    };

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/api/v1/tasks/submit`, postData)
      .then((res) => {
        if (res.status === 201) {
          setText("");
          navigate("/");
          toast.success("Text submitted successfully!");
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
        toast.error("An error occurred. Please try again.");
      });
  };

  useEffect(() => {
    setLoading(true);
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (userInfo) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_SERVER_URL}/api/v1/tasks/submit/${id}`
          );

          if (response.data.message !== "Not Submitted yet") {
            const submittedTasks = {
              taskName: response.data.task.taskName,
              taskDescription: response.data.task.taskDescription,
              tagName: response.data.tagName,
            };
            setAlreadySubmitted(submittedTasks);
          }

          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  console.log(data);
  return (
    <div className="flex justify-center items-center min-h-screen lg:min-h-[90vh] text-center relative text-black">
      {data?._id && (
        <div className="lg:w-9/12 mx-auto">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${
                data?.image || "https://i.ibb.co/9WTdd0b/download-18.jpg"
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(25%)",
            }}
          ></div>
          <div className="absolute inset-0 bg-white opacity-40"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-center mb-6 mt-6">
              {data.taskName}
            </h2>
            <p className="text-black text-center mx-auto w-1/2 mb-6">
              {data.taskDescription}
            </p>
            <div className="border border-black max-w-xl my-10 mx-auto"></div>
            <h3 className="text-2xl font-semibold">
              Share your experience with us
            </h3>
            <p className="text-black mt-3">
              Make a short video of you performing the task and <br /> upload it
              somewhere, then paste the link here.
            </p>
            <div className="flex flex-col gap-2 items-end justify-end w-[320px] mx-auto">
              <input
                type="text"
                className="border border-black bg-transparent rounded-md mt-6 w-full p-2 focus:ring-1 focus:ring-gray-700 focus:outline-none placeholder:text-gray-800 placeholder:text-sm"
                placeholder="Paste the video link here (make it public)"
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
              />
              <textarea
                type="text"
                id="text"
                className="border border-black bg-transparent rounded-md mt-6 w-full p-2 min-h-32 focus:ring-1 focus:ring-gray-700 focus:outline-none placeholder:text-gray-800 placeholder:text-sm"
                placeholder="Write your experience here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Button
                className="w-full"
                disabled={
                  alreadySubmitted.tagName === data.tagName &&
                  alreadySubmitted.taskDescription === data.taskDescription &&
                  alreadySubmitted.taskName === data.taskName
                }
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetails;
