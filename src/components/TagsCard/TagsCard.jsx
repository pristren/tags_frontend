const TagsCard = () => {
  const tags = [
    {
      tag: "confidence",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
    },
    {
      tag: "Leadership",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
    },
    {
      tag: "Empathy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
    },
    {
      tag: "Problem Solving",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
    },
    {
      tag: "Curiosity",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
    },
    {
      tag: "Anger Management",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
    },
    {
      tag: "Communication",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
    },
    {
      tag: "Decision Making",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
    },
    {
      tag: "Growth Mindset",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
    },
    {
      tag: "Critical Thinking",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
    },
    {
      tag: "Adaptibility",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
    },
    {
      tag: "Conflict Resolution",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s",
    },
  ];

  const tasks = [
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
  ];

  return (
    <div className=" w-9/12 mx-auto h-screen py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tags.map((tag, i) => (
          <div
            key={i}
            className="flex justify-between max-w-96 bg-white shadow-md rounded-md h-32"
          >
            <p className="p-2 text-lg font-bold">{tag.tag}</p>
            <img src={tag.img} className="w-32 h-32 object-cover" alt="" />
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {
            tasks.map((task, i) => <div key={i} className="relative">
            <img src={task.img} alt="" className="w-44 h-44" />
                <p className="text-lg absolute bg-gray-500 w-full text-white bottom-0 font-semibold z-40">{task.task}</p>
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-44 h-44">
                <button className="bg-blue-500 text-white px-4 py-2 mt-2 transition duration-300 ease-in-out transform translate-y-full opacity-0 hover:opacity-100 hover:translate-y-0">Do the task</button>
            </div>
        </div>
        )
        }
      </div>
    </div>
  );
};

export default TagsCard;
