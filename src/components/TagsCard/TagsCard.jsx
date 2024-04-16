import { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const TagsCard = () => {
  const tags = [
    {
      tag: "confidence",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
      tasks: [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Story Telling Adventure",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Silly Joke Show",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Speeches Galore",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "New Reporte Challenge",
        },
      ],
    },
    {
      tag: "Leadership",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
      tasks: [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Story Telling Adventure",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Silly Joke Show",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Speeches Galore",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "New Reporte Challenge",
        },
      ],
    },
    {
      tag: "Empathy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
      tasks: [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Story Telling Adventure",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Silly Joke Show",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Speeches Galore",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "New Reporte Challenge",
        },
      ],
    },
    {
      tag: "Problem Solving",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
      tasks: [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Story Telling Adventure",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Silly Joke Show",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Speeches Galore",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "New Reporte Challenge",
        },
      ],
    },
    {
      tag: "Curiosity",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
      tasks: [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Story Telling Adventure",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Silly Joke Show",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Speeches Galore",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "New Reporte Challenge",
        },
      ],
    },
    {
      tag: "Anger Management",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
      tasks: [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Story Telling Adventure",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Silly Joke Show",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Speeches Galore",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "New Reporte Challenge",
        },
      ],
    },
    {
      tag: "Communication",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
      tasks: [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Story Telling Adventure",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Silly Joke Show",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Speeches Galore",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "New Reporte Challenge",
        },
      ],
    },
    {
      tag: "Decision Making",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
      tasks: [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Story Telling Adventure",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Silly Joke Show",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Speeches Galore",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "New Reporte Challenge",
        },
      ],
    },
    {
      tag: "Growth Mindset",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
      tasks: [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Story Telling Adventure",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Silly Joke Show",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Speeches Galore",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "New Reporte Challenge",
        },
      ],
    },
    {
      tag: "Critical Thinking",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
      tasks: [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Story Telling Adventure",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Silly Joke Show",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Speeches Galore",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "New Reporte Challenge",
        },
      ],
    },
    {
      tag: "Adaptibility",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
      tasks: [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Story Telling Adventure",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Silly Joke Show",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Speeches Galore",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "New Reporte Challenge",
        },
      ],
    },
    {
      tag: "Conflict Resolution",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
      tasks: [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Story Telling Adventure",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Silly Joke Show",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "Speeches Galore",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
          task: "New Reporte Challenge",
        },
      ],
    },
  ];
  const [selectedTagIndex, setSelectedTagIndex] = useState(null);

  return (
    <div className="w-9/12 mx-auto h-full py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tags.map((tag, i) => (
          <div key={i} className="relative">
            <div
              className="flex justify-between bg-white shadow-md rounded-md h-32 cursor-pointer"
              onClick={() => setSelectedTagIndex(i)}
            >
              <p className="p-2 text-lg font-bold">{tag.tag}</p>
              <img
                src={tag.img}
                className="w-32 h-32 object-cover rounded-r-md"
                alt=""
              />
            </div>
            {/* Conditional rendering of tasks based on the selected tag */}
            {selectedTagIndex === i && (
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">
                  Tasks for {tags[selectedTagIndex].tag}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {tags[selectedTagIndex].tasks.map((task, index) => (
                    <div key={index} className="relative group w-full">
                      <img src={task.img} alt="" className="w-full h-44" />
                      <div className="absolute bottom-0 left-0 bg-black bg-opacity-15 group-hover:bg-opacity-50 transition duration-300 text-white p-4 w-full h-44">
                        <Link to="/task-details" className="flex justify-center items-center h-full">
                          <Button
                            variant="secondary"
                            className="text-black px-4 py-2 mt-2 transition duration-300 ease-in-out transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                          >
                            Do the task
                          </Button>
                        </Link>
                      </div>
                      <p className="text-lg text-center h-10 absolute w-full bg-gray-500 text-white bottom-0 font-semibold z-40 transition duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                        {task.task}
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
