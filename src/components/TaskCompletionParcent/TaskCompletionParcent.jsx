import { Button } from "../ui/button";

/* eslint-disable react/no-unescaped-entities */
const TaskCompletionParcent = () => {
  return (
    <div className="w-9/12 mx-auto text-center flex flex-col justify-center items-center h-screen gap-10">
      <h1 className="bg-black text-white text-8xl font-semibold w-[250px] h-[250px] flex justify-center items-center rounded-full p-5 mx-auto">72%</h1>

      <p>
        You've made incredible strides already! <br /> keep going, your journey to
        success is <br /> remarkable
      </p>
      <Button className="px-10 uppercase my-10">Visit Your Task Board</Button>
    </div>
  );
};

export default TaskCompletionParcent;
