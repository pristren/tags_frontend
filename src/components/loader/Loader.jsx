// Loader.jsx
import { lineSpinner } from "ldrs";
import "./Loader.css";

lineSpinner.register();

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="flex justify-center items-center h-full">
        <l-line-spinner
          size="40"
          stroke="3"
          speed="1"
          color="black"
        ></l-line-spinner>
      </div>
    </div>
  );
};

export default Loader;
