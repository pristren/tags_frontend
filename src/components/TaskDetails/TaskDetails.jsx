import { FolderUp } from "lucide-react";

const TaskDetails = () => {
  return (
    <div className="w-9/12 mx-auto flex justify-center items-center h-screen text-center">
      <div>
        <h2 className="text-3xl font-bold text-center mb-16">
          Storytelling Adventure
        </h2>
        <p className="text-gray-500 text-center mx-auto w-1/2 mb-10">
          Are you ready to embark on a magical journey through your imagination?
          Your mission, should you choose to accept it, is to weave together a
          tale that will dazzle and delight all who hear it.
        </p>
        <p className="text-gray-500 text-center mx-auto w-1/2">
          Unleash your storytelling superpowers and share a tale that will leave
          everyone enchanted? The world is waiting to be captivated by your
          imagination!
        </p>
        <div className="border border-gray-500 w-full my-16"></div>
        <h3 className="text-2xl font-semibold">
          Share your experience with us
        </h3>
        <label
          htmlFor="file"
        >
          <div className="border border-dashed border-gray-300 p-5 w-1/2 mx-auto my-10 cursor-pointer">
          <FolderUp className="w-20 h-20 mx-auto my-5" />
          <p className="text-lg text-gray-500">
            Upload a short video of you performing the <br /> task and talking about it
          </p>
          </div>
        </label>
        <input type="file" id="file" className="hidden" />
      </div>
    </div>
  );
};

export default TaskDetails;
