import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import axios from "axios";

const TagsCard = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/tags");
        setData(response.data.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data[0]?.tags);
  const [selectedTagIndex, setSelectedTagIndex] = useState(null);

  return (
    <div className="w-9/12 mx-auto h-full py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data[0]?.tags?.map((tag, i) => (
          <div key={i} className="relative">
            <div
              className="flex justify-between bg-white shadow-md rounded-md h-32 cursor-pointer"
              onClick={() => setSelectedTagIndex(i)}
            >
              <p className="p-4 text-lg font-bold">{tag?.TagName}</p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s"
                className="w-32 h-32 object-cover rounded-r-md"
                alt=""
              />
            </div>
            {/* Conditional rendering of tasks based on the selected tag */}
            {selectedTagIndex === i && (
              <div className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {data[0]?.tags[selectedTagIndex]?.values.map((task, index) => (
                    <div key={index} className="relative group w-full">
                      <img src={task.image} alt="" className="w-full h-44" />
                      <div className="absolute bottom-0 left-0 bg-black bg-opacity-15 group-hover:bg-opacity-50 transition duration-300 text-white p-4 w-full h-44">
                        <Link to={`/task-details/${task?._id}`} className="flex justify-center items-center h-full">
                          <Button
                            variant="secondary"
                            className="text-black px-4 py-2 mt-2 transition duration-300 ease-in-out transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                          >
                            Do the task
                          </Button>
                        </Link>
                      </div>
                      <p className="text-lg text-center h-10 absolute w-full bg-gray-500 text-white bottom-0 font-semibold z-40 transition duration-300 ease-in-out opacity-100 group-hover:opacity-0">
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
