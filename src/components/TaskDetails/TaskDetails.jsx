import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const TaskDetails = () => {
  return (
    <div className=" flex justify-center items-center h-screen text-center relative text-white">
      <div className="lg:w-9/12 mx-auto">
      <div className="absolute inset-0" style={{backgroundImage: 'url("https://i.ibb.co/9WTdd0b/download-18.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(50%)'}}>
      </div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-16">
          Storytelling Adventure
        </h2>
        <p className="text-gray-200 text-center mx-auto w-1/2 mb-10">
          Are you ready to embark on a magical journey through your imagination?
          Your mission, should you choose to accept it, is to weave together a
          tale that will dazzle and delight all who hear it.
        </p>
        <p className="text-gray-200 text-center mx-auto w-1/2">
          Unleash your storytelling superpowers and share a tale that will leave
          everyone enchanted? The world is waiting to be captivated by your
          imagination!
        </p>
        <div className="border border-gray-200 w-full my-16"></div>
        <h3 className="text-2xl font-semibold">
          Share your experience with us
        </h3>
        <input type="text" id="text" className="border border-white bg-transparent p-2 rounded-md mr-5 mt-10" />
        <Link to="/tags-card">
        <Button variant="secondary">Submit</Button></Link>
      </div>
    </div>
    </div>
  );
};

export default TaskDetails;
