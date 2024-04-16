import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const TaskDetails = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const {id} = useParams();
  console.log(id);
  const [data, setData] = useState({})
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/tasks/task/${id}`);
        setData(response.data.data);
        console.log(response);
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

    const data = {
      text: text.trim(),
    };

    axios
      .post(`http://localhost:5000/api/v1/tasks/submit`, data)
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data));
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
    <div className="flex justify-center items-center h-screen text-center relative text-white">
      <div className="lg:w-9/12 mx-auto">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://i.ibb.co/9WTdd0b/download-18.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(30%)",
          }}
        ></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16">
            Storytelling Adventure
          </h2>
          <p className="text-gray-200 text-center mx-auto w-1/2 mb-10">
            Are you ready to embark on a magical journey through your
            imagination? Your mission, should you choose to accept it, is to
            weave together a tale that will dazzle and delight all who hear it.
          </p>
          <p className="text-gray-200 text-center mx-auto w-1/2">
            Unleash your storytelling superpowers and share a tale that will
            leave everyone enchanted? The world is waiting to be captivated by
            your imagination!
          </p>
          <div className="border border-gray-200 w-full my-16"></div>
          <h3 className="text-2xl font-semibold">
            Share your experience with us
          </h3>
          <div className="flex flex-col gap-2 items-center justify-center w-[320px] mx-auto">
            <textarea
              type="text"
              id="text"
              className="border border-white bg-transparent rounded-md mt-10 w-full"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button variant="secondary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
