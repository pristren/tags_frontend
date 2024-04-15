import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

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
    <div className="w-9/12 mx-auto h-screen py-10 flex justify-center items-center">
      <Sheet>
        <SheetTrigger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tags.map((tag, i) => (
            <div
              key={i}
              className="flex justify-between max-w-96 bg-white shadow-md rounded-md h-32 cursor-pointer"
            >
              <p className="p-2 text-lg font-bold">{tag.tag}</p>
              <img
                src={tag.img}
                className="w-32 h-32 object-cover rounded-r-md"
                alt=""
              />
            </div>
          ))}
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Here is the task of this tag</SheetTitle>
            {tasks.map((task, i) => (
              <div
                key={i}
                className="relative group flex justify-center items-center border"
              >
                <img src={task.img} alt="" className="w-full h-44" />
                <SheetDescription className="absolute bottom-0 left-0 bg-black bg-opacity-15 group-hover:bg-opacity-50 transition duration-300 text-white p-4 w-full h-44">
                  <div className="flex justify-center items-center h-full">
                    <Button
                      variant="secondary"
                      className="text-black px-4 py-2 mt-2 transition duration-300 ease-in-out transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      Do the task
                    </Button>
                  </div>
                </SheetDescription>
                <p className="text-lg text-center h-10 absolute w-full bg-gray-500 text-white bottom-0 font-semibold z-40 transition duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                  {task.task}
                </p>
              </div>
            ))}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default TagsCard;
