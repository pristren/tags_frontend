import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";

const Tags = () => {
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  const [selectedTags, setSelectedTags] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const uniqueCode = user?.uniqueCode?.slice(0, 2);
  console.log(uniqueCode);
  const [data, setUserData] = useState({});
  // console.log(data);
  useEffect(() => {
    if (user?.email) {
      const getUserByEmail = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/v1/user/${user?.email}`
          );
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching user by email:", error);
          throw error;
        }
      };
      getUserByEmail();
    }
  }, [user?.email]);

  useEffect(() => {
    if (uniqueCode) {
      const fetchTags = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/v1/tags/${uniqueCode}`
          );
          // console.log(response?.data);
          setTags(response?.data?.data?.tags);
        } catch (error) {
          console.error("Error fetching tags:", error);
        }
      };
      fetchTags();
    }
  }, [uniqueCode]);

  const handleTagClick = (tag) => {
    // Toggle selection: if tag is already selected, remove it; otherwise, add it
    setSelectedTags(
      selectedTags.includes(tag)
        ? selectedTags.filter((t) => t !== tag)
        : [...selectedTags, tag]
    );
  };

  const updateUserTagsShow = async () => {
    try {
      localStorage.setItem("userTags", JSON.stringify(selectedTags));
      await axios.put(`http://localhost:5000/api/v1/user/u/${data?._id}`, {
        tagsShow: false,
      });
      navigate("/");
    } catch (error) {
      console.error("Error updating user tagsShow:", error);
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="w-9/12 mx-auto mt-5">
        <h2 className="text-center text-4xl font-bold">Select Tags</h2>
        <p className="text-center text-gray-500 my-5">
          Select 12 tags so that we can personalize
          <br /> your experience
        </p>
        <div className="flex flex-wrap gap-2 justify-center items-center  lg:w-[70%] xl:w-[60%]  mx-auto">
          {tags?.map((tag, index) => (
            <button
              key={index}
              className={`block border p-3 rounded-md ${
                selectedTags.includes(tag) ? "bg-black text-white" : ""
              }`} // Apply styles conditionally based on selection
              onClick={() => handleTagClick(tag)} // Call handleTagClick function on button click
            >
              {tag?.TagName}
            </button>
          ))}
        </div>
        <div className="flex gap-5 justify-center items-center my-5">
          <Link to="/login">
            <Button
              variant="outline"
              className="rounded-full px-10 py-1 uppercase"
            >
              Back
            </Button>
          </Link>
          <Button
            onClick={updateUserTagsShow}
            className="rounded-full px-10 py-1 uppercase"
            disabled={selectedTags.length !== 12}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tags;
