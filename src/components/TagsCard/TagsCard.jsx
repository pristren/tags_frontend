import axios from "axios";
import { useEffect, useState } from "react";
// import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";
// import axios from "axios";

const TagsCard = () => {
  // const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const userTag = JSON.parse(localStorage.getItem("userTags"));

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/v1/tags");
  //       setData(response.data.data);
  //       console.log(response);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  //   setLoading(false);
  // }, []);
  // console.log(data[0]?.tags);
  const [selectedTagIndex, setSelectedTagIndex] = useState(null);
  const [alreadySubmitted, setAlreadySubmitted] = useState([]);

  useEffect(() => {
    setLoading(true);
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (userInfo) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/v1/tasks/user/${userInfo?.email}`
          );
          const submittedTasks = response.data.map((task) => {
            return {
              taskName: task.task.taskName,
              taskDescription: task.task.taskDescription,
              tagName: task.tagName,
              image: task.image,
            };
          });
          setLoading(false);
          setAlreadySubmitted(submittedTasks);
        } catch (error) {
          setLoading(false);
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, []);

  const navigate = useNavigate();
  if (loading) {
    return <Loader />;
  }
  return (
    <div className=" w-full px-5 md:px-0 md:w-9/12 mx-auto h-full py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
        {userTag?.map((tag, i) => (
          <div key={i} className="relative">
            <div
              className="flex justify-between bg-white shadow-md rounded-md h-36 cursor-pointer overflow-hidden relative"
              onClick={() => setSelectedTagIndex(i)}
            >
              {/* needs to remove then we can */}

              <div className="absolute right-36 bg-white h-[9.7rem] -translate-y-3 w-20 rotate-12 "></div>
              {/* needs to remove then we can */}
              <p className="p-4 text-lg font-bold">{tag?.TagName}</p>
              <img
                src={tag?.image}
                loading="lazy"
                className="w-48 h-36 object-cover rounded-r-md"
                alt=""
              />
            </div>
            {/* Conditional rendering of tasks based on the selected tag */}
            {selectedTagIndex === i && (
              <div className="mt-8">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                  {userTag[selectedTagIndex]?.values.map((task, index) => (
                    <div
                      onClick={() => {
                        alreadySubmitted.find(
                          (submittedTask) =>
                            submittedTask.tagName === tag?.TagName &&
                            submittedTask.taskName === task.taskName
                        )
                          ? null
                          : navigate(`/task-details/${task?._id}`);
                      }}
                      key={index}
                      className={`relative group w-full 
                      ${
                        alreadySubmitted.find(
                          (submittedTask) =>
                            submittedTask.tagName === tag?.TagName &&
                            submittedTask.taskName === task.taskName
                        )
                          ? "opacity-50 "
                          : "cursor-pointer"
                      }
                      
                      `}
                    >
                      <div
                        className=""
                        style={{
                          backgroundImage: `url(${task.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          width: "100%",
                          height: "200px",
                        }}
                      ></div>

                      {/* <div className="absolute bottom-0 left-0 bg-black bg-opacity-15 group-hover:bg-opacity-50 transition duration-300 text-white p-4 w-full ">
                        <Link
                          to={`/task-details/${task?._id}`}
                          className="flex justify-center items-center h-full"
                        >
                          <Button
                            variant="secondary"
                            className="text-black px-4 py-2 mt-2 transition duration-300 ease-in-out transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                          >
                            Do the task
                          </Button>
                        </Link>
                      </div> */}
                      <p className="text-lg text-center  w-full bg-gray-500 text-white bottom-0 font-semibold z-40 transition duration-300 ease-in-out opacity-100 py-2">
                        {task.taskName}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsCard;
